import { Component } from '@angular/core';
import { ViewinnerComponent } from '../viewinner/viewinner.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ViewinnerComponent,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,FormsModule ],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {
 // @ViewChild 
 curntVal="";
 favfood2(val:any){
  this.curntVal=val;
 }
}
