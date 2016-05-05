require 'test_helper'

class ApiControllerTest < ActionController::TestCase
  test "should get comments" do
    get :comments
    assert_response :success
  end

end
