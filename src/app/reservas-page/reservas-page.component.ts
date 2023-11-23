import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AccessService} from "../services/access.service";
import {Cliente} from "../models/Cliente";
import {Proveedor} from "../models/Proveedor";

@Component({
  selector: 'app-reservas-page',
  templateUrl: './reservas-page.component.html',
  styleUrls: ['./reservas-page.component.css']
})
export class ReservasPageComponent {
  logueado: boolean;
  constructor(private router: Router, private accessService: AccessService) {
    this.accessService.verificarLogin().subscribe(
      (valor: boolean) => {
        this.logueado = valor;
        if (this.logueado == false) {
          this.router.navigate([''])
        }
      }
    )
    this.accessService.obtenerCookie().subscribe(
      (valor) => {
        if('nit' in valor){
          router.navigate([''])
        }
      }
    )
  }

}
