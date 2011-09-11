AirCart.Routers.Main = Backbone.Router.extend({
	routes : {
		"item/:upc" : "lineItem"
	},
	
	initialize : function() {
		// do initialization stuff
	},
	
	lineItem : function(upc) {
		alert(upc);
	}
});