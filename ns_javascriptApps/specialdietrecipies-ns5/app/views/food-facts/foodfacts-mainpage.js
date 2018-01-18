var frameModule = require("ui/frame");
var FoodfactsMainpageViewModel = require("./foodfacts-mainpage-view-model");
var foodfactsmainpageViewModel = new FoodfactsMainpageViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = foodfactsmainpageViewModel;
}

exports.pageLoaded = pageLoaded;
