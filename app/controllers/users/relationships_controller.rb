class Users::RelationshipsController < ApplicationController
  
  def create
    user = User.find(params[:followed_id])
    @user = User.friendly.find(user)
    current_user.follow(user)
    respond_to do |format|
      format.html { redirect_to (:back) }
      format.js { render :action => "relationships" }
      flash.now[:notice] = "You have successfully followed #{@user.profile.first_name.presence || @user.username}."
    end
  end

  def destroy
    user = Relationship.find(params[:id]).followed
    @user = User.friendly.find(user)
    current_user.unfollow(user)
    respond_to do |format|
      format.html { redirect_to (:back) }
      format.js { render :action => "relationships" }
      flash.now[:notice] = "You have successfully unfollowed #{@user.profile.first_name.presence || @user.username}."
    end
  end
  
end