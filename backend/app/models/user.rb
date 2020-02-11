class User < ApplicationRecord
  has_secure_password
  has_many :notes
  validates :name, presence: true
  validates :password, presence: true
end
