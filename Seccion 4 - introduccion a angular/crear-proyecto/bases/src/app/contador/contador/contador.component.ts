import { Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{title}}</h1>
    <h3>La base es: {{base}}</h3>
    
    
    <button (click)="sumarOrestar(+base)">+ {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="sumarOrestar(-base)">- {{base}}</button>`
})

export class ContadorComponent{
    title: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
    sumarOrestar( numero: number){
      this.numero += numero;
    }
}