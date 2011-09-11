class LineItem < ActiveRecord::Base
  belongs_to :cart
  belongs_to :product
  
  # add validation for gtin not found... (gtin is set but product is nil)
  validates :product, :presence => true
  
  def gtin=(i)
    self.product = Product.find_or_add_by_gtin(i)
  end
  
  def gtin
    self.product.gtin if self.product
  end
  
end
