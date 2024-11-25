import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstcomComponent } from './firstcom/firstcom.component';
import { SenderComponent } from './sender/sender.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { ParentcontentComponent } from './parentcontent/parentcontent.component';
import { ChildcontentComponent } from './childcontent/childcontent.component';
import { BackgroundDirective } from '../Directives/background.directive';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstcomComponent,SenderComponent,ViewchildComponent,ParentcontentComponent,ChildcontentComponent,BackgroundDirective,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'santAnglrcls';
}
