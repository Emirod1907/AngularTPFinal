import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface ProductInterface {
  id: number,
  title: string,
  price: number,
  discount: number,
  final_price: number,
  img: string,
  installments: number,
  is_same_price_with_installments: boolean,
  free_shipping: boolean,
  free_shipping_day: string
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsURL = '/productos.json'
  constructor(private http: HttpClient) {}
  getProducts (): Observable<ProductInterface[] | null >{
    return this.http.get<ProductInterface[]>(this.productsURL)
  }
  getProductById(product_id: number): Observable<ProductInterface | undefined>{
    return this.http.get<ProductInterface[]> (this.productsURL).pipe(
      map(products => products.find(product => product.id === product_id))
    )
  }
}
