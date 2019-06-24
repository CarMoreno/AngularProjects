import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  public artist: any = {};
  public loading: boolean;
  public topTracks: any[] = [];
  constructor(private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  /**
   * 
   * @param id 
   */
  public getArtista(id: string) {
    this.spotifyService.getArtist(id)
    .subscribe( data => {
      this.artist = data;
      this.loading = false;
    });
  }

  public getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
    .subscribe(data => {
      this.topTracks = data;
      console.log('data :', data)
    })
  }

}
