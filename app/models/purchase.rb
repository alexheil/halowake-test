class Purchase < ApplicationRecord
  extend FriendlyId
  friendly_id :slug, use: :slugged

  belongs_to :user
  belongs_to :photo

  before_save :generated_slug

  private

    def generated_slug
      require 'securerandom' 
      self.slug = SecureRandom.hex(64) if slug.blank?
    end

end
