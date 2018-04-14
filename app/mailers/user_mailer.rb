class FanMailer < ApplicationMailer
  default from: 'no-reply@ninthvalley.com'

  def need_to_pay_email(fan, artist_merch_purchase)
    @buyer = User.find(purchase.buyer_id)
    @purchase = artist_merch_purchase
    mail(to: @buyer.email, from: 'ninthvalley-purchases@ninthvalley.com', subject: 'One more step to complete your purchase! | Ninth Valley')
  end

  #def purchased_email(fan, artist, artist_merch_purchase)
  #  @artist = artist
  #  @purchase = artist_merch_purchase
  #  @fan = fan
  #  mail(to: @fan.email, from: 'ninthvalley-purchases@ninthvalley.com', subject: 'Your order has been marked "shipped" | Noisaea')
  #end

end