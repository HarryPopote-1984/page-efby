import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import AOS from 'aos';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoComponent implements OnInit{



  public formulario!:FormGroup;

    constructor(private fb: FormBuilder) { }
  ngOnInit() {

    AOS.init();

    this.formulario = this.fb.group({
      nombreApellido: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required,Validators.pattern("[0-9]*"), Validators.minLength(9)]],
      mensaje: ['', Validators.required]
    });
  }


    isValidField(field:string):boolean | null{
      return this.formulario.controls[field].errors
       && this.formulario.controls[field].touched
    }


    getFieldError(field:string):string | null{
      if(!this.formulario.controls[field]) return null;

      const errors = this.formulario.controls[field].errors || {}

      for (const key of Object.keys(errors)){
        switch(key){
          case 'required':
            return 'Este campo es requerido';
          case 'minlength':
            return `Minimo ${errors['minlength'].requiredLength} caracteres.`
        }
      }

      return null;

    }

    enviar(): void {

      if(this.formulario.invalid){
        this.formulario.markAllAsTouched();
        return;
      }


      // if (this.EmailService.enviarCorreo(this.formulario.value).subscribe()) {
      //   // Aquí puedes enviar los datos del formulario

      //   console.log(this.formulario.value);
      // } else {
      //   // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar otra acción
      //   console.error('Formulario inválido');
      // }
      //con el reset se pureden estableser el reset a un objeto en especiofico con valores iniciales
      this.formulario.reset()
    }

}
