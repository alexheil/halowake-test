class Theme < ApplicationRecord
  belongs_to :user

  validates :theme_color, format: { with: /(#)?[a-f0-9]{6}/i }, allow_blank: true
  validates :text_color, format: { with: /(#)?[a-f0-9]{6}/i }, allow_blank: true
  validates :background_color, format: { with: /(#)?[a-f0-9]{6}/i }, allow_blank: true
  validates :link_color, format: { with: /(#)?[a-f0-9]{6}/i }, allow_blank: true
  validates :hover_color, format: { with: /(#)?[a-f0-9]{6}/i }, allow_blank: true
  validates :border_color, format: { with: /(#)?[a-f0-9]{6}/i }, allow_blank: true

  before_save :add_pound_to_hex

  private

    def add_pound_to_hex
      unless self.theme_color.starts_with?('#')
        self.theme_color = "##{self.theme_color}" unless theme_color.blank?
      end
    end

end
