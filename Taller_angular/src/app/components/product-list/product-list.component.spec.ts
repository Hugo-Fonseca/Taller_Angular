import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  searchText = '';
  products = [
    {
      name: 'Película 1',
      description: 'Descripción corta de la película.',
      image: 'assets/img/movie1.jpg',
      date: '2025-05-10'
    },
    // Más productos...
  ];

  filteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
