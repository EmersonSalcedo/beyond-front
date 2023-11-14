import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mostrarFormulario:Boolean=false;
  cambiar:Boolean=false;
  constructor(private router:Router) {
  }
  getRuta():string{
    return this.router.url
  }
}
