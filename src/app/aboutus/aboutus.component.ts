import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactusComponent } from '../contactus/contactus.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements OnInit{
private _router=inject(Router);
keyArray:any = [];
 school=[{
    subject2:"PHP",
    Teacher:"Usha"
  },{
    subject2:"Angular",
    Teacher:"Satish"
  },{
    subject2:"React",
    Teacher:"John"
  }
]
rowclick(stud:any){
  this._router.navigate(["/contact"]);
}

ngOnInit():void {
  this.keyArray = Object.keys(this.school[0]);
  console.log(this.keyArray);
  
}
}
