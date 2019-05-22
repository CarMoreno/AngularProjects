import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private configService: ConfigService) {

  }

  /**
   * 
   * @param query 
   */
  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get( url, {headers: this.configService.getHeaders()})
  }

  /**
   * Retorna los nuevos estrenos.
   */
  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map( data => data['albums'].items) );
  }

  /**
   * Retorna los artistas
   * @param termino 
   */
  getArtists(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
            .pipe( map(data => data['artists'].items));
  }
}
