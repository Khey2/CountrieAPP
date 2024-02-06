import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { RouterModule } from '@angular/router';
import { GeneralInformationPageComponent } from './components/general-information-page/general-information-page.component';
import { PreviewPageComponent } from './components/preview-page/preview-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CardComponent } from './components/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationAboutProjectPageComponent } from './pages/information-about-project-page/information-about-project-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    MenuBarComponent,
    GeneralInformationPageComponent,
    PreviewPageComponent,
    CardComponent,
    InformationAboutProjectPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PrimeNGModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    MenuBarComponent,
    GeneralInformationPageComponent,
    PreviewPageComponent
  ]
})
export class SharedModule { }
