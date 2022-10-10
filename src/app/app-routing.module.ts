import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { EditestudiosComponent } from './componentes/estudios/editestudios/editestudios.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { NewestudiosComponent } from './componentes/estudios/newestudios/newestudios.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditSkillComponent } from './componentes/skills/edit-skill/edit-skill.component';
import { NewSkillComponent } from './componentes/skills/new-skill/new-skill.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevoest', component: NewestudiosComponent},
  {path: 'editest/:id', component: EditestudiosComponent},
  {path: 'newskills', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
