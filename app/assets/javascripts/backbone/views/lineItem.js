AirCart.Views.LineItem = Backbone.View.extend({
	
	initialize : function(options) {
		// make a template out of the markup
		this.el = $(options.template(this.model));
	},
	
	render : function() {
		return this.el;
	}
	
});