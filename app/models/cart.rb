class Cart < ActiveRecord::Base
  
  has_many :line_items
  
  def add_or_update_line_item(p)
    
    line_item = LineItem.new(p)
    line_item.cart = self
    i = self.line_items.index { |li| li.product == line_item.product }
    
    # return
    if i.nil?
      line_item
    else
      self.line_items[i].quantity += line_item.quantity
      self.line_items[i]
    end
    
  end
  
  def total
    # in cents
    t = 0
    
    self.line_items.each do |li|
      t += (li.product.price * li.quantity)
    end
    
    t
  end
  
end
