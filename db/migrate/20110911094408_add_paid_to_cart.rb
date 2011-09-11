class AddPaidToCart < ActiveRecord::Migration
  def change
    add_column :carts, :paid, :boolean
  end
end
