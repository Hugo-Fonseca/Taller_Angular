import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, HeaderComponent,InformacionComponent, FooterComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {}
