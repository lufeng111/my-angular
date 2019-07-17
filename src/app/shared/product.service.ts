import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // s声明一个本地的数组
  private products: Product[] = [
      new Product(1,'第一个商品',1.99,3.5,"这是第一个商品，是我自己创建的",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.99,2.5,"这是第二个商品，是我自己创建的",["图书"]),
      new Product(3,"第三个商品",3.99,4.5,"这是第三个商品，是我自己创建的",["电子产品","硬件设备"]),
      new Product(4,"第四个商品",4.99,1.5,"这是第四个商品，是我自己创建的",["化妆品"]),
      new Product(5,"第五个商品",5.99,2.5,"这是第五个商品，是我自己创建的",["电子产品","服装"]),
  ];

  constructor() { }

  getProducts() {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find((product) => product.id === id);
  }
}
// Product 的类型
export class Product {
  constructor(
    // number类型的id
    public id: number,
    // string类型的title
    public title: string,
    // number类型的price
    public price: number,
    // number类型的评分
    public rating: number,
    // string类型的商品描述
    public desc: string,
    // categories 商品的类别，是一个数组，string类型的数组
    public categories: Array<string>
  ) { }
}
// Comment 的类型
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string,
  ) {}
}
