import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Usuario} from "../models/Usuario";
import {Cliente} from "../models/Cliente";
import {Reservacion} from "../models/Reservacion";

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  private urlEndPointReservar: string = "http://localhost:8080/reservacion/reservar"
  private httpHeader = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) {
  }

  Reservar(reservacion:Reservacion): Observable<Reservacion> {
    return this.http.post<Reservacion>(this.urlEndPointReservar, {reservacion}, {headers: this.httpHeader}).pipe(
      map(response => response)
    );
  }
}
