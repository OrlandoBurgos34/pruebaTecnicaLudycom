import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CreacionUsuariosComponent } from './modules/creacion-usuarios/creacion-usuarios.component';
import { CreacionAreasComponent } from './modules/creacion-areas/creacion-areas.component';
import { ConsultaEmpleadosComponent } from './modules/consulta-empleados/consulta-empleados.component';
import { ConsultaAreasComponent } from './modules/consulta-areas/consulta-areas.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'creacionUsuarios', component: CreacionUsuariosComponent},
      {path: 'creacionAreas', component: CreacionAreasComponent},
      {path:'consultaEmpleados', component: ConsultaEmpleadosComponent},
      {path: 'consultaAreas', component: ConsultaAreasComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
