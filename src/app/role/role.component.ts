import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
   roles:string[] = [];

    constructor(
        private httpClientService:HttpClientService
      ) { }

  ngOnInit() {
      this.httpClientService.getRoles().subscribe(
       response =>this.handleSuccessfulResponse(response),
      );
  }

  handleSuccessfulResponse(response: any){
    this.roles=response;
  }
}
