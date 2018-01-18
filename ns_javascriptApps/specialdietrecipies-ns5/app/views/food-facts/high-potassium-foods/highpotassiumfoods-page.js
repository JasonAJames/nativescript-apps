var frameModule = require("ui/frame");
var HighpotassiumfoodsViewModel = require("./highpotassiumfoods-view-model");
var highpotassiumfoodsViewModel = new HighpotassiumfoodsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = highpotassiumfoodsViewModel;
}

exports.pageLoaded = pageLoaded;
