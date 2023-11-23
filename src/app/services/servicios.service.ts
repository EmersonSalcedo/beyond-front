import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private urlEndPointListar: string = "http://localhost:8080/servicios/listar"

  constructor(private http: HttpClient, private router: Router) {
  }

  getServicios(): Observable<{}> {
    return this.http.get(this.urlEndPointListar).pipe(
      map((data: any) => {
          return {"carpas":data.carpas,"lanchas":data.lanchas,"restaurantes":data.restaurantes}

        }
      )
    )
  }
}
