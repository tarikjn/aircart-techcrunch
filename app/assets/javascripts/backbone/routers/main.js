AirCart.Routers.Main = Backbone.Router.extend({
	routes : {
		"item/:upc" : "lineItem"
	},
	
	initialize : function(options) {
		// do initialization stuff
		this.model = options.model;
		this.view = options.view;
		
		// right away synchronize the model
		var cartId = this.model.get('id');
		$.getJSON('/carts/' + cartId + '/line_items.json', _.bind(function(items, status, request) { 
			this.model.get('line_items').add(items);
		}, this));
	},
	
	lineItem : function(upc) {
		var cartId = this.model.get('id');
		
		var onSuccess = function(item, status, request) {
			var items = this.model.get('line_items');
			var lineItem = new Backbone.Model(item);
			items.add(lineItem);
		};
		$.post('/carts/'+cartId+'/line_items', {
			"line_item" : {
				"gtin" : upc
			}
		}, _.bind(onSuccess, this), "json");
	}
});