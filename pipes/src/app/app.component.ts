import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public nombre: string = "Ana";
  public nombre2: string = "carlOs AndRES moreno velez";
  public numeros: number[] = [1,2,3,4,5,6,7,8,9,10];
  public PI: number = Math.PI;
  public n: number = 0.234;
  public salario: number = 1234.5;
  public heroe: object = {
    'nombre': 'Logan',
    'clave': 'Wolverine',
    'edad': 500,
    'direccion': {
      'calle': 'Primera',
      'casa': '12'
    }
  };

  public valorPromesa: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => resolve("Llego la data"), 3500);
  });

  public fecha: Date = new Date('2019-05-13');
  public idVideo: string = "XbI1FpLd4Vk";
  public activar: boolean = true;
}
