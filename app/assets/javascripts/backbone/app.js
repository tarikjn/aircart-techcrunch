(function() {
	
	// globally namespace a bunch of AirCart App stuff
	var AirCart = {};
	AirCart.Routers = {};
	AirCart.Models = {};
	AirCart.Views = {};
	
	AirCart._models = {};
	window.AirCart = AirCart;
	
	// don't use ERB style templates for javascript templates
	_.templateSettings = {
	  interpolate : /\{\{(.+?)\}\}/g
	};
})();