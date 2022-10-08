import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adm } from '../model/adm';

@Injectable({
  providedIn: 'root'
})
export class AdmService {
  URL = "https://bknd1.herokuapp.com/adm/"
  //URL = "http://localhost:8080/adm/"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Adm[]>{
    return this.httpClient.get<Adm[]>(this.URL + "lista");
  }

  public details(id: number): Observable<Adm>{
    return this.httpClient.get<Adm>(this.URL + `detail/${id}`);
  }

  public update(id: number, adm: Adm): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, adm);
  }
}
