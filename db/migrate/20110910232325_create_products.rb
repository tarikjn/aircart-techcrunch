class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :gtin
      t.string :picture_url
      t.integer :price

      t.timestamps
    end
  end
end
