import { Component, inject } from '@angular/core';
import { ProductInterface, ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: ProductInterface[] = []
  loading: boolean = true
  private productsService = inject(ProductService)
  ngOnInit(){
    const product_observable = this.productsService.getProducts()
    product_observable.subscribe(
      {
        next:(products)=>{
          this.products = products ||[]
          this.loading = false
        },
        error:(error)=>{
          console.log(error)
        }
      }
    )
  }
}
