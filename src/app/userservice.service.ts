import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

   private userUrl: string = "";

  constructor(private http: HttpClient) {
    this.userUrl='http://localhost:4200/users';
   }
 public getAll():Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
  }
  addNewUser( user: User){
    return this.http.post<User[]>(this.userUrl,user);
  }
}
