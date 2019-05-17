import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/Interfaces/heroe.interfce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-tarjeta',
  templateUrl: './heroes-tarjeta.component.html'
})
export class HeroesTarjetaComponent implements OnInit {

  @Input() public heroe: Heroe;
  @Input() public index: number;
  @Output() public onClick: EventEmitter<number>;

  constructor(private _router: Router) { 
    this.onClick = new EventEmitter();
  }

  ngOnInit() {
  }

  /**
   * 
   * @param idx 
   */
  public verHeroe() {
    this.onClick.emit(this.index);
    // this._router.navigate(['/heroe', this.index]);
  }

}
