import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Que componentes, pipes contiene nuestro modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Modulos
    imports: [ 
        // commonModule ofrece directivas personalizadas de angular
        CommonModule 
    ],
    // Que cosas quiero hacer publicas o visibles fuera de este modulo
    exports: [
        ListadoComponent
    ],
    providers: [],
})
export class HeroesModule {
    
}