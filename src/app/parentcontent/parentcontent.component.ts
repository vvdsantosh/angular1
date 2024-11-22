import { Component, ContentChild } from '@angular/core';
import { ChildcontentComponent } from '../childcontent/childcontent.component';

@Component({
  selector: 'app-parentcontent',
  standalone: true,
  imports: [ChildcontentComponent],
  templateUrl: './parentcontent.component.html',
  styleUrl: './parentcontent.component.css'
})
export class ParentcontentComponent {
  maindata="";
@ContentChild(ChildcontentComponent) chdata:any;

ngAfterContentInit(){
  
   this.maindata= this.chdata.ross;
}
}
