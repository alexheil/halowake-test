class Purchase < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: :slugged

  belongs_to :user

  before_save :generated_slug

  private

    def generated_slug
      require 'securerandom' 
      self.slug = SecureRandom.hex(64) 
    end


end
