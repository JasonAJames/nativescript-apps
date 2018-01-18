var frameModule = require("ui/frame");
var DiabetessaferecipiesViewModel = require("./diabetessaferecipies-view-model");
var diabetessaferecipiesViewModel = new DiabetessaferecipiesViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = diabetessaferecipiesViewModel;
}

exports.pageLoaded = pageLoaded;
