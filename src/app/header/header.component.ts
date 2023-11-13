import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mostrarFormulario:Boolean=false;
  cambiar:Boolean=false;

  cerrarFormulario(cerrar:boolean) {
    this.mostrarFormulario=cerrar;
  }
}
