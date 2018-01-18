import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { backgroundColorProperty } from "tns-core-modules/ui/frame/frame";

import { EventData } from "data/observable";
import * as applicationSettings from "application-settings";
// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args: EventData) {
    applicationSettings.setString("Name", "John Doe");
    console.log(applicationSettings.getString("Name"));// Prints "John Doe".
    applicationSettings.setBoolean("Married", false);
    console.log(applicationSettings.getBoolean("Married"));// Prints false.
    applicationSettings.setNumber("Age", 42);
    console.log(applicationSettings.getNumber("Age"));// Prints 42.
    console.log(applicationSettings.hasKey("Name"));// Prints true.
    applicationSettings.remove("Name");// Removes the Name entry.
    console.log(applicationSettings.hasKey("Name"));// Prints false.
}

@Component({
    selector: "page2",
    templateUrl: "./components/page2/page2.html",
    styles: [
        `
        .mybtn { font-size: 20; }
        .my-class {
          background-color: yellow;
        }
        .extraclass { 
            background-color: black;
            color: white;
        }
        `
        ]
})




export class Page2Component {
    isClassVisible: true;
    someProperty: true;
    public constructor(private router: Router) {
        
            }

            public navHome() {
                this.router.navigate([""]);
            }

 }
