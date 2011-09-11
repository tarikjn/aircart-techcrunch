AirCart.Views.Cart = Backbone.View.extend({
	
	initialize : function(options) {
		_.bindAll(this);
		
		// make a template out of the markup
		this.template = _.template(options.template);
		
		this.model.get('line_items').bind("add", this.addItem);
		this.model.get('line_items').bind("change:quantity", this.onQuantityChange);
		this.render();
	},
	
	render : function() {
		// just conjure up a <ul> element
		var list = $(document.createElement("ul"));
		$(this.el).append(list);
		
		var that = this;
		this.model.get('line_items').each(this.addItem);
	},
	
	addItem : function(lineItem) {
		this.$('ul').append(this.template(lineItem));
		var el = this.$('#item_' + lineItem.id)[0];
		var itemView = new AirCart.Views.LineItem({
			"model":lineItem,
			"el":el
		});
		this.$('ul').append(el);
		this.onQuantityChange();
	},
	
	onQuantityChange : function(lineItem, newQuantity) {
		//recalculate total
		var total = 0;
		this.model.get('line_items').each(function(item) {
			var cost = item.get('quantity') * item.get('product').price;
			total += cost;
		});
		$("#total").html(parseFloat(total/100).toFixed(2));
		
		if (lineItem) {
			window.scrollTo($("#item_"+lineItem.id).offset().top);
		}
	}
	
});