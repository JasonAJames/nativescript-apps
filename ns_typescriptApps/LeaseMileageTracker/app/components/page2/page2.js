"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var applicationSettings = require("application-settings");
// Event handler for Page "loaded" event attached in main-page.xml.
function pageLoaded(args) {
    applicationSettings.setString("Name", "John Doe");
    console.log(applicationSettings.getString("Name")); // Prints "John Doe".
    applicationSettings.setBoolean("Married", false);
    console.log(applicationSettings.getBoolean("Married")); // Prints false.
    applicationSettings.setNumber("Age", 42);
    console.log(applicationSettings.getNumber("Age")); // Prints 42.
    console.log(applicationSettings.hasKey("Name")); // Prints true.
    applicationSettings.remove("Name"); // Removes the Name entry.
    console.log(applicationSettings.hasKey("Name")); // Prints false.
}
exports.pageLoaded = pageLoaded;
var Page2Component = (function () {
    function Page2Component(router) {
        this.router = router;
    }
    Page2Component.prototype.navHome = function () {
        this.router.navigate([""]);
    };
    Page2Component = __decorate([
        core_1.Component({
            selector: "page2",
            templateUrl: "./components/page2/page2.html",
            styles: [
                "\n        .mybtn { font-size: 20; }\n        .my-class {\n          background-color: yellow;\n        }\n        .extraclass { \n            background-color: black;\n            color: white;\n        }\n        "
            ]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], Page2Component);
    return Page2Component;
}());
exports.Page2Component = Page2Component;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBeUM7QUFJekMsMERBQTREO0FBQzVELG1FQUFtRTtBQUNuRSxvQkFBMkIsSUFBZTtJQUN0QyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQSxxQkFBcUI7SUFDeEUsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUEsZ0JBQWdCO0lBQ3ZFLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLGFBQWE7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBLGVBQWU7SUFDL0QsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUEsMEJBQTBCO0lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQSxnQkFBZ0I7QUFDcEUsQ0FBQztBQVZELGdDQVVDO0FBc0JEO0lBR0ksd0JBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRWpDLENBQUM7SUFFTSxnQ0FBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFUQSxjQUFjO1FBcEIxQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxNQUFNLEVBQUU7Z0JBQ0osd05BU0M7YUFDQTtTQUNSLENBQUM7eUNBUXFDLGVBQU07T0FIaEMsY0FBYyxDQVd6QjtJQUFELHFCQUFDO0NBQUEsQUFYRixJQVdFO0FBWFcsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgYmFja2dyb3VuZENvbG9yUHJvcGVydHkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9mcmFtZVwiO1xuXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvblNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcImxvYWRlZFwiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWwuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBhcHBsaWNhdGlvblNldHRpbmdzLnNldFN0cmluZyhcIk5hbWVcIiwgXCJKb2huIERvZVwiKTtcbiAgICBjb25zb2xlLmxvZyhhcHBsaWNhdGlvblNldHRpbmdzLmdldFN0cmluZyhcIk5hbWVcIikpOy8vIFByaW50cyBcIkpvaG4gRG9lXCIuXG4gICAgYXBwbGljYXRpb25TZXR0aW5ncy5zZXRCb29sZWFuKFwiTWFycmllZFwiLCBmYWxzZSk7XG4gICAgY29uc29sZS5sb2coYXBwbGljYXRpb25TZXR0aW5ncy5nZXRCb29sZWFuKFwiTWFycmllZFwiKSk7Ly8gUHJpbnRzIGZhbHNlLlxuICAgIGFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0TnVtYmVyKFwiQWdlXCIsIDQyKTtcbiAgICBjb25zb2xlLmxvZyhhcHBsaWNhdGlvblNldHRpbmdzLmdldE51bWJlcihcIkFnZVwiKSk7Ly8gUHJpbnRzIDQyLlxuICAgIGNvbnNvbGUubG9nKGFwcGxpY2F0aW9uU2V0dGluZ3MuaGFzS2V5KFwiTmFtZVwiKSk7Ly8gUHJpbnRzIHRydWUuXG4gICAgYXBwbGljYXRpb25TZXR0aW5ncy5yZW1vdmUoXCJOYW1lXCIpOy8vIFJlbW92ZXMgdGhlIE5hbWUgZW50cnkuXG4gICAgY29uc29sZS5sb2coYXBwbGljYXRpb25TZXR0aW5ncy5oYXNLZXkoXCJOYW1lXCIpKTsvLyBQcmludHMgZmFsc2UuXG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcInBhZ2UyXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL3BhZ2UyL3BhZ2UyLmh0bWxcIixcbiAgICBzdHlsZXM6IFtcbiAgICAgICAgYFxuICAgICAgICAubXlidG4geyBmb250LXNpemU6IDIwOyB9XG4gICAgICAgIC5teS1jbGFzcyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAgICAgICB9XG4gICAgICAgIC5leHRyYWNsYXNzIHsgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBgXG4gICAgICAgIF1cbn0pXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBQYWdlMkNvbXBvbmVudCB7XG4gICAgaXNDbGFzc1Zpc2libGU6IHRydWU7XG4gICAgc29tZVByb3BlcnR5OiB0cnVlO1xuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgbmF2SG9tZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJcIl0pO1xuICAgICAgICAgICAgfVxuXG4gfVxuIl19