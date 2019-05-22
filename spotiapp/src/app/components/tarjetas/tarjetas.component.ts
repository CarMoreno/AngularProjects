import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent {

  @Input() items: any[] = [];
  constructor(private router: Router) { }

  verArtista( termino: any): void {
    let artistId:string = null;
    if(termino.type === "artist") {
      artistId = termino.id;
    }
    else if(termino.type === "album") {
      artistId = termino.artists[0].id;
    }

    this.router.navigate(['/artist', artistId]);
  }
}
