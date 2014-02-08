class UsersController < ApplicationController
 	def index
 		@users = User.all
 	end
	def new
 		@user = User.new
 	end
 		
 	def create
      @user = User.new(params.require(:user).permit(:username, :password, :name, :email, :fit_interest))
        if @user.save
            flash[:notice] = "You successfully saved your user."
            @user = User.find_by(username:params[:user][:username])
            if @user.authenticated?(params[:user][:password])
                session[:user_id] = @user.id
           		redirect_to root_path
            end
        else
            render action: 'new'
    	end
    end
end