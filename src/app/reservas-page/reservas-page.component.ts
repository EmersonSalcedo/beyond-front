import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AccessService} from "../services/access.service";
import {ServiciosService} from "../services/servicios.service";
import {Carpa} from "../models/Carpa";
import {Lancha} from "../models/Lancha";
import {Restaurante} from "../models/Restaurante";
import {Reservacion} from "../models/Reservacion";
import {Cliente} from "../models/Cliente";
import {ReservacionService} from "../services/reservacion.service";

@Component({
  selector: 'app-reservas-page',
  templateUrl: './reservas-page.component.html',
  styleUrls: ['./reservas-page.component.css']
})
export class ReservasPageComponent implements OnInit{
  logueado: boolean;
  carpas:[Carpa];
  lanchas:[Lancha];
  restaurantes:[Restaurante];
  modal=false;
  objetoSeleccionado;
  url:string;
  tipo:string;
  playas=["Playa Blanca","Playa Bocagrande","Playa CastilloGrande"]
  reservacion:Reservacion=new Reservacion();
  idCliente:number;
  constructor(private router: Router, private accessService: AccessService,private serviciosService:ServiciosService,private reservacionService:ReservacionService) {
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
        }else{
          this.idCliente=(valor as Cliente).id;
        }
      }
    )
  }

  ngOnInit(): void {
    this.serviciosService.getServicios().subscribe(
      servicios=>{
        this.carpas=servicios['carpas'];
        this.lanchas=servicios['lanchas'];
        this.restaurantes=servicios['restaurantes'];
      }
    )
    this.reservacion.numPersonas=1
    this.reservacion.numHoras=1
    this.reservacion.subtotal=0
  }
  cargarModal(objeto:Object,url:string,tipo:string):void{
    this.tipo=tipo;
    this.url=url;
    this.modal=true;
    this.objetoSeleccionado=objeto;
  }
  calcularSubtotal(){
    if(this.tipo=='Carpa'){
      this.reservacion.subtotal= this.objetoSeleccionado.precio*this.reservacion.numHoras;
    }else{
      this.reservacion.subtotal=this.objetoSeleccionado.precio*this.reservacion.numPersonas;
    }
  }
  setNumpersonas(event:any){
    this.reservacion.numPersonas=event.target.value;
  }
  setNumHoras(event:any){
    this.reservacion.numHoras=event.target.value;
  }
  setFecha(event:any){
    this.reservacion.fecha=event.target.value
  }
  reservar(){
    this.reservacion.idProveedor=this.objetoSeleccionado.idProveedor;
    this.reservacion.idPlaya=this.objetoSeleccionado.idPlaya;
    this.reservacion.tipoServicio=this.tipo;
    this.reservacion.nombreServicio=this.objetoSeleccionado.nombre;
    this.reservacion.idCliente=this.idCliente;
    this.reservacionService.Reservar(this.reservacion).subscribe();
  }


}
