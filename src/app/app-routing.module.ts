import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactiveForm', component: ReactiveComponent },
  { path: 'student-form/:id', component: StudentFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
