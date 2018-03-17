class TodoItem < ApplicationRecord
  belongs_to :todo_list

  def done?
    completed_at.present?
  end
end
