import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.services';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/Interfaces/heroe.interfce';

@Component({
  selector: 'app-resultado-busqueda-heroe',
  templateUrl: './resultado-busqueda-heroe.component.html',
  styles: []
})
export class ResultadoBusquedaHeroeComponent implements OnInit {

  public heroesArr: Heroe[] = [];
  public termino: string;
  constructor(private _heroeService: HeroesService,
    private _actviatedRoute: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._actviatedRoute.params.subscribe(
      params => {
        this.termino = params['termino'];
        this.heroesArr = this._heroeService.buscarHeroe(params['termino']);
      }
    );
  }

    /**
   * 
   * @param idx 
   */
  public verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }


}
