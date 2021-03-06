import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  public artists: any[] = [];
  public loading: boolean;
  public error: any = null;
  constructor(private spotifyService: SpotifyService) { 
    
  }

  buscar(termino: string) {
    if(termino == "") {
      this.loading = false;
      this.artists = [];
    }
    else {
      this.spotifyService.getArtists(termino)
        .subscribe( data => {
          console.log(data);
          this.artists = data;
          this.loading = false;
        }, error => {
          this.loading = false;
          this.error = error['error'];
        });
    }
  }
}
