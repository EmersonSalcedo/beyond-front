import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators"
import {Usuario} from "../models/Usuario";
import {Cliente} from "../models/Cliente";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Proveedor} from "../models/Proveedor";

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private urlEndPointRegister: string = "http://localhost:8080/access/register"
  private urlEndPointLogin: string = "http://localhost:8080/access/login"
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})
  private rol:string;

  constructor(private http: HttpClient, private cookies: CookieService, private router: Router) {
  }

  RegistrarUsuario(usuario: Usuario, cliente: Cliente): Observable<void> {
    return this.http.post<Cliente>(this.urlEndPointRegister, {
      "usuario": usuario,
      "cliente": cliente
    }, {headers: this.httpHeader}).pipe(
      map(response => this.crearCookie(response, usuario.correo))
    );
  }

  loguearse(usuario: Usuario): Observable<void> {
    return this.http.post<Object>(this.urlEndPointLogin, usuario, {headers: this.httpHeader}).pipe(
      map(response => this.crearCookie(response, usuario.correo))
    );
  }

  crearCookie(object:Object, correo: string) {
    if (object != null) {
      if('nit' in object){
        this.cookies.set("proveedor", JSON.stringify(object));
      }else{
        this.cookies.set("cliente", JSON.stringify(object));
      }
      this.router.navigate(['/']);
      window.location.reload();
      this.cookies.set("correo", JSON.stringify(correo));
    }
  }

  verificarLogin():Observable<boolean> {
    if(this.cookies.check("cliente")||this.cookies.check("proveedor")){
      return of(true);
    }else{
      return of(false);
    }

  }
  obtenerCookie():Observable<any>{
    if(this.cookies.check("cliente")){
      return of(JSON.parse(this.cookies.get("cliente")))
    }else{
      return of(JSON.parse(this.cookies.get("proveedor")))
    }
  }

  obtenerCorreo():string{
    return this.cookies.get("correo").replaceAll('"',"")
  }
  cerrarSesion(): void {
    this.cookies.deleteAll();
    this.router.navigate(['/']);
    window.location.reload();
  }


}
