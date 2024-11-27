import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
    {
        path:"about",
        component:AboutusComponent
    },
    {
        path:"contact",
        component:ContactusComponent
    }
];
