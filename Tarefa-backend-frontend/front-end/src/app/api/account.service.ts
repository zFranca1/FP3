import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3333';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  public getAccount() {
    return this.http.get(`${baseUrl}/account`).toPromise();
  }

  public addAccount(account: any) {
    return this.http.post(`${baseUrl}/account`, account).toPromise();
  }

  public removeAccount(id: any) {
    return this.http.delete(`${baseUrl}/account/` + id).toPromise();
  }
}
