var frameModule = require("ui/frame");
var HearthealthyrecipiesViewModel = require("./hearthealthyrecipies-view-model");
var hearthealthyrecipiesViewModel = new HearthealthyrecipiesViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = hearthealthyrecipiesViewModel;
}

exports.pageLoaded = pageLoaded;
