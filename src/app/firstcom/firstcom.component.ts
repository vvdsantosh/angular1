import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-firstcom',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,MatInputModule,MatFormFieldModule,FormsModule,CommonModule,MatTableModule],
  templateUrl: './firstcom.component.html',
  styleUrl: './firstcom.component.css'
})
export class FirstcomComponent {
  name23="santosh";
  age:any=33;
  favfood="dosa";
  disable=false;
  santosh(){
    this.name23="sravanthiA";
  };
  buses=['garuda','vishnu','orange','Jagan'];
  passengers=[
    {name:"sravan",age:33},
    {name:"santosh",age:26},
    {name:"jana",age:55}

  ]
}
