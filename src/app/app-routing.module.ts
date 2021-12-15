import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GithubComponent } from './github/github.component';
const routes: Routes = [{
  path:'home', component : HomeComponent},
  { path: 'contact', component:  ContactComponent},
  { path: 'projects', component: ProjectsComponent},
{path: 'about', component:AboutComponent},
{
  path:'', component : HomeComponent},
  { path: 'github', component:  GithubComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
