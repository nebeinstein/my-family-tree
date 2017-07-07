import { Component, Input, OnInit } from '@angular/core';

import { Person } from '../../../shared/person.model';

@Component({
  selector: 'ft-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() person: Person;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
