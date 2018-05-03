class Photo < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: :slugged

  include ImageUploader[:image]

  enum photo_type: [:photo, :art]
  enum transport_type: [:downloadable, :shippable]

  default_scope -> { order('id DESC') }

  belongs_to :album
  belongs_to :user

  has_many :votes, dependent: :destroy
  has_many :purchases

  validates :user_id, presence: true
  validates :image_data, presence: true, unless: :image_data?
  validates :photo_type, presence: true
  validates :title, presence: true, length: { maximum: 255 }
  validates :description, length: { maximum: 3000 }, allow_blank: true

  #validates :resolution, allow_blank: true
  validates :camera, length: { maximum: 255 }, allow_blank: true
  validates :lens, length: { maximum: 255 }, allow_blank: true
  validates :aperture, length: { maximum: 4 }, format: { with: /[0-9]{1,2}[.][0-9]{1}/ }, allow_blank: true
  validates :exposure, length: { maximum: 6 }, format: { with: /\A[-1-9]+[0-9]{0,}?([\/][-1-9])?+[0-9]{0,}?\z/ }, allow_blank: true
  #validates :flash, allow_blank: true
  validates :focal_length, length: { maximum: 6 }, format: { with: /[0-9]{1,4}[.][0-9]{1}/ }, allow_blank: true
  validates :iso, length: { maximum: 5 }, format: { with: /[0-9]{1,5}/ }, allow_blank: true
  validates :tool, length: { maximum: 255 }, allow_blank: true
  validates :medium, length: { maximum: 255 }, allow_blank: true
  validates :surface, length: { maximum: 255 }, allow_blank: true
  validates :size, length: { maximum: 255 }, allow_blank: true
  validates :style, length: { maximum: 255 }, allow_blank: true

  validates :currency, presence: true, if: :is_for_sale
  validates :base_price, presence: true, length: { maximum: 6 }, numericality: { greater_than: 0}, if: :is_for_sale
  validates :shipping_price, presence: true, length: { maximum: 6 }, numericality: { greater_than: -1}, if: :is_for_sale && :shippable?
  validates :quantity, presence: true, if: :is_for_sale
  #validates :total_price, presence: true, if: :is_for_sale
  
  before_save :no_shipping
  before_save :reset_photo_options
  before_save :reset_art_options
  before_save :reset_sales_options
  before_save :total_price_calculator
  before_save :should_generate_new_friendly_id?, if: :title_changed?

  def photo_resolution
   # get photo resolution from metadata
  end

  private

    def is_for_sale
      self.for_sale == true
    end

    def no_shipping
      self.shipping_price = 0 if self.downloadable?
    end

    def reset_sales_options
      if self.for_sale == false
        self.base_price = nil
        self.shipping_price = nil
        self.currency = nil
        self.quantity = nil
        self.total_price = nil
      end
    end

    def reset_photo_options
      if self.art?
        self.resolution = nil
        self.camera = nil
        self.lens = nil
        self.aperture = nil
        self.exposure = nil
        self.flash = nil
        self.focal_length = nil
        self.iso = nil
      end
    end

    def reset_art_options
      if self.photo?
        self.tool = nil
        self.medium = nil
        self.surface = nil
        self.size = nil
        self.style = nil
      end
    end

    def total_price_calculator
      self.total_price = base_price + shipping_price if self.for_sale?
    end

    def should_generate_new_friendly_id?
      title_changed?
    end

end
