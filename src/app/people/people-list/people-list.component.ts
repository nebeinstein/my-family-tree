import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { PeopleService } from '../../shared/people.service';
import { Person } from '../../shared/person.model';

@Component({
    selector: 'ft-people-list',
    templateUrl: './people-list.component.html',
    styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {
    people: Person[];
    private subscription: Subscription;

    constructor(private peopleService: PeopleService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.subscription = this.peopleService.peopleChanged.subscribe(
            (people: Person[]) => {
                this.people = people;
            }
        );
        this.people = this.peopleService.getPeople();
    }

    onNewPerson() {
        this.router.navigate(['new'], {relativeTo: this.route});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}