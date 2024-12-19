import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private baseUrl = environment.BASE_URL;
  private port = environment.PORT;
  readonly API_URL = this.baseUrl+':'+this.port+'/SpringMVC/stock';

  constructor(private httpClient: HttpClient) { }

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
