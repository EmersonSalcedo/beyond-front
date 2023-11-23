import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AccessService} from "../services/access.service";
import {Proveedor} from "../models/Proveedor";
import {Cliente} from "../models/Cliente";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  logueado:boolean;
  rol: string;
  info;
  correo:string;
  constructor(private router: Router, private accessService: AccessService) {
    this.accessService.verificarLogin().subscribe(
      (valor: boolean) => {
        this.logueado = valor;
        if(this.logueado==false){
          this.router.navigate([''])
        }
      }
    )
    this.accessService.obtenerCookie().subscribe(
      (valor) => {
        this.info=valor
        if('nit' in valor){
          this.rol="proveedor"
          this.info=this.info as Proveedor
        }else{
          this.rol="cliente"
          this.info=this.info as Cliente
        }
      }
    )
    this.correo=this.accessService.obtenerCorreo()
  }

}
