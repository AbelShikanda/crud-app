import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
  {path: '', component:HomeComponent, title: 'Home'},
  {path: 'about', component:AboutComponent, title: 'About'},
  {path: 'contact', component:ContactComponent, title: 'Contact'},
  {path: 'students/create', component:StudentCreateComponent, title: 'create student'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
