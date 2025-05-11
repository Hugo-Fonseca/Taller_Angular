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
      name: 'Matrix',
      price: 12000,
      category: 'Movies',
      imageUrl: 'assets/matrix.jpg'
    },
    {
      id: 2,
      name: 'Doctor House',
      price: 5000,
      category: 'Series',
      imageUrl: 'assets/doctor-house.jpg'
    },
    {
      id: 3,
      name: 'Los Simpsons (Temporada 1 - 15)',
      price: 30000,
      category: 'Cartoons',
      imageUrl: 'assets/los-simpsons.jpg'
    }
  ]);

  getProducts() {
    return this.products.asObservable();
  }
}
