class CreateCarts < ActiveRecord::Migration
  def change
    create_table :carts do |t|
      t.string :email

      t.timestamps
    end
  end
end
