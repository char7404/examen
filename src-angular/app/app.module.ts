import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//configuracion de rutas
const routes:Routes = [
{path: '', redirectTo: '/clientes', pathMatch: 'full'},
{path: 'directivas', component: DirectivaComponent},//clases en el path se asigna el nombre
{path: 'clientes', component: ClientesComponent},  //clases en el path se asigna el nombre

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)//routes

  ],
bootstrap: [AppComponent],
providers: [ClienteService]//SERVICIO GLOBALES
})
export class AppModule { }
