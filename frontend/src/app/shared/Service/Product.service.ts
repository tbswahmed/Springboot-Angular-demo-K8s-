import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from 'src/app/shared/Service/Environment.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly API_URL :string;

  constructor(private httpClient: HttpClient, private envService: EnvironmentService) {
    this.API_URL = `${this.envService.baseUrl}/SpringMVC/produit`;
   }

  getAllProducts() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-produits`)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/add-produit`, product)
  }
  editProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/modify-produit`, product)
  }
  deleteProduct(idProduct : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-produit/${idProduct}`)
  }

}
