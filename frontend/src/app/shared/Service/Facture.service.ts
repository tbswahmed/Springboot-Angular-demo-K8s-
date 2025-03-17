import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from 'src/app/shared/Service/Environment.service';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private API_URL: string;

  constructor(
    private httpClient: HttpClient,
    private envService: EnvironmentService
  ) {
    // Construct the API URL using environment variables
    this.API_URL = `${this.envService.baseUrl}/SpringMVC/facture`;
  }

  getAllFactures() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-factures`);
  }

  addFacture(facture: any) {
    return this.httpClient.post(`${this.API_URL}/add-facture`, facture);
  }
}