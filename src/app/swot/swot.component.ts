import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swot',
  templateUrl: './swot.component.html',
  styleUrls: ['./swot.component.css']
})
export class SwotComponent implements OnInit {

  constructor() { }

  strengths = ['Conhecimento mobile', 'Conhecimento de processos de release'];
  weakness = ['Conhecimento mais a fundo de tecnologia'];
  opportunities = ['Migração da dashboard de crédito', 'Mapeamento do SuperApp', 'Começar uma pós graduação'];
  threats = [''];

  ngOnInit(): void {
  }

}
