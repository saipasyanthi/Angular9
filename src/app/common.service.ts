import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }


login(data){
  return this.http.get("http://localhost:8080/health/getlist");
}
Changepassword(data)
{
  console.log(JSON.stringify(data));
}
register(data){
  console.log(JSON.stringify(data));
  return this.http.post("http://localhost:8080/health/createUser",data);
}
}
