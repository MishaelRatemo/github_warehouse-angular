import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
   userId:any;
   uDetails: any
   username:any
  constructor( public githubService: GithubUsersService, protected route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.githubService.getUserDetails(this.username,this.userId).then( (res:any)=>{
      this.uDetails = res;
      console.log(res)
    }).catch(console.error)

  }

}
