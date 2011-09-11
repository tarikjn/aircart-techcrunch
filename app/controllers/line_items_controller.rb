class LineItemsController < ApplicationController
  before_filter :get_cart
  
  # GET /line_items
  # GET /line_items.json
  def index
    @line_items = @cart.line_items

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @line_items, :include => :product }
    end
  end

  # GET /line_items/1
  # GET /line_items/1.json
  def show
    @line_item = LineItem.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @line_item, :include => :product }
    end
  end

  # GET /line_items/new
  # GET /line_items/new.json
  def new
    @line_item = LineItem.new(cart: @cart)

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @line_item }
    end
  end

  # GET /line_items/1/edit
  def edit
    @line_item = LineItem.find(params[:id])
  end

  # POST /line_items
  # POST /line_items.json
  def create
    
    @line_item = @cart.add_or_update_line_item(params[:line_item])

    respond_to do |format|
      if @line_item.save
        format.html { redirect_to @cart, notice: 'Line item was successfully created.' }
        format.json { render json: @line_item, :include => :product, status: :created, location: cart_line_item_url(@cart, @line_item) }
      else
        format.html { render action: "new" }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /line_items/1
  # PUT /line_items/1.json
  def update
    @line_item = LineItem.find(params[:id])

    respond_to do |format|
      if @line_item.update_attributes(params[:line_item])
        format.html { redirect_to @cart, notice: 'Line item was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /line_items/1
  # DELETE /line_items/1.json
  def destroy
    @line_item = LineItem.find(params[:id])
    @line_item.destroy

    respond_to do |format|
      format.html { redirect_to @cart }
      format.json { head :ok }
    end
  end
  
private
  def get_cart
    @cart = Cart.find(params[:cart_id])
  end
end
