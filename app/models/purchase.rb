class Purchase < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: :slugged

  belongs_to :user
  belongs_to :photo

  before_save :generated_slug

  validates :user_id, presence: true
  validates :photo_id, presence: true
  validates :buyer_id, presence: true
  validates :seller_id, presence: true
  validates :stripe_charge_id, presence: true
  validates :quantity, presence: true, numericality: { greater_than: 0 }
  validates :complete_price, presence: true
  validates :full_name, length: { maximum: 50 }, format: { with: /\A([a-zA-z]+)[\s]?([a-zA-z]+)[\s]?([a-zA-z]+)?\z/ }, allow_blank: true
  validates :street_address, length: { maximum: 255 }
  validates :zip_code, length: { is: 5 }, format: { with: /[0-9]{5}/ }, allow_blank: true
  validates :city, format: { with: /\A[-a-z]+\z/i }, allow_blank: true
  validates :state, format: { with: /\A[-a-z]{2}\z/i }, allow_blank: true
  validates :country, format: { with: /\A[-a-z]+\z/i }, allow_blank: true
  validates :is_shipped, presence: true

  def self.need_to_pay_mailer
    Purchase.where("stripe_charge_id" => nil).find_each do |purchase|
      UserMailer.need_to_pay_email(User.find(purchase.buyer_id), purchase).deliver_now
    end
  end

  def self.delete_expired_purchase
    Purchase.where("stripe_charge_id" => nil).find_each do |purchase|
      purchase.destroy unless purchase.created_at > 3.days.ago
      # need to give refund and email 
    end
  end

  private

    def generated_slug
      require 'securerandom' 
      self.slug = SecureRandom.hex(64) if slug.blank?
    end

end
