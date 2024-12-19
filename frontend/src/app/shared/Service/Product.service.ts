import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.BASE_URL;
  private port = environment.PORT;
  readonly API_URL = this.baseUrl+':'+this.port+'/SpringMVC/produit';

  constructor(private httpClient: HttpClient) { }
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
