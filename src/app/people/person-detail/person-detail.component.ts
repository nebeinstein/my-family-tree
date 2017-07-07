import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Person } from '../../shared/person.model';
import { PeopleService } from '../../shared/people.service';

@Component({
  selector: 'ft-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  person: Person;
  id: number;

  constructor(private peopleService: PeopleService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.person = this.peopleService.getPerson(this.id);
      }
    );
  }

  onEditPerson() {
    this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onDeletePerson() {
    this.peopleService.deletePerson(this.id);
    this.router.navigate(['/people']);
  }

}
