import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  /*
    第二步： 在ProductComponent 控制器里声明一个数组，来存储页面上将要展示的商品的信息的数据
            products 是一个数组
  */
// products是一个数组，每一个数组的结构和Product类的数据结构是一一对应的
  private products: Array<Product>;

  constructor() { }
/*
第三步：在 ngOnInit中初始化 这个数组products

      ngOnInit(){}方法是组件生命周期中的一个钩子函数，会在组件ProductComponent被实例化以后调用一次
      总之：组件实例化以后，会调用一次这个钩子，用来初始化组件中的数据


*/
  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",1.99,3.5,"这是第一个商品，是我自己创建的",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",2.99,2.5,"这是第二个商品，是我自己创建的",["图书"]),
      new Product(3,"第三个商品",3.99,4.5,"这是第三个商品，是我自己创建的",["电子产品","硬件设备"]),
      new Product(4,"第四个商品",4.99,1.5,"这是第四个商品，是我自己创建的",["化妆品"]),
      new Product(5,"第五个商品",5.99,2.5,"这是第五个商品，是我自己创建的",["电子产品","服装"]),
    ]
  }

}


/**
 * 第一步： 定义一个Product类，因为使用typescript ，所以需要一个对象Product封装产品信息
 * 1: 定义一个Product对象，他有一个构造函数constructor
 * 2： 在构造函数constructor中声名产品所拥有的属性
 *
 * */
//  整个Product类描述产品所包含的信息
export class Product {
  constructor(
    // number类型的id
    public id:number,
    // string类型的title
    public title:string,
    // number类型的price
    public price:number,
    // number类型的评分
    public rating:number,
    // string类型的商品描述
    public desc:string,
    // categories 商品的类别，是一个数组，string类型的数组
    public categories:Array<string>
  ){}


}


