class TodoListsController < ApplicationController

  def create
    todo_list = TodoList.new(params.require(:todo_list).permit(:name))
    todo_list.save
    redirect_to todo_list_todo_items_path(todo_list)
  end

  def destroy
    todo_list = TodoList.find(params[:id])
    todo_list.destroy
    first = TodoList.first
    redirect_to first.present? ? todo_list_todo_items_path(first) : root_path
  end
  
end
