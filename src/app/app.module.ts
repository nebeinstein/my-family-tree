import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { PersonEditComponent } from './people/person-edit/person-edit.component';
import { PersonItemComponent } from './people/people-list/person-item/person-item.component';
import { PersonStartComponent } from './people/person-start/person-start.component';

import { DropdownDirective } from './shared/dropdown.directive';

import { MyDatePipe } from './shared/pipes/my-date.pipe';
import { NamePipe } from './shared/pipes/name.pipe';

import { PeopleService } from './shared/people.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PeopleComponent,
    PersonDetailComponent,
    PersonEditComponent,
    PeopleListComponent,
    PersonStartComponent,
    PersonItemComponent,
    DropdownDirective,
    MyDatePipe,
    NamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
