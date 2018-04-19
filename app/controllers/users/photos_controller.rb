class Users::PhotosController < ApplicationController

  before_action :authenticate_user!, except: :show
  before_action :correct_user, only: :create
  before_action :correct_photo_user, only: :destroy
  before_action :set_user, except: :show

  def show
    @user = User.friendly.find(params[:user_id])
    @album = Album.friendly.find(params[:album_id])
    @photo = Photo.friendly.find(params[:id])

    if user_signed_in?
      Stripe.api_key = "sk_test_ECd3gjeIEDsGkySmF8FQOC5i"
      @customer = Stripe::Customer.retrieve(current_user.customer_id)
    end
  end

  def create
    @album = Album.friendly.find(params[:album_id])
    @photo = @album.photos.build(photo_params)
    @photo.user_id = @user.id
    if @photo.save
      respond_to do |format|
        format.html { redirect_to user_album_path(@user, @album) }
        format.js { render :action => "photos" }
        flash.now[:notice] = "You've successfully added a photo!"
      end
    else
      redirect_to (:back)
      flash.now[:alert] = "You've failed!"
    end
  end

  def update
    @album = Album.friendly.find(params[:album_id])
    @photo = Photo.friendly.find(params[:id])
    if @photo.update_attributes(photo_params)
      respond_to do |format|
        format.html { redirect_to user_album_path(@user, @album) }
        format.js { render :action => "photos" }
        flash.now[:notice] = "You've successfully updated your photo!"
      end
    else
      redirect_to (:back)
      flash.now[:alert] = "You've failed!"
    end
  end

  def destroy
    @album = Album.friendly.find(params[:album_id])
    Photo.friendly.find(params[:id]).destroy
    respond_to do |format|
      format.html { redirect_to user_album_path(@user, @album) }
      format.js { render :action => "photos" }
      flash.now[:notice] = "You've successfully deleted your photo!"
    end
  end

  private

    def set_user
      @user = current_user
    end

    def correct_user
      @user = User.friendly.find(params[:user_id])
      if current_user != @user
        redirect_to user_path(@user)
        flash[:alert] = "This is not your profile."
      end
    end

    def correct_photo_user
      @photo = Photo.friendly.find(params[:id])
      redirect_to user_path(@photo.user_id) if @photo.user_id != current_user.id
    end

    def photo_params
      params.require(:photo).permit(:title, :image, :remove_image, :description, :resolution, :camera, :lens, :aperture, :exposure, :flash, :focal_length, :iso, :for_sale, :base_price, :shipping_price, :total_price, :currency, :quantity, :photo_type, :tool, :medium, :surface, :size, :style, :transport_type)
    end

end