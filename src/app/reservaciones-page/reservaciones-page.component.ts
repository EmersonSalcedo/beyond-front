import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AccessService} from "../services/access.service";

@Component({
  selector: 'app-reservaciones-page',
  templateUrl: './reservaciones-page.component.html',
  styleUrls: ['./reservaciones-page.component.css']
})
export class ReservacionesPageComponent {
  logueado:boolean;
  constructor(private router: Router, private accessService: AccessService) {
    this.accessService.verificarLogin().subscribe(
      (valor: boolean) => {
        this.logueado = valor;
        if(this.logueado==false){
          this.router.navigate([''])
        }
      }
    )
  }

}
