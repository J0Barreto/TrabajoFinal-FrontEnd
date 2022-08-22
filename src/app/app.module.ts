import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
