import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ModificarComponent } from './pages/modificar/modificar.component';
import { PagoComponent } from './pages/pago/pago.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'solicitud',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'consulta',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'modificar',
    component:ModificarComponent,
    pathMatch:'full'
  },
  {
    path:'pago',
    component:PagoComponent,
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
