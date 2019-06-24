import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  public nuevasCanciones: any[] = [];
  public loading: boolean;
  public error: any = null;
  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.getSongs();
  }

  /**
   * 
   */
  getSongs() {
    this.spotifyService.getNewReleases().subscribe(
      (data: any) => {
        console.log('data :', data);
        this.nuevasCanciones = data;
        this.loading = false;

      }, (error) => {
        console.log('errorcito :', error);
        this.error = error['error'];
        this.loading = false;
      });
  }

}
