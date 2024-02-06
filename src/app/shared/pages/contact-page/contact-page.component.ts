import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import * as customValidators from "../../interfaces/validators.interface"

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {

  constructor( private fb: FormBuilder){}

  public formGroup: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(6)]],
    edad: ["",[ Validators.required, Validators.min(15)]],
    email: ["", [Validators.required, Validators.pattern( customValidators.emailPattern) ]],
    mensaje: ["", [Validators.required, Validators.minLength(20)]],
  })

  isValidField( field: string): boolean | null{
    return this.formGroup.controls[field].errors && 
    this.formGroup.controls[field].touched;
  }

  enviarData(){
    if( this.formGroup.invalid ){
      this.formGroup.markAllAsTouched();
      return
    }
    console.log(this.formGroup.value)
  }


  getFieldError( field:string ): string | null{
     if( !this.formGroup.controls[field]) return null;

     const errors = this.formGroup.controls[field].errors || {}

     for(const key of Object.keys(errors)){
      switch( key ){
        case "required":
          return "Este campo es requerido";

        case "minlength":
          return `Minimo de ${ errors["minlength"].requiredLength } caracteres`;

        
      }
     }

     return ""
  }
}
