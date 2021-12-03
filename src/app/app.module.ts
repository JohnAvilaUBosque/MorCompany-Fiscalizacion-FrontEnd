import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ConfigService, UsuarioService } from './services';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { CargueArchivoComponent } from './pages/cargue-archivo/cargue-archivo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
    CargueArchivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
