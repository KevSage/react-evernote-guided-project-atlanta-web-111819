class Api::V1::SessionsController < ApplicationController
    def create
        @user = User.find_by(name: login_params[:name])
        
        if @user && @user.authenticate(login_params[:password])
            
            token = JWT.encode({user_id: @user.id}, ENV['SECRET'])
            render :json => { :token => token, :user => @user }
        else
            render :json =>{ :msg => "Login Failed"}
        end
    end

    private
    def login_params
        params.require(:user).permit(:name, :password)
    end
end
