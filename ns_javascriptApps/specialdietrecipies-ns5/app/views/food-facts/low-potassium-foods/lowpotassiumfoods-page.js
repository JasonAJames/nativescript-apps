var frameModule = require("ui/frame");
var LowpotassiumfoodsViewModel = require("./lowpotassiumfoods-view-model");
var lowpotassiumfoodsViewModel = new LowpotassiumfoodsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = lowpotassiumfoodsViewModel;
}

exports.pageLoaded = pageLoaded;
