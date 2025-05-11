import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: 'Super Mario',
      price: 1000,
      category: 'Games',
      imageUrl: 'assets/laptop.jpg'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 700,
      category: 'Electronics',
      imageUrl: 'assets/smartphone.jpg'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 150,
      category: 'Accessories',
      imageUrl: 'assets/headphones.jpg'
    }
  ]);

  getProducts() {
    return this.products.asObservable();
  }
}
