import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/load.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private http:HttpClient, private service: LoadService) { }

  images: any[any] = [];
  noLoad: any = true;
  errorsLoad: any[any] = [];
  loads: any[] = [];

  errorHandle(e: any, i: number): void{console.log(e,'errorHandle');
  this.errorsLoad.push(i);
  }

  loadHandle(e: any, i: number): void{console.log(e,'loadHandle'); 
    this.loads.push(i);
    if(this.loads.includes(1)&&this.loads.includes(2)){this.service.setLoad()}
  }

  startLoadHandle(e: any): void{console.log(e,'startLoadHandle');}
  loadeddataHandle(e: any): void{console.log(e,'loadeddataHandle');}
  loadedmetadataHandle(e: any): void{console.log(e,'loadedmetadataHandle');}

  ngOnInit(): void {
    this.http.get('').subscribe((v: any)=>{this.images = v; console.log(v,'mm');
  });
  }

}
