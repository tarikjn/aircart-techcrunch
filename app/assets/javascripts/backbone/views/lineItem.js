AirCart.Views.LineItem = Backbone.View.extend({
	
	events : {
		"click .button.qty" : "changeQuantity",
		"click .button.remove" : "remove"
	},
	
	initialize : function(options) {
		_.bindAll(this);
		// make a template out of the markup
		this.model.bind("change:quantity", this.onQuantityChange);
	},
	
	remove : function(event) {
		this.model.remove();
		$(this.el).remove();
	},
	
	changeQuantity : function(event) {
		var qty = this.model.get('quantity');
		qty += Number($(event.target).data("amount"));
		this.model.set({"quantity":qty});
		
		if (0 === qty) {
			this.remove(event);
		}
	},
	
	onQuantityChange : function(lineItem, quantity) {
		this.$(".quantity").html(quantity);
		this.$(".cost").html("$" + parseFloat((quantity * lineItem.get('product').price)/100).toFixed(2) );
	}
});