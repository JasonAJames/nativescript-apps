var frameModule = require("ui/frame");
var BmiViewModel = require("./bmi-view-model");
var bmiViewModel = new BmiViewModel();

function pageLoaded(args) {
	var page = args.object;

	page.bindingContext = bmiViewModel;
}

exports.pageLoaded = pageLoaded;
