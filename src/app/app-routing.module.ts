import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargueArchivoComponent } from './pages/cargue-archivo/cargue-archivo.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cargueArchivo', component: CargueArchivoComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
