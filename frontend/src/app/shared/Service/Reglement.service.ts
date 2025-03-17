import {Injectable} from '@angular/core';
import { EnvironmentService } from 'src/app/shared/Service/Environment.service';

import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReglementService {
  readonly API_URL:string;

  constructor(private httpClient: HttpClient, private envService: EnvironmentService) {
    this.API_URL = `${this.envService.baseUrl}/SpringMVC/reglement`;
  }


  addReglement(reglement: any) {
    return this.httpClient.post(`${this.API_URL}/add-reglement`, reglement)
  }

  getAllReglements() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-reglements`)
  }


}
