import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor( public githubService: GithubUsersService) { }

  ngOnInit(): void {
  }

}
