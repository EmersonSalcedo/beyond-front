import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
   @Input() activar:boolean=false;
   @Output() cerrar = new EventEmitter<boolean>();

}
