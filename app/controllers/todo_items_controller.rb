class TodoItemsController < ApplicationController

  before_action :set_todo_list
  before_action :set_todo_item, only: [:toggle]

  def index
  end

  def create
    @todo_item = @todo_list.todo_items.create(todo_item_params)
  end

  def toggle
    @todo_item.toggle!
  end
  
  private

  def set_todo_list
    @todo_list = TodoList.find(params[:todo_list_id])
  end

  def set_todo_item
    @todo_item = @todo_list.todo_items.find(params[:id])
  end

  def todo_item_params
    params.require(:todo_item).permit(:content)
  end
end
