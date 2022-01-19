import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  
  constructor(public githubUserService: GithubUsersService, private route: ActivatedRoute,private router:Router) {

    
   }

  // ngOnInit(): void {
  //   if (this.searchText = this.route.snapshot.paramMap.get('query') !== null) {
  //     this.searchText = this.route.snapshot.paramMap.get('query');
  //     this.githubService.getSearchResults('MishaelRatemo').then(console.log).catch(console.error);
  //   }
  // }
  ngOnInit(): void {
    if (this.searchText = this.route.snapshot.paramMap.get('query') !== null) {
      this.searchText = this.route.snapshot.paramMap.get('query');
      this.githubUserService.getSearchResults(this.searchText).then((response:any)=>{
        this.results = response;
        console.log(this.results)
      }).catch(console.error);
    }

    // Repositories
    if (this.searchText = this.route.snapshot.paramMap.get('query') !== null) {
      this.searchText = this.route.snapshot.paramMap.get('query');
      this.githubUserService.getUserRepos(this.searchText).then((response:any)=>{
        this.repos = response;
        console.log(this.repos)
      }).catch(console.error);
    }
  }
  searchText: any = '';
  results:any;
  repos: any;


  showUserDetails(userId:number){
    this.router.navigate(['/userdetails',userId]);
  }

}
