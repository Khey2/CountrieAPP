import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { ProjectsPageComponent } from './shared/pages/projects-page/projects-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { InformationAboutProjectPageComponent } from './shared/pages/information-about-project-page/information-about-project-page.component';

const routes: Routes = [
  {
    path:"home",
    component:HomePageComponent
  },
  {
    path:"projects",
    component:ProjectsPageComponent,
    children:[
     
    ]
  },
  {
    path:"projects/:id", 
    component: InformationAboutProjectPageComponent
  },
  {
    path:"contact",
    component:ContactPageComponent
  },
  {
    path:"**",
    redirectTo: "home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
