import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  public nuevasCanciones: any[] = [];
  public loading: boolean;
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
      });
  }

}
