import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IUser } from './IUser';

@Component({
  selector: 'app-http-implementation',
  standalone: true,
  imports: [],
  templateUrl: './http-implementation.component.html',
  styleUrl: './http-implementation.component.css'
})
export class HttpImplementationComponent {
  
  userList: IUser [] = [];
  http = inject(HttpClient);
  loader: boolean = false;

  getAllUser() {
    this.loader = true;
    this.userList = [];
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      setTimeout(() => {
        this.loader = false;
        this.userList = result;
      }, 1000);
      
    })
  }  
}
