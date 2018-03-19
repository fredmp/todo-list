class TodoListsController < ApplicationController

  def create
    todo_list = TodoList.new(params.require(:todo_list).permit(:name))
    todo_list.save
    redirect_to todo_list_todo_items_path(todo_list)
  end
end
