class Users::ProfilesController < ApplicationController

  before_action :authenticate_user!
  before_action :correct_user
  before_action :set_user

  def update
    @profile = @user.profile
    @location = @user.location
    @theme = @user.theme
    @location.update_attributes(location_params)
    @theme.update_attributes(theme_params)
    if @result = @profile.update_attributes(profile_params) && @theme.update_attributes(theme_params)
      respond_to do |format|
        format.html { redirect_to (:back) }
        format.js { render :action => "profiles" }
        flash.now[:notice] = "You have successfully updated your profile."
      end
    else
      respond_to do |format|
        format.html { redirect_to (:back) }
        format.js { render :action => "profiles" }
        flash.now[:alert] = "You've failed to update your profile."
      end
    end
  end

  private

    def set_user
      @user = current_user
    end

    def correct_user
      @user = User.friendly.find(params[:user_id])
      if current_user != @user
        redirect_to user_path(@user)
        flash[:alert] = "This is not your profile."
      end
    end

    def profile_params
      params.require(:profile).permit(:biography, :first_name, :last_name, :website, :facebook_handle, :facebook_url, :twitter_handle, :twitter_url, :instagram_handle, :instagram_url, :age, :image, :remove_image)
    end

    def location_params
      params.require(:location).permit(:city, :state, :country)
    end

    def theme_params
      params.require(:theme).permit(:main_color, :text_color, :background_color, :link_color, :hover_color, :border_color)
    end

end