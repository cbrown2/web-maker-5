import { Injectable } from '@angular/core';
import { User } from '../models/user.model.client';
import {Http, Response, RequestOptions} from "@angular/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import { SharedService } from "./shared.service.client";

// injecting service into module

@Injectable()

export class UserService {

  constructor(private http: Http,
    private sharedService: SharedService) {}

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  login(username: string, password: string){
    this.options.withCredentials = true;
    const url = this.baseUrl + "/api/login";
    const user = {
     username: username,
     password: password

  };
  return this.http.post(url, user, this.options).pipe(
    map((res: Response) => {
      return res.json();
    })
  )
  };
  
  createUser(user: User) {
    const url = this.baseUrl + "/api/user";
    return this.http.post(url, user).pipe(map((res: Response) => {
      return res.json();
      })
    );
    
  }
   

  findUserById(userId: string) {
    const url = this.baseUrl + "/api/user/" +
    userId;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
      })

    );
  }
       
  findUserByUsername(username: string) {
    const url = this.baseUrl + "/api/user?username=" + username;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
      })

    );

  }
       
 
  findUserByCredentials(username: string, password: string) {
    const url = this.baseUrl + "/api/user?username=" + username + "&password=" + password;
    return this.http.get(url).pipe(map((res: Response) => {
      return res.json();
      })

    );

  }  


   updateUser(user: User ) {
    const url = this.baseUrl + "/api/user"
    return this.http.put(url, user).pipe(map((res: Response) => {
      return res.json();
      })

    );
    }}