import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Cliente} from "../models/Cliente";
import {Usuario} from "../models/Usuario";
import {AccessService} from "../services/access.service";

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
   @Input() activar:boolean=false;
   @Output() cerrar = new EventEmitter<boolean>();
   cliente:Cliente=new Cliente();
   usuario:Usuario=new Usuario();

   constructor(private accessService:AccessService) {
   }
   public registrar():void{
     this.accessService.RegistrarUsuario(this.usuario,this.cliente).subscribe();
   }
   public login():void{
     this.accessService.loguearse(this.usuario).subscribe();
   }
}
