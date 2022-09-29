import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const urlBase = "https://restcountries.com/v3.1/all";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor(private http: HttpClient) { }

  getAll():Promise<any>{

    return this.http.get(`${urlBase}`).toPromise();
  }

  create(countrie: any){

    return this.http.post(`${urlBase}`,countrie).toPromise();
  }

}
