import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { LoadService } from './load.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loadView = false;
  startOp = false;

  constructor(private service: LoadService){}

  


  ngOnInit(): void{
    this.service.subject.subscribe(v=> {
      this.startOp = true;
      setTimeout(() => {
        this.loadView = v||false;
      }, 1000);

    })
  }

}
