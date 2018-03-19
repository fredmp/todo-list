class TodoListsController < ApplicationController

  before_action :set_todo_list, only: [:update, :destroy]

  def create
    todo_list = current_user.todo_lists.build(todo_list_params)
    todo_list.save
    redirect_to todo_list_todo_items_path(todo_list)
  end

  def update
    @todo_list.update(todo_list_params)
  end

  def destroy
    @todo_list.destroy
    first = current_user.todo_lists.first
    redirect_to first.present? ? todo_list_todo_items_path(first) : root_path
  end

  private

  def set_todo_list
    @todo_list = current_user.todo_lists.find(params[:id])
  end

  def todo_list_params
    params.require(:todo_list).permit(:name)
  end
end
