AirCart.Routers.Main = Backbone.Router.extend({
	routes : {
		"item/:upc" : "lineItem"
	},
	
	initialize : function(options) {
		// do initialization stuff
		this.model = options.model;
		this.view = options.view;
	},
	
	lineItem : function(upc) {
		var cartId = this.model.get('id');
		
		$.post('/carts/'+cartId+'/line_items', {
			"line_items" : {
				"gtin" : upc
			}
		}, function(foo, bar, baz) {
			debugger;
		}, "json");
	}
});