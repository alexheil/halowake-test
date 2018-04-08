class Users::PurchasesController < ApplicationController

  def show
    @seller = User.friendly.find(params[:user_id])
    @album = Album.friendly.find(params[:album_id])
    @photo = Photo.friendly.find(params[:photo_id])
    @purchase = Purchase.friendly.find(params[:id])
    @buyer = current_user
  end

  def create
    @user = User.friendly.find(params[:user_id])
    @album = Album.friendly.find(params[:album_id])
    @photo = Photo.friendly.find(params[:photo_id])
    @purchase = @photo.purchases.build(purchase_params)

    @purchase.buyer_id = current_user.id
    @purchase.seller_id = @user.id
    @purchase.complete_price = (@photo.total_price * @purchase.quantity) + @purchase.pay_your_own_price

    if @purchase.save

      Stripe.api_key = "sk_test_ECd3gjeIEDsGkySmF8FQOC5i"
      customer = Stripe::Customer.retrieve(current_user.customer_id)

      if customer.default_source.present?

        amount = ((@purchase.complete_price) * 100)
        percent = @user.membership.percent * 0.01
        application_fee = ((@purchase.complete_price * (percent + 0.034) + 0.30) * 100).round

        begin
          charge = Stripe::Charge.create(
            amount: amount,
            application_fee: application_fee,
            currency: @user.payment_setting.currency,
            destination: @user.payment_setting.stripe_id,
            customer: customer.id,
            description: "#{@user.username} | Halowake"
          )
        rescue Stripe::CardError => e
          # The card has been declined
        end

        if charge.save
          @purchase.update_attributes(
            stripe_charge_id: charge.id
          )
          # send_purchase_email
          redirect_to user_album_photo_path(@user, @album, @photo)
          flash[:notice] = "#{@user.username} needs to know where to ship this."
        else
          render 'checkout'
          flash.now[:alert] = "You have failed."
        end

      else
        redirect_to checkout_user_album_photo_purchase_path(@user, @album, @photo, @purchase)
        flash[:notice] = "How will you pay for this?"
      end
    else
      redirect_to user_album_photo_path(@user, @album, @photo)
      flash.now[:alert] = "You have failed."
    end
  end

  def checkout
    @seller = User.friendly.find(params[:user_id])
    @album = Album.friendly.find(params[:album_id])
    @photo = Photo.friendly.find(params[:photo_id])
    @purchase = Purchase.friendly.find(params[:id])
    @buyer = current_user
  end

  def charge
    @seller = User.friendly.find(params[:user_id])
    @album = Album.friendly.find(params[:album_id])
    @photo = Photo.friendly.find(params[:photo_id])
    @purchase = Purchase.friendly.find(params[:id])
    @buyer = current_user

    Stripe.api_key = "sk_test_ECd3gjeIEDsGkySmF8FQOC5i"

    customer = Stripe::Customer.retrieve(@buyer.customer_id)

    token = params[:stripeToken]
    amount = ((@purchase.complete_price) * 100)
    percent = @seller.membership.percent * 0.01
    application_fee = ((@purchase.complete_price * (percent + 0.034) + 0.30) * 100).round

    begin
      charge = Stripe::Charge.create(
        amount: amount,
        application_fee: application_fee,
        currency: @seller.payment_setting.currency,
        destination: @seller.payment_setting.stripe_id,
        source: token,
        description: "#{@seller.username} | Halowake"
      )
    rescue Stripe::CardError => e
      # The card has been declined
    end

    if charge.save
      @purchase.update_attributes(
        stripe_charge_id: charge.id
      )
      # send_purchase_email
      redirect_to user_album_photo_path(@seller, @album, @photo)
      flash[:notice] = "#{@seller.username} needs to know where to ship this."
    else
      render 'checkout'
      flash.now[:alert] = "You have failed."
    end
  end

  def edit
  end

  def update
  end

  private 

    def purchase_params
      params.require(:purchase).permit(:buyer_id, :seller_id, :stripe_charge_id, :quantity, :pay_your_own_price, :complete_price, :full_name, :street_address, :city, :state, :country, :zip_code, :is_shipped)
    end

end