import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ft-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title='the My Family Tree app';

    constructor() { }

    ngOnInit() {
    }

}
