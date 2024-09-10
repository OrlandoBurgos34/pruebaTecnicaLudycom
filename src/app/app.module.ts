import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CreacionUsuariosComponent } from './modules/creacion-usuarios/creacion-usuarios.component';
import { ConsultaAreasComponent } from './modules/consulta-areas/consulta-areas.component';
import { ConsultaEmpleadosComponent } from './modules/consulta-empleados/consulta-empleados.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CreacionAreasComponent } from './modules/creacion-areas/creacion-areas.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    CreacionUsuariosComponent,
    ConsultaAreasComponent,
    ConsultaEmpleadosComponent,
    DashboardComponent,
    CreacionAreasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
