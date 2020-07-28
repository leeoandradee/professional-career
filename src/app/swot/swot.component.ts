import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swot',
  templateUrl: './swot.component.html',
  styleUrls: ['./swot.component.css']
})
export class SwotComponent implements OnInit {

  constructor() { }

  strengths = ['Conhecimento mobile', 'Conhecimento de processos de release', 'Conhecimento do backend'];
  weakness = ['Conhecimento mais técnico do Angular', 'Conhecimento mais técnico de tecnologias nativas'];
  opportunities = ['Migração da dashboard de crédito', 'Mapeamento do SuperApp', 'Começar uma pós graduação'];
  threats = [''];

  ngOnInit(): void {
  }

}
