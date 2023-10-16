import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MailService {

  constructor(private http: HttpClient,  ) { }

 findObject(objectCode : string)  {     
   

    let url = 'https://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/' + objectCode;

    var header = {
      headers: new HttpHeaders().set('content-Type', `application/json`) }

    return this.http.get(url, header).toPromise();
    
  }

  


}
