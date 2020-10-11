import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CentroComponent } from './centro/centro.component';
import { HomeComponent } from './home/home.component';
import { QuinessomosComponent } from './quinessomos/quinessomos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { RegistrousuarioComponent } from './formularios/registrousuario/registrousuario.component';
import { RegistrohistorialclinicoComponent } from './formularios/registrohistorialclinico/registrohistorialclinico.component';
import { RegistroProSaludComponent } from './formularios/registro-pro-salud/registro-pro-salud.component';
import { RegistroLaboratorioComponent } from './formularios/registro-laboratorio/registro-laboratorio.component';
import { RegistroPersonalAdministrativoComponent } from './formularios/registro-personal-administrativo/registro-personal-administrativo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CentroComponent,
    HomeComponent,
    QuinessomosComponent,
    ServiciosComponent,
    ContactenosComponent,
    RegistrousuarioComponent,
    RegistrohistorialclinicoComponent,
    RegistroProSaludComponent,
    RegistroLaboratorioComponent,
    RegistroPersonalAdministrativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
