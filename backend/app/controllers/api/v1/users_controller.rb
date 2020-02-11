class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show,:update,:destroy]

  def index
    users = User.all
    render json: users, status: 200
  end

  def create
    user = User.create(user_params)
    if user.save!
    render json: user, status: 201
    end
  end

  def update
    @user.update(user_params)
    render json: @user, status: 200
  end

  def destroy
    userId = @user.id
    @user.destroy
    render json: {message:"Zap! user deleted", userId:userId}
  end

  def show
    render json: @user, status: 200
  end

  def decode
    @currentUser = User.find_by(id: current_user)
   render json: @currentUser
  end

  private
  def user_params
    params.require(:user).permit(:name, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end