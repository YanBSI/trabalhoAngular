import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';  // Certifique-se de que ApiService está importado corretamente
import { User } from '../user.model';
import { Observable } from 'rxjs';  // A importação do Observable
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];  // Lista de usuários

  constructor(private apiService: ApiService) {}  // Injeção do ApiService

   ngOnInit(): void {
    // this.apiService.getUsers().subscribe((data: User[]) => {
    //   this.users = data;
    // });
  }
  fetchUsers(){
    this.apiService.getUsers
  }
  // addUser(user: User): void {
  //   this.apiService.addUser(user).subscribe(newUser => {
  //     this.users.push(newUser);
  //   });
  // }
}
