class Users::RelationshipsController < ApplicationController
  
  def create
    user = User.find(params[:followed_id])
    @user = User.friendly.find(user)
    current_user.follow(user)
    respond_to do |format|
      format.html { redirect_to (:back) }
      format.js { render :action => "relationships" }
      flash.now[:notice] = "You have successfully followed."
    end
  end

  def destroy
    user = Relationship.find(params[:id]).followed
    @user = User.friendly.find(user)
    current_user.unfollow(user)
    respond_to do |format|
      format.html { redirect_to (:back) }
      format.js { render :action => "relationships" }
      flash.now[:notice] = "You have successfully unfollowed."
    end
  end
  
end