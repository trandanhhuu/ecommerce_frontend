import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";
import {AppResponse} from "../common/app-response";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  baseUrl1 = 'http://localhost:8081/api/product/getallProducts'
  private  baseUrl2 = 'http://localhost:8081/api/product/getProduct'
  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<AppResponse<Product[]>>{
    return this.httpClient.get<AppResponse<Product[]>>(this.baseUrl1)
  }
  getProduct(theProductId: number): Observable<AppResponse<Product[]>>{
      const productUrl = `${this.baseUrl2}/${theProductId}`
      return this.httpClient.get<AppResponse<Product[]>>(productUrl)
  }
}


