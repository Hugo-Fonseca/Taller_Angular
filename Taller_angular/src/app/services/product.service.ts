import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ProductDestacados {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceDestacados {
  private productsDestacados = new BehaviorSubject<ProductDestacados[]>([
    {
      id: 1,
      name: 'Matrix',
      price: 12000,
      category: 'Movies',
      imageUrl: 'img/Matrix.webp'
    },
    {
      id: 2,
      name: 'Doctor House',
      price: 5000,
      category: 'Series',
      imageUrl: 'img/doctorHouse.jpg'
    },
    {
      id: 3,
      name: 'Los Simpsons (Temporada 1 - 15)',
      price: 30000,
      category: 'Cartoons',
      imageUrl: 'img/Simpson.jpg'
    }
  ]);

  getProducts() {
    return this.productsDestacados.asObservable();
  }
}

export interface ProductSeries {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductServiceSeries {
  private productsSeries = new BehaviorSubject<ProductSeries[]>([
    {
      id: 1,
      name: 'Dark',
      price: 10000,
      category: 'Serie',
      imageUrl: 'img/Dark.jpg'
    },
    {
      id: 2,
      name: 'Peaky Blinders',
      price: 15000,
      category: 'Serie',
      imageUrl: 'img/PeakyBlinders.jpg'
    },
    {
      id: 3,
      name: '13 Reason Why',
      price: 10000,
      category: 'Serie',
      imageUrl: 'img/13ReasonsWhy.jpg'
    }
  ]);

  getProducts() {
    return this.productsSeries.asObservable();
  }
}


export interface ProductAnimes {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductServiceAnimes {
  private productsAnimes = new BehaviorSubject<ProductAnimes[]>([
    {
      id: 1,
      name: 'Solo Leveling',
      price: 10000,
      category: 'Serie',
      imageUrl: 'img/SoloLeveling.webp'
    },
    {
      id: 2,
      name: 'One Punch Man',
      price: 15000,
      category: 'Serie',
      imageUrl: 'img/OnePunchMan.jpg'
    },
    {
      id: 3,
      name: 'Jujutsu kaisen',
      price: 10000,
      category: 'Serie',
      imageUrl: 'img/JujutsuKaisen.jpg'
    }
  ]);

  getProducts() {
    return this.productsAnimes.asObservable();
  }

}

