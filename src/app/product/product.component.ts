import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  /*
    第二步： 在ProductComponent 控制器里声明一个数组，来存储页面上将要展示的商品的信息的数据
            products 是一个数组
  */

  private products: Array<Product>;

  constructor() { }
/*
第三步：在 ngOnInit中初始化 这个数组

*/
  ngOnInit() {
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


