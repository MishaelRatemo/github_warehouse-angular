import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer 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`)
  }
  

  //  private searchText ='';
   private token = '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';

  constructor(private http:HttpClient) { }

  public getSearchResults(searchText:any){
    return new Promise((resolve, reject) =>{
      this.http.get(`https://api.github.com/users/${searchText}`,this.header).subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error);
        }
      );
    })
  }

  public getReposResult(searchText:any){
    return new Promise((resolve, reject) =>{
      this.http.get(`https://api.github.com/search/repositories?q=${searchText}`,this.header).subscribe(
        (response)=>{
          resolve(response);
        },
        (error)=>{
          reject(error);
        }
      );
    })
  }


  public getUserDetails(username:any,id:any){
    return new Promise((resolve, reject) =>{
      this.http.get(`https://api.github.com/users/${username}/${id}`).subscribe(
        (res)=> {
          resolve(res);
        },
        (err) =>{
          reject(err);
        }
      );
    })
  }



}
