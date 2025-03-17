import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { EnvironmentService } from 'src/app/shared/Service/Environment.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  readonly API_URL :string;

  constructor(private httpClient: HttpClient, private envService: EnvironmentService) {
    // Remove the port concatenation here
    this.API_URL = `${this.envService.baseUrl}/SpringMVC/stock`;
  }

  getAllStocks() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-stocks`)
  }
  addStock(stock : any) {
    return this.httpClient.post(`${this.API_URL}/add-stock`, stock)
  }
  editStock(stock : any){
    return this.httpClient.put(`${this.API_URL}/modify-stock`, stock)
  }
  deleteStock(idStock : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-stock/${idStock}`)
  }
}