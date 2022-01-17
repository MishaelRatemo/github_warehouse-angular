import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {
   header = {
    headers: new HttpHeaders()
      .set('Authorization',  `Bearer ${environment.token}`)
  }
  

  //  private searchText ='';

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


//  reposData: Array<any>=[];

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
