import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor( public githubService:GithubUsersService) { }

  ngOnInit(): void {
    this.githubService.getSearchResults('MishaelRatemo').then(
      console.log
    ).catch(
      console.error
    );
  }

}
