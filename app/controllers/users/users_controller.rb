class Users::UsersController < ApplicationController

  def show
    @user = User.friendly.find(params[:id])
    if user_signed_in? && current_user == @user
      @profile = current_user.profile
      @location = current_user.location
      @theme = current_user.theme
      @album = Album.new
    end
  end

  def purchases
    @user = current_user
    @purchase = @user.purchases
  end
  
end