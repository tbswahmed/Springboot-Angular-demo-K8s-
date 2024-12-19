import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {
  private baseUrl = environment.BASE_URL;
  private port = environment.PORT;
  readonly API_URL = this.baseUrl+':'+this.port+'/SpringMVC/secteurActivite';

  constructor(private httpClient: HttpClient) { }

  getAllSecteurActivites() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-secteurActivite`)
  }
  addSecteurActivite(secteurActivite : any) {
    return this.httpClient.post(`${this.API_URL}/add-secteurActivite`, secteurActivite)
  }
  editSecteurActivite(secteurActivite : any){
    return this.httpClient.put(`${this.API_URL}/modify-secteurActivite`, secteurActivite)
  }
  deleteSecteurActivite(idSecteurActivite : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-secteurActivite/${idSecteurActivite}`)
  }
}
