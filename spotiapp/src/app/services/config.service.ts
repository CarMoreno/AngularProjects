import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private headers: HttpHeaders;
  private TOKEN = 'QClUS8OMu6MXxP2CgzxpmiGrLR_cS9Qs87RfoyWQOgSZFMBy_8spP713G87CQb4uTZFxbiD_9OHjEY04x8';
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
