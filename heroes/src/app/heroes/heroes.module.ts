// We need to import NgModule, as we are going to use it as decorator
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // The full module component index
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Everything that we want to use outside the module
    exports: [
        ListadoComponent,
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {}