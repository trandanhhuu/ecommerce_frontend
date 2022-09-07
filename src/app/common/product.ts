import {Category} from "./category";
import {Brand} from "./brand";

export class Product {
  id: number | any
  imageUrl: string | any
  productName: string | any;
  price: number | any;
  sex: string | any
  color: string | any
  quantity: number | any
  description: string | any
  category: Category[] | any
  brand: Brand[] | any;
}
