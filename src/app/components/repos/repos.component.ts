import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repoName: any;

  constructor(public githubServise: GithubUsersService, private router:Router) { }

  searchRepo(){
    this.router.navigate(['/repositories', this.repoName]);
    this.githubServise.getReposResult(this.repoName).then((res)=>{
      console.log(res);
    }).catch(error=>{
      console.error(error)
    })
  }

  ngOnInit(): void {
    
  }

}
