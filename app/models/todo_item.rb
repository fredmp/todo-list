class TodoItem < ApplicationRecord
  belongs_to :todo_list

  def toggle!
    self.completed_at = self.done? ? nil : DateTime.current
    self.save!
  end

  def done?
    self.completed_at.present?
  end
end
