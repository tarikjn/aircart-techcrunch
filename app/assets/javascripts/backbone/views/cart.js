AirCart.Views.Cart = Backbone.View.extend({
	
	initialize : function(options) {
		_.bindAll(this);
		
		// make a template out of the markup
		this.template = _.template(options.template);
		
		this.model.get('line_items').bind("add", this.addItem);
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
		var itemView = new AirCart.Views.LineItem({
			"model":lineItem,
			"template":this.template
		});
		this.$('ul').append(itemView.render());
	}
	
});