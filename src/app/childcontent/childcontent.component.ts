import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childcontent',
  standalone: true,
  imports: [],
  templateUrl: './childcontent.component.html',
  styleUrl: './childcontent.component.css'
})
export class ChildcontentComponent {
@Input() ross:any;
ngOnInit(){
  this.ross="taylor";
}

}
