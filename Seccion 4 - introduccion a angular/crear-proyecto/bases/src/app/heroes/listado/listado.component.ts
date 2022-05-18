import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  // se ejecuta antes de la renderizacion y sola una vez
  constructor() { }

  // cada vez que este componente se ejecuta 
  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Capitan America']
  heroesBorrados: string[] = [];


  borrarHeroe(){
    //this.heroes.pop();
    //this.heroes.splice(0,1);
    const borrado = this.heroes.shift();
    //const borrado: string = this.heroes.shift() || '';
    if (borrado!= undefined){
      this.heroesBorrados.push(borrado);
    }

    console.log(this.heroesBorrados);
  }
}
