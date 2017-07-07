import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PeopleComponent } from './people/people.component';
import { PersonDetailComponent } from './people/person-detail/person-detail.component';
import { PersonEditComponent } from './people/person-edit/person-edit.component';
import { PersonStartComponent } from './people/person-start/person-start.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'people', component: PeopleComponent, children: [
        { path: '', component: PersonStartComponent },
        { path: 'new', component: PersonEditComponent },
        { path: ':id', component: PersonDetailComponent },
        { path: ':id/edit', component: PersonEditComponent }
    ] }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}