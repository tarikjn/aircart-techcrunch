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
		
		var onSuccess = function(item, status, request) {
			var lineItem = new Backbone.Model(item);
			this.model.get('line_items').add(lineItem);
		};
		$.post('/carts/'+cartId+'/line_items', {
			"line_item" : {
				"gtin" : upc
			}
		}, _.bind(onSuccess, this), "json");
	}
});