import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  subject = new Subject<any>()

  constructor() { }

  setLoad(){
    this.subject.next(true) 
  }
}
