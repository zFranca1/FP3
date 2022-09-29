import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = "https://reqres.in/api";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(page: number): Promise<any> {
    // return this.http.get('https://reqres.in/api/users?page=' + page).toPromise();
    
    //Template string
    return this.http
    .get(`${urlBase}/users?page=${page}`)
    .toPromise();
  }

  create(user: any) {
    return this.http
    .post(`${urlBase}/users`, user)
    .toPromise();
  }

  delete(id: number) {
    return this.http
    // .delete(urlBase + '/users' + id)
    .delete(`${urlBase}/users${id}`)
    .toPromise();
  }
}
