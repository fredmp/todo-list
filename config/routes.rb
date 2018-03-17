Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'

  resources :todo_lists do
    resources :todo_items
  end
end
