CapybaraApp::Application.routes.draw do
  root to: 'welcome#index'
  get '/javascript' => 'javascript#jive'
  get '/quizzes' => 'quizzes#one'
end
