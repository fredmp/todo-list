class TodoList < ApplicationRecord
  has_many :todo_items, dependent: :destroy
end

# Next Steps:
# - Add devise
#   - Scope lists under user
#   - Add links to sign_in, sign_out and change account details
# - Tests
# - Deploy to digital ocean using capistrano (keep sqlite)
