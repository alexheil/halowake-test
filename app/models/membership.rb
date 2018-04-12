class Membership < ApplicationRecord

  enum membership_type: [:copper, :bronze, :silver, :gold, :platinum]

  belongs_to :user

  before_save :percent_for_membership

  private

    def percent_for_membership
      if self.bronze?
        self.percent = 20
      elsif self.silver?
        self.percent = 15
      elsif self.gold?
        self.percent = 10
      elsif self.platinum?
        self.percent = 5
      end
    end

end
