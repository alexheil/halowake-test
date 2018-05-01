class Profile < ApplicationRecord
  belongs_to :user

  include ImageUploader[:image]

  before_save :create_facebook_url
  before_save :create_twitter_url
  before_save :create_instagram_url

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

end
