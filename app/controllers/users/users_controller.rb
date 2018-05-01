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
    @user = User.friendly.find(params[:user_id])
    @purchase = @user.purchases
  end

  def votes
    @user = User.friendly.find(params[:user_id])
  end

  def following
    @user = User.friendly.find(params[:user_id])
  end

  def followers
    @user = User.friendly.find(params[:user_id])
  end

  private

    # redirects
  
end