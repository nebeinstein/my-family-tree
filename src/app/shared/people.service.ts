import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Person } from './person.model';

@Injectable()
export class PeopleService {
    personSelected = new Subject<Person>();
    peopleChanged = new Subject<Person[]>();

    private people: Person[] = [
        new Person(
            [
                'Nicole',
                'Elizabeth',
                'Beinstein'
            ],
            // For the month, put in 1 number less
            '08131994',
            '',
            'http://www.cenpatico.com/files/2014/01/noprofile.gif'
        ),
        new Person(
            [
                'Claudia',
                'Ross',
                'Beinstein'
            ],
            '01261965',
            '',
            'http://www.cenpatico.com/files/2014/01/noprofile.gif'
        ),
        new Person(
            [
                'David',
                'Lloyd',
                'Beinstein'
            ],
            '11201962',
            '',
            'http://www.cenpatico.com/files/2014/01/noprofile.gif'
        )
    ];

    constructor() { }

    getPeople() {
        return this.people.slice();
    }

    getPerson(index: number) {
        return this.people[index];
    }

    addPerson(person: Person) {
        this.people.push(person);
        this.peopleChanged.next(this.people.slice());
    }

    updatePerson(index: number, newPerson: Person) {
        this.people[index] = newPerson;
        this.peopleChanged.next(this.people.slice());
    }

    deletePerson(index: number) {
        this.people.splice(index, 1);
        this.peopleChanged.next(this.people.slice());
    }

}