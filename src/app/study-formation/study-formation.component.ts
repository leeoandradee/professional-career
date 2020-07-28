import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-formation',
  templateUrl: './study-formation.component.html',
  styleUrls: ['./study-formation.component.css']
})
export class StudyFormationComponent implements OnInit {

  constructor() { }

  cursos = [
    {ano: "2019", nome: "Sistemas de Informação", escola: "Universidade Presbiteriana Mackenzie"},
    {ano: "2019", nome: "Tecnologia em Análise e Desenvolvimento de Sistemas", escola: "Universidade Presbiteriana Mackenzie"}
  ];

  ngOnInit(): void {
  }

}
