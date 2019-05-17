import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    console.log('object :', activar);

    if( activar ) {
      value = value.replace(value, '*'.repeat(value.length));
    }
    return value;
  }

}
