import { Component, OnInit } from '@angular/core';
import {Product} from "../../common/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private  productService: ProductService,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.listProducts()
  }

  private listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data.content;
        console.log(data)
      }
    )
  }
}
