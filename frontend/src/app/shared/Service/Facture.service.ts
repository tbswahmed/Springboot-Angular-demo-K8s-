import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseUrl = environment.BASE_URL;
  private port = environment.PORT;	
  readonly API_URL = this.baseUrl+':'+this.port+'/SpringMVC/facture';

  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture)
  }
}
