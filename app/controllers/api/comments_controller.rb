class Api::CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create]
  def index
    comments = Comment.all

    render json: comments
  end

  def create
    comment = Comment.new comment_params
    if comment.save
      render json: Comment.all, status: 201
    else
      render json: {message: comment.errors}, status: 400
    end
  end

  def delete
    comment = Comment.destroy_all(id: params[:id])
    render json: comment, status: 201
  end

  private

  def comment_params
    params.permit(
      :author,
      :text
    )
  end

end
