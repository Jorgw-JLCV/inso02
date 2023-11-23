
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  form = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    archivo: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario válido');
      // Aquí puedes manejar el envío de tu formulario
    } else {
      console.log('Formulario inválido');
    }
  }

}