class HomeController < ApplicationController
  def index
    @cart = Cart.new
    @products = Product.find(:all, :limit => 20)
  end

end
