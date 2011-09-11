AirCart.Views.LineItem = Backbone.View.extend({
	
	events : {
		"click .button.qty" : "changeQuantity"
	},
	
	initialize : function(options) {
		_.bindAll(this);
		// make a template out of the markup
		this.model.bind("change:quantity", this.onQuantityChange);
	},
	
	changeQuantity : function(event) {
		var qty = this.model.get('quantity');
		qty += Number($(event.target).data("amount"));
		this.model.set({"quantity":qty});
	},
	
	onQuantityChange : function(lineItem, quantity) {
		this.$(".quantity").html(quantity);
	}
});