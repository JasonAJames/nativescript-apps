var frameModule = require("ui/frame");
var HighphosphorusfoodsViewModel = require("./highphosphorusfoods-view-model");
var highphosphorusfoodsViewModel = new HighphosphorusfoodsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = highphosphorusfoodsViewModel;
}

exports.pageLoaded = pageLoaded;
