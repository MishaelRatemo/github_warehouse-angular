import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {


  logo:any = 'assets/githublogo.png';

  constructor() { }

  ngOnInit(): void {
  }

}
