import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    public mostrar: boolean = true;
    public frase: any = {
        mensaje: 'Un gran poder requiere una gran responsabilidad',
        autor: 'Ben Parker'
    };
    public personajes: string[] = ['Spiderman', 'Ironman', 'Capitán América'];
}