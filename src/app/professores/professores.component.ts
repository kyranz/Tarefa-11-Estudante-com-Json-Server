import { Professor } from './../shared/professor';
import { ProfessorService } from '../shared/professor.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];
  selectedProfessor?: Professor;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  onSelect(professor: Professor): void {
    this.selectedProfessor = professor;
  }

  getProfessores(): void {
    this.professorService.getProfessores()
      .subscribe(professores => this.professores = professores);
    console.log(this.professores);
  }

}
