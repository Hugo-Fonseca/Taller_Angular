import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductServiceDestacados, ProductDestacados } from '../../services/product.service'; // ajusta según ruta real
import { ProductServiceSeries, ProductSeries } from '../../services/product.service';
import { ProductServiceAnimes, ProductAnimes } from '../../services/product.service';




@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgForOf, NgIf],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsDestacados: ProductDestacados[] = []; //Productos de Destacados
  productsSeries: ProductSeries[] = []; //Productos de Series
  productsAnimes: ProductAnimes [] = []; //Productos de Animes
  filteredProductsDestacados: ProductDestacados[] = [];
  filteredProductsSeries: ProductSeries[] = [];
  filteredProductsAnimes: ProductAnimes[] = [];
  // arrayCompleto: any[] = []
  // filteredCompleto: (ProductDestacados | ProductSeries | ProductAnimes)[] = [];
  searchTerm: string = '';

  constructor(
    private productServiceDestacados: ProductServiceDestacados,
    private productServiceSeries: ProductServiceSeries, 
    private productServiceAnimes: ProductServiceAnimes
  ) {}


 

  ngOnInit(): void {


    //Se obtienen los productos del ProductServiceDestacados
      this.productServiceDestacados.getProducts().subscribe(data => {
      this.productsDestacados = data;
      this.filteredProductsDestacados = data;
      // console.log(this.productsDestacados)
    });

     // Se obtienen los productos del ProductServiceSeries
      this.productServiceSeries.getProducts().subscribe(data => {
      this.productsSeries = data;
      this.filteredProductsSeries = data;
      // console.log(this.productsSeries)
    });

     // Se obtienen los productos del ProductServiceAnimes
      this.productServiceAnimes.getProducts().subscribe(data => {
      this.productsAnimes = data;
      this.filteredProductsAnimes = data;
      // console.log(this.productsAnimes)
    });

    // this.arrayCompleto = [...this.productsDestacados,...this.productsSeries,...this.productsAnimes].map(product => product);
    // // this.ArrayCompleto.filter(product => product.name.toLowerCase().includes(term));
    // console.log(this.arrayCompleto);

  }
   




  searchProducts(): void {
    const term = this.searchTerm.toLowerCase();

    this.filteredProductsDestacados = this.productsDestacados.filter(product =>
      product.name.toLowerCase().includes(term)
    );

    this.filteredProductsSeries = this.productsSeries.filter(product =>
    product.name.toLowerCase().includes(term)
    );

    this.filteredProductsAnimes = this.productsAnimes.filter(product =>
    product.name.toLowerCase().includes(term)
    );
    
    // this.filteredCompleto = this.arrayCompleto.filter(product => product.name.includes(term));
    // // console.log("1",this.filteredProductsSeries)
    // console.log("2",this.filteredCompleto)
    // console.log(term);

  }


   addToCart(product: ProductDestacados): void {
    console.log('Añadido al carrito:', product);
  }
}
