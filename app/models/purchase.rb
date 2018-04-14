class Purchase < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: :slugged

  belongs_to :user
  belongs_to :photo

  before_save :generated_slug

  def self.artist_merch_need_to_pay_mailer
    Purchase.where("stripe_charge_id" => nil).find_each do |purchase|
      UserMailer.need_to_pay_email(User.find(purchase.buyer_id), purchase).deliver_now
    end
  end

  def self.delete_expired_artist_merch_purchase
    Purchase.where("stripe_charge_id" => nil).find_each do |purchase|
      purchase.destroy unless purchase.created_at > 3.days.ago
    end
  end

  private

    def generated_slug
      require 'securerandom' 
      self.slug = SecureRandom.hex(64) if slug.blank?
    end

end
