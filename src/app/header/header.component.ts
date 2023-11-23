import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccessService} from "../services/access.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  mostrarFormulario: Boolean = false;
  cambiar: Boolean = false;
  estaLogueado:boolean=false;
  constructor(private router: Router, private accessService: AccessService) {
  }

  getRuta(): string {
    return this.router.url
  }
  cerrarSesion():void{
    this.accessService.cerrarSesion();
  }
  logueado(){
    this.accessService.verificarLogin().subscribe(
      value => this.estaLogueado=value
    );
    return this.estaLogueado
  }
}
