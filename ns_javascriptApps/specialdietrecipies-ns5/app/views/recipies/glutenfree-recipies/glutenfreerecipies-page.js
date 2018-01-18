var frameModule = require("ui/frame");
var GlutenfreerecipiesViewModel = require("./glutenfreerecipies-view-model");
var glutenfreerecipiesViewModel = new GlutenfreerecipiesViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = glutenfreerecipiesViewModel;
}

exports.pageLoaded = pageLoaded;
