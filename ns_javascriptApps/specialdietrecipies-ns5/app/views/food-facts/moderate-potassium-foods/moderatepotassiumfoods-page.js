var frameModule = require("ui/frame");
var ModeratepotassiumfoodsViewModel = require("./moderatepotassiumfoods-view-model");
var moderatepotassiumfoodsViewModel = new ModeratepotassiumfoodsViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = moderatepotassiumfoodsViewModel;
}

exports.pageLoaded = pageLoaded;
