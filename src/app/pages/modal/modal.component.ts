import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  template: `<h1 mat-dialog-title>Solicitud aprobada</h1>
             <div mat-dialog-content>
                Su solicitud fue aprobada exitosamente!!
             </div>
             <div mat-dialog-actions>
               <button mat-button mat-dialog-close>Aceptar</button>
             </div>`,
})

export class ModalComponent {

}
