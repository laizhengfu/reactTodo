class ApiController < ApplicationController
  def comments
    comments = [
        {"author" => "Pete Hunt", "text" => "This is one comment"},
        {"author" => "Jordan Walke", "text" => "This is *another* comment"}
    ]
    render json: comments
  end
end
