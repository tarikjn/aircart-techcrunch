AirCart.Views.Cart = Backbone.View.extend({
	
	initialize : function(options) {
		// make a template out of the markup
		this.template = _.template(options.template);
		this.render();
	},
	
	render : function() {
		// just conjure up a <ul> element
		var list = $(document.createElement("ul"));
		$(this.el).append(list);
		
		var that = this;
		this.model.each(function(item) {
			// create a new view for each item in the cart
			var itemView = new AirCart.Views.LineItem({
				"model":item,
				"template":that.template
			});
			list.append(itemView.render());
		});
	}
	
});