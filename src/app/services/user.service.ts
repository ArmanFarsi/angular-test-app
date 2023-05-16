import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { baseAddress } from '../constants/baseAddress';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(body: User) {
    return this.http.post(`${baseAddress}/users`, body);
  }

  getUsers() {
    return this.http.get(`${baseAddress}/users`);
  }
}
