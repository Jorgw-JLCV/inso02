import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  paymentForm = this.fb.group({
    nombre: ['', Validators.required],
    numero_tarjeta: ['', Validators.required],
    fecha_expiracion: ['', Validators.required],
    codigo_verificacion: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
      this.router.navigate(['/consulta']);
  }

}
