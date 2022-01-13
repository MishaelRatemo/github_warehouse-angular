import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  
  constructor(public githubUserService: GithubUsersService, private route: ActivatedRoute,) { }

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
  }
  searchText: any = '';
  results:any;

}
