import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from "@angular/forms";
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';
import { FeatureComponent } from './feature/feature.component';
import { ServiciosComponent } from './servicios/servicios.component';
import {AccessService} from "./services/access.service";
import { HomePageComponent } from './home-page/home-page.component';
import { ReservacionesPageComponent } from './reservaciones-page/reservaciones-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {RouterModule, Routes} from "@angular/router";
import { ReservasPageComponent } from './reservas-page/reservas-page.component';
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {ServiciosService} from "./services/servicios.service";

const appRoutes:Routes=[
  {path:'',component:HomePageComponent},
  {path:'reservar',component:ReservasPageComponent},
  {path:'reservaciones',component:ReservacionesPageComponent},
  {path:'perfil',component:ProfilePageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginRegisterComponent,
    CallToActionComponent,
    FooterComponent,
    FeatureComponent,
    ServiciosComponent,
    HomePageComponent,
    ReservacionesPageComponent,
    ProfilePageComponent,
    ReservasPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AccessService,CookieService,ServiciosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
