import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public githubUserService:GithubUsersService , private router:Router) { }

   ngOnInit(): void {
  }

  searchText ="";

  search(){
    this.router.navigate(['/search-results', this.searchText]);
    this.githubUserService.getSearchResults(this.searchText).then((response)=>{
      console.log(response);
    }).catch(errors=>{
      console.error(errors)
    })
  }

}
