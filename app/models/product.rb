class Product < ActiveRecord::Base
  
  def self.find_or_add_by_gtin(i)
    
    # return a product given a bar code
    # if the product is not there populate from Google's API
    
    product = Product.add_by_gtin(i) unless product = Product.find_by_gtin(i)
    
  end
  
  def self.fetch_by_gtin(i)
  
    r = Rails.cache.fetch("google/shopping/#{i}", :expires_in => 1.month) do
      
      p = {
        key: "AIzaSyAAWuF5q70BnJDBlPKPHFxc0QXlekalnPc",
        country: 'US',
        q: i,
        maxResults: 1,
        alt: 'json'
      }.to_param
      
      HTTParty.get("https://www.googleapis.com/shopping/search/v1/public/products?#{p}").response
      
    end
  
    if (r.code == '200')
      resp = ActiveSupport::JSON.decode(r.body)
      
      if resp['totalItems'] > 0
        resp['items'][0]['product']
      else
        false
      end
      
    else
      false
    end
  
  end
  
  def self.process_from_google(item)
    
    Product.new({
      name: item['title'],
      gtin: item['gtin'],
      price: item['inventories'][0]['price'],
      picture_url: item['images'][0]['link']
    });
  
  end
  
  def self.add_by_gtin(i)
  
    if item = Product.fetch_by_gtin(i)
      
      # process
      product = Product.process_from_google(item)
      
      # save
      product.save
      
      # return
      product
    
    end
  
  end
  
end
