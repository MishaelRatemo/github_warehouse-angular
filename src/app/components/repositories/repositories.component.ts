import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositoryName:any
  reposResults: any;

  constructor( public githubService:GithubUsersService, protected route: ActivatedRoute, protected router:Router) { }

  ngOnInit(): void {
     if (this.repositoryName = this.route.snapshot.paramMap.get('query') !== null || ''){
       this.repositoryName = this.route.snapshot.paramMap.get('query');
       this.githubService.getReposResult(this.repositoryName).then((res:any)=>{
         this.reposResults = res.items;
         console.log(this.reposResults)
       }).catch(console.error);
     }
  }

}
