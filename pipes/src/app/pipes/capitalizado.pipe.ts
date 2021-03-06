import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas: boolean = true): string {
        console.log('value :', value);

        value = value.toLowerCase();
        let palabras: string[] = value.split(" ");

        if( todas ) {
            for ( let i in palabras) {
                palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
                console.log('palabras[i] :', palabras[i]);
            }
        }
        else {
            palabras[0] = palabras[0][0].toUpperCase() + palabras[0].substr(1);
        }


        return palabras.join(" ");
    }
}