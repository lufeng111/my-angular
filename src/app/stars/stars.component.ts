
/*
  第五个问题：如何将product组件中的星级评分，传递带星级组件中？
  这就要用到组件的另一个概念：输入属性
  首先在星级组件中声名一个number类型的rating属性，初始值为零

 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  /*
    让product组件把星级传递过来，需要在这个组件上加上一个@Input装饰器,这个装饰器的意思是，
    星级评价StarsComponent组件rating属性的数据应该由父组件传递过来,
    如何传递？
    在product组件中引用<app-stars [rating]="product.rating"></app-stars>即可把product组件中的rating值传递过来

    第六个问题：如何根据商品的星级来决定星星是空心的还是实心的?
    注意：原来stars的布尔值都是写死的，现在设置stars为空数组，
    循环一下i变量，判断i是否大于this.rating（是product传递过来的评分）如果是就是true,不是就是false


  */
  @Input()
  private rating:number = 0;
  // 在控制器声明一个stars数组，是booleanle类型的数组

  private stars:boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i=1;i<5; i++) {
      this.stars.push(i>this.rating)
    }
    // 初始化一下数组
    // this.stars = [true,true,true,true,true]
  }

}
