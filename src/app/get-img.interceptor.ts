import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, filter, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

interface env {
  production: boolean,
  mock?: boolean,
  API_KEY?: string
}



@Injectable()
export class GetIMGInterceptor implements HttpInterceptor {

  baseURL = 'https://api.nasa.gov/planetary/apod';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let setURL = ()=>{
      if(environment.mock){
        return location.href + 'assets/mockImages.json';
      }
      return environment.API_KEY ? (this.baseURL + '?' + 'api_key=' + environment.API_KEY + '&' + 'count=5') : location.href + 'assets/mockImages.json';

    }

    let req = request.clone({ url: setURL()});

  
    
    return next.handle(req).pipe(

       map((v: any)=>{
        console.log(v.body,'v');
        v.body?.images ? v.body = v.body?.images : v;
        return v;
        })
      );
  }
  
}
 