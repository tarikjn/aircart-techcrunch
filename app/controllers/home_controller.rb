class HomeController < ApplicationController
  def index
    @cart = Cart.new
    @products = Product.find(:all, :limit => 20)
    
    # ugly hack
    respond_to { |format|
      format.any(:html, :mobile) {
        render :template => "home/index.html.erb"
      }
    }
    
  end

end
