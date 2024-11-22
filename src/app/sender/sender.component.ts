import { Component } from '@angular/core';
import { RecieverComponent } from '../reciever/reciever.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sender',
  standalone: true,
  imports: [RecieverComponent,CommonModule],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.css'
})
export class SenderComponent {
  
   testing="this is test for inp decorators";
   finlval:any;
}
