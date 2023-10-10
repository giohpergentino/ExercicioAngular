import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  saudacao: string = "olá, mundo";
  link: string = "https://www.example.com";

  classe = 'opcao1'
  selecionaClasse(value: string){
    this.classe = value
  }
}
