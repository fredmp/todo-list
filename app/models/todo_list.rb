class TodoList < ApplicationRecord
  has_many :todo_items, dependent: :destroy
end

# Next Steps:
# - Double click on list
#   - Open input to edit name via ajax
# - Add devise
#   - Scope lists under user
#   - Add links to sign_in, sign_out and change account details
