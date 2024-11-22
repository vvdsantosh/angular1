import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SenderComponent } from '../sender/sender.component';

@Component({
  selector: 'app-reciever',
  standalone: true,
  imports: [CommonModule,SenderComponent],
  templateUrl: './reciever.component.html',
  styleUrl: './reciever.component.css'
})
export class RecieverComponent {
  @Input() postmain:any;
  @Output() outData=new EventEmitter;
  finldata=["san","rajesh","uma"];
  sant(val2:any){
    this.outData.emit(this.finldata);
  }

}
