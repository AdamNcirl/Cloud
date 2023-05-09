class ArticlesController < ApplicationController
  before_action :set_article, only: [:show, :update, :destroy]

  # GET /articles
  def index

    if params[:type] == 'All Articles'
      
      @articles = Article.all

    elsif params[:type] == 'Published Articles'

      @articles = Article.all.where(published: true)

    elsif params[:type] == 'UnPublished Articles'

      @articles = Article.all.where(published: false)

    end

    render json: @articles.order(created_at: :desc)
  end

  # GET /articles/1
  def show
    render json: @article
  end

  # POST /articles
  def create
    @article = Article.new(article_params)

    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /articles/1
  def update
    if @article.update(article_params)
      render json: @article
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  # DELETE /articles/1
  def destroy
    @article.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def article_params
      params.permit(:title, :body, :published)
    end
end
