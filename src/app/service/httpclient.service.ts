import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Role{
  constructor(
    public id: string,
    public name: string,
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getRoles(){
    console.log("test call");
    return this.httpClient.get<Role[]>('http://localhost:8080/role/all')
  }


}
