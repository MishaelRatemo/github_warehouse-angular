import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(private http:HttpClient) { }

  public getSearchResults(searchUser:any){
    return new Promise((resolve, reject) =>{
      this.http.get('https://api.github.com/users').subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error);
        }
      );
    })
  }
}
