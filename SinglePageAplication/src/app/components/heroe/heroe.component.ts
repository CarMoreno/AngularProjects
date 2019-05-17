import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.services';
import { Heroe } from 'src/app/Interfaces/heroe.interfce';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent{

  public heroe: Heroe;

  constructor(private _activatedRoute: ActivatedRoute, 
    private _heroeService: HeroesService) {
    this._activatedRoute.params.subscribe(
      (param) => {
        this.heroe = this._heroeService.getHeroe( param['id'] );
        console.log('this.heroe :', this.heroe);
      }
    )
  }



}
