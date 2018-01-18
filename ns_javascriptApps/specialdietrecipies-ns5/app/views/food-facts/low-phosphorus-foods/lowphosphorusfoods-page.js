var frameModule = require("ui/frame");
var LowphosphorusfoodsViewModel = require("./lowphosphorusfoods-view-model");
var lowphosphorusfoodsViewModel = new LowphosphorusfoodsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = lowphosphorusfoodsViewModel;
}

exports.pageLoaded = pageLoaded;
