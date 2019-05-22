import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private headers: HttpHeaders;
  private TOKEN = 'BQAo2aDs3ahDRLzAZms04-ghTcfGYT8LPuCzpEmjP0_xCYf-Fxu5GwP559pteLeZVmg_fjpL8Q5rfQy5trA';
  constructor() {

  }

  /**
   * Retorna los headers de las peticiones
   */
  getHeaders(): HttpHeaders {
    let headersObj = {};
    if(this.TOKEN) {
      headersObj['Authorization'] = 'Bearer '+this.TOKEN;
    }
    this.headers = new HttpHeaders(headersObj);
    return this.headers;
  }

}
