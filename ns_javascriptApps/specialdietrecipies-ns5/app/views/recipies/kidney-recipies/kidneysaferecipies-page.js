var frameModule = require("ui/frame");
var KidneysafeViewModel = require("./kidneysafe-view-model");
var kidneysafeViewModel = new KidneysafeViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = kidneysafeViewModel;
}

exports.pageLoaded = pageLoaded;
