import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
{ path: 'especialidades', loadChildren: () => import('./pages/specialties/specialties.module').then(m => m.SpecialtiesModule) }, 
{ path: 'paquetes', loadChildren: () => import('./pages/packages/packages.module').then(m => m.PackagesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
