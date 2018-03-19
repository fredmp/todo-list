class TodoList < ApplicationRecord
  has_many :todo_items, dependent: :destroy
end

# Next Steps:
# - Double click on list
#   - Open input to edit name via ajax
# - Double click on item
#   - Open input to edit content via ajax
# - Refactor models: list and item
# - Add devise
#   - Scope lists under user
#   - Add links to sign_in, sign_out and change account details
