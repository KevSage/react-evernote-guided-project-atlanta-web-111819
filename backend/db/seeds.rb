# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
u = User.new(name: ENV['USER'])
u.password = "123"
u.save
i = User.new(name: "7evens")
i.password = "456"
i.save

Note.destroy_all
10.times do
  Note.create(user: u, title: Faker::Lorem.sentence(rand(4) + 1, true), body: Faker::Lorem.paragraphs(3, true).join('\n'))
end

18.times do
  Note.create(user: i, title: Faker::Lorem.sentence(rand(4) + 1, true), body: Faker::Lorem.paragraphs(3, true).join('\n'))
end
