import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ReglementService {
  private baseUrl = environment.BASE_URL;
  private port = environment.PORT;
  readonly API_URL = this.baseUrl+':'+this.port+'/SpringMVC/reglement';

  constructor(private httpClient: HttpClient) {
  }


  addReglement(reglement: any) {
    return this.httpClient.post(`${this.API_URL}/add-reglement`, reglement)
  }

  getAllReglements() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-reglements`)
  }


}
