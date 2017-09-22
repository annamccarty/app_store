class CreateApps < ActiveRecord::Migration[5.1]
  def change
    create_table :apps do |t|
      t.string :name
      t.string :description
      t.string :category
      t.float :price
      t.string :version
      t.string :logo

      t.timestamps
    end
  end
end
