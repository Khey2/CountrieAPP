import { NgModule } from '@angular/core';

//  PrimeNg Modules
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';



@NgModule({
  declarations: [],
  exports:[ 
    ButtonModule,
    TagModule,
    CardModule,
    CheckboxModule,
    ProgressBarModule
  ]
})
export class PrimeNGModule { }
