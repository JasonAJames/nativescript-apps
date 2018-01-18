"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_registry_1 = require("nativescript-angular/element-registry");
var core_1 = require("@angular/core");
var directives_1 = require("./directives");
element_registry_1.registerElement("RadioGroup", function () { return require("nativescript-radiobutton").RadioGroup; });
element_registry_1.registerElement("RadioButton", function () { return require("nativescript-radiobutton").RadioButton; });
var RadioButtonModule = (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule = __decorate([
        core_1.NgModule({
            declarations: [
                directives_1.RADIOBUTTON_DIRECTIVES
            ],
            exports: [
                directives_1.RADIOBUTTON_DIRECTIVES
            ]
        })
    ], RadioButtonModule);
    return RadioButtonModule;
}());
exports.RadioButtonModule = RadioButtonModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMEVBQXdFO0FBQ3hFLHNDQUF5QztBQUV6QywyQ0FBc0Q7QUFDdEQsa0NBQWUsQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLFVBQVUsRUFBOUMsQ0FBOEMsQ0FBQyxDQUFDO0FBQ3BGLGtDQUFlLENBQUMsYUFBYSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxXQUFXLEVBQS9DLENBQStDLENBQUMsQ0FBQztBQVd0RjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBVDdCLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDVixtQ0FBc0I7YUFDekI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsbUNBQXNCO2FBQ3pCO1NBRUosQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZGlvR3JvdXAsIFJhZGlvQnV0dG9uIH0gZnJvbSAnLi4vJztcbmltcG9ydCB7IFJBRElPQlVUVE9OX0RJUkVDVElWRVMgfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xucmVnaXN0ZXJFbGVtZW50KFwiUmFkaW9Hcm91cFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXJhZGlvYnV0dG9uXCIpLlJhZGlvR3JvdXApO1xucmVnaXN0ZXJFbGVtZW50KFwiUmFkaW9CdXR0b25cIiwgKCkgPT4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1yYWRpb2J1dHRvblwiKS5SYWRpb0J1dHRvbik7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFJBRElPQlVUVE9OX0RJUkVDVElWRVNcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgUkFESU9CVVRUT05fRElSRUNUSVZFU1xuICAgIF1cblxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0J1dHRvbk1vZHVsZSB7IH1cbiJdfQ==