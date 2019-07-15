import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prodect-detail',
  templateUrl: './prodect-detail.component.html',
  styleUrls: ['./prodect-detail.component.scss']
})
export class ProdectDetailComponent implements OnInit {
  // 图片是写死的，只要productTitle是传进来的，是string类型
  productTitle: string;
  // 要接收路由传进来的参数，需要在构造函数里注入ActivatedRoute,就是保存当前路由信息的对象
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 会从列表页导航到商品详情页，但是两个商品详情之间不会相互导航，所以不用订阅，只用参数快照
    // console.log(this.routeInfo.snapshot,66666);
    // 注意不能有空格' prodTitle'
    this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
  }

}
