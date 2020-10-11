import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {HomeComponent} from './home/home.component';
import {QuinessomosComponent} from './quinessomos/quinessomos.component';
import {ServiciosComponent} from './servicios/servicios.component';
import {ContactenosComponent} from './contactenos/contactenos.component';
import {RegistrousuarioComponent} from './formularios/registrousuario/registrousuario.component';
import {RegistroLaboratorioComponent} from './formularios/registro-laboratorio/registro-laboratorio.component';
import {RegistroProSaludComponent} from './formularios/registro-pro-salud/registro-pro-salud.component';
import {RegistrohistorialclinicoComponent} from './formularios/registrohistorialclinico/registrohistorialclinico.component';
import {RegistroPersonalAdministrativoComponent} from './formularios/registro-personal-administrativo/registro-personal-administrativo.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'quienessomos', component: QuinessomosComponent},
  {path:'servicio', component: ServiciosComponent},
  {path:'contactanos', component: ContactenosComponent},
  {path:'registrousuario', component: RegistrousuarioComponent},
  {path:'registrolaboratorio', component: RegistroLaboratorioComponent},
  {path:'registo-pre-salud', component: RegistroProSaludComponent},
  {path:'registrohistorial', component: RegistrohistorialclinicoComponent},
  {path:'registroperadministrativo', component: RegistroPersonalAdministrativoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
