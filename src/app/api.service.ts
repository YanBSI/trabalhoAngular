import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com/users';  // Defina a URL da API

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);  // Usando 'this.apiUrl' para obter usuários
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);  // Usando 'this.apiUrl' para adicionar um usuário
  }
}

