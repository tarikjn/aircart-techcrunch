AirCart.Models.LineItem = Backbone.Model.extend({
	initialize : function(attributes) {
		_.bindAll(this);
		this.bind("change:quantity", this.onChangeQuantity);
	},
	onChangeQuantity : function(lineItem, newQuantity) {
		$.ajax({
			"type":"PUT",
			"url":"/carts/" + AirCart._cartId + "/line_items/" + lineItem.id + ".json",
			"data": {
				"line_item":{
					"quantity":newQuantity
				}
			},
			"dataType":"json"
		});
	}
});

AirCart.Collections.LineItems = Backbone.Collection.extend({
	model:AirCart.Models.LineItem
});