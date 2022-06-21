import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudanteDetailComponent } from './estudantes/estudante-detail/estudante-detail.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { ProfessorDetailComponent } from './professores/professor-detail/professor-detail.component';
import { ProfessoresComponent } from './professores/professores.component';
import { TopoComponent } from './topo/topo.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudanteDetailComponent,
    TopoComponent,
    ProfessoresComponent,
    ProfessorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
