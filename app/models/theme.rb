class Theme < ApplicationRecord
  belongs_to :user

  validates :main_color, format: { with: /\A[#]{1}?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i }, allow_blank: true
  validates :text_color, format: { with: /\A[#]{1}?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i }, allow_blank: true
  validates :background_color, format: { with: /\A[#]{1}?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i }, allow_blank: true
  validates :link_color, format: { with: /\A[#]{1}?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i }, allow_blank: true
  validates :hover_color, format: { with: /\A[#]{1}?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i }, allow_blank: true
  validates :border_color, format: { with: /\A[#]{1}?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\z/i }, allow_blank: true

  before_save :add_pound_to_hex

  private

    def add_pound_to_hex
      unless self.main_color.starts_with?('#')
        self.main_color = "#" + self.main_color unless self.main_color.blank?
      end
      unless self.text_color.starts_with?('#')
        self.text_color = "#" + self.text_color unless self.text_color.blank?
      end
      unless self.background_color.starts_with?('#')
        self.background_color = "#" + self.background_color unless self.background_color.blank?
      end
      unless self.link_color.starts_with?('#')
        self.link_color = "#" + self.link_color unless self.link_color.blank?
      end
      unless self.hover_color.starts_with?('#')
        self.hover_color = "#" + self.hover_color unless self.hover_color.blank?
      end
      unless self.border_color.starts_with?('#')
        self.border_color = "#" + self.border_color unless self.border_color.blank?
      end
    end

end
