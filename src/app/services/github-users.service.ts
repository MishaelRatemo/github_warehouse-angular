import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  //  private searchText ='';

  constructor(private http:HttpClient) { }

  public getSearchResults(searchText:any){
    return new Promise((resolve, reject) =>{
      this.http.get(`https://api.github.com/users/${searchText}`).subscribe(
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
