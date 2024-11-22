import { Component } from '@angular/core';

@Component({
  selector: 'app-viewinner',
  standalone: true,
  imports: [],
  templateUrl: './viewinner.component.html',
  styleUrl: './viewinner.component.css'
})
export class ViewinnerComponent {
  viewData="This is from child element";
}
