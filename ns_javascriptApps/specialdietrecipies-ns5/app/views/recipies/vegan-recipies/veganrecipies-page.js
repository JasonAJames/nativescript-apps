var frameModule = require("ui/frame");
var VeganrecipiesViewModel = require("./veganrecipies-view-model");
var veganrecipiesViewModel = new VeganrecipiesViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = veganrecipiesViewModel;
}

exports.pageLoaded = pageLoaded;
