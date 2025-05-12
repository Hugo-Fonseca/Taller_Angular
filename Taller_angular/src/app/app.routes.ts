import { Routes } from '@angular/router';


import { ProductListComponent } from "./components/product-list/product-list.component";
import { InformacionComponent } from './components/informacion/informacion.component';

export const routes: Routes = [
    {path:'', component:ProductListComponent},
    {path:'informacion', component:InformacionComponent}
    
    
];

