class TodoItemsController < ApplicationController

  def index
    @todo_items = TodoList.find(params[:todo_list_id]).todo_items
  end
  
end
