Rails.application.routes.draw do
  
  get 'articles/:type', to: 'articles#index'

  post 'create_article', to: 'articles#create'

  get 'show_article/:id', to: 'articles#show'

  put 'update_article/:id', to: 'articles#update'

  delete 'destroy_article/:id', to: 'articles#destroy'

end
