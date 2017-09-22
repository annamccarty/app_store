categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']

100.times do
  App.create(
    name: Faker::App.name,
    description: Faker::Lorem.paragraph(4),
    version: Faker::App.version,
    category: categories.sample,
    price: Faker::Commerce.price.to_f,
    logo: Faker::Company.logo
  )
end
