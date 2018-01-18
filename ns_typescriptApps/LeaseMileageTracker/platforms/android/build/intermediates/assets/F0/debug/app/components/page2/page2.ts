import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "page2",
    templateUrl: "./components/page2/page2.html",
})

export class Page2Component {

    public constructor(private router: Router) {
        
            }
        
            public navHome() {
                this.router.navigate([""]);
            }

 }
