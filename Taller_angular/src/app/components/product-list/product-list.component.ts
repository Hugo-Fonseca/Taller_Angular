import { Component, OnInit } from '@angular/core';
import { CommonModule, NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../../services/product.service'; // ajusta según ruta real

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgForOf, NgIf],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  searchProducts(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }

  addToCart(product: Product): void {
    console.log('Añadido al carrito:', product);
  }
}
