import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/shared/Service/Environment.service';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  private API_URL: string;

  constructor(private httpClient: HttpClient, private envService: EnvironmentService) { 
    this.API_URL = `${this.envService.baseUrl}:${this.envService.port}/SpringMVC/operateur`;

  }

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
