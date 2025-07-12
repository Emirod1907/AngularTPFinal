import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface, ProductService } from '../services/product.service';
import { Navbar } from '../navbar/navbar';


@Component({
  selector: 'app-detalle',
  imports: [Navbar],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css'
})
export class Detalle {
  product_id: string ='';
  private productService = inject(ProductService)
  product_selected : ProductInterface | undefined = undefined
  constructor(private route: ActivatedRoute){

  }
  ngOnInit(){
    this.route.paramMap.subscribe(
      (params) =>{
        this.product_id = params.get('product_id')||''
        const product_detail_observable = this.productService.getProductById(Number(this.product_id))
        product_detail_observable.subscribe(
        {
          next: (product_detail) =>{
            this.product_selected = product_detail
          },
          error:()=>{
            
          }
        }
        )
      }
    )
  }


}
