class Profile < ApplicationRecord
  belongs_to :user

  include ImageUploader[:image]

  validates :user_id, presence: true
  validates :first_name, format: { with: /\A[-a-z]+\z/i }, allow_blank: true
  validates :last_name, format: { with: /\A[-a-z]+\z/i }, allow_blank: true
  validates :age, length: { maximum: 2 }, numericality: { less_than_or_equal_to: 99, greater_than: 12}, allow_blank: true
  validates :biography, length: { maximum: 4000 }, allow_blank: true
  validates :website, format: { with: /\A((http|https)?:\/\/)?(www.)?[a-zA-Z0-9]+.[a-z]+\/?/i }, allow_blank: true
  validates :facebook_handle, length: { maximum: 30 }, allow_blank: true
  validates :twitter_handle, length: { maximum: 15 }, allow_blank: true
  validates :instagram_handle, length: { maximum: 30 }, allow_blank: true

  before_save :create_facebook_url
  before_save :create_twitter_url
  before_save :create_instagram_url
  before_save :smart_add_url_protocol
  before_save :downcase

  private

    def create_facebook_url
      self.facebook_url = "https://facebook.com/#{self.facebook_handle}" if self.facebook_handle.present?
    end

    def create_twitter_url
      self.twitter_url = "https://twitter.com/#{self.twitter_handle}" if self.twitter_handle.present?
    end

    def create_instagram_url
      self.instagram_url = "https://instagram.com/#{self.instagram_handle}" if self.instagram_handle.present?
    end

    def smart_add_url_protocol
      unless self.website[/\Ahttp:\/\//] || self.website[/\Ahttps:\/\//]
        self.website = "https://#{self.website}" unless website.blank?
      end
    end

    def downcase
      self.facebook_url = facebook_url.downcase
      self.twitter_url = twitter_url.downcase
      self.instagram_url = instagram_url.downcase
      self.website = website.downcase
    end

end
