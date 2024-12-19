import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  private baseUrl = environment.BASE_URL;
  private port = environment.PORT;  
  readonly API_URL = this.baseUrl+':'+this.port+'/SpringMVC/operateur';	

  constructor(private httpClient: HttpClient) { }

  getAllOperateurs() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-operateurs`)
  }
  addOperateur(operateur : any) {
    return this.httpClient.post(`${this.API_URL}/add-operateur`, operateur)
  }
  editOperateur(operateur : any){
    return this.httpClient.put(`${this.API_URL}/modify-operateur`, operateur)
  }
  deleteOperateur(idOperateur : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-operateur/${idOperateur}`)
  }
}
