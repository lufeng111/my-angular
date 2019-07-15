/*
app.module.ts模块
  和app.component.ts类似，一个模块也是一个带有装饰器@NgModule的typescript类AppModule 的文件

*/

/*
  1：这个模块用import引入这个模块需要的东西
  2：@NgModule装饰器 声明一个模块，在这个模块声明中，用
  declarations属性： 声明了这个模块中有什么东西，现在这个模块中只有一个组件AppComponent，
                    注意：在declarations 元数据中只能声明 组件，管道，指令
  imports属性：声明了要让应用正常运转，还需要哪些模块，这里放的是AppModule 所依赖的其他模块

*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProdectDetailComponent } from './prodect-detail/prodect-detail.component';
import { Route } from '@angular/compiler/src/core';
import {Routes, RouterModule} from '@angular/router';

// 所有路由的信息都是在模块层配置的，组件本身是不知道路由信息的
const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:prodTitle', component: ProdectDetailComponent},
];
// 注意路由声明完配置完路由，要在imports把路由配置注入到模块中

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    SearchComponent,
    HomeComponent,
    ProdectDetailComponent
  ],
  // 这两个是angular框架提供的模块，
  imports: [
    // 这是开发web应用的必选依赖，这是浏览器的一个模块，因为应用最终要运行在浏览器中
    BrowserModule,
    // 生成AppRoutingModule模块中的所有路由配置导入主模块中
    AppRoutingModule,
    // 把路由配置注入到主模块中，因为AppModule 是根模块，所以用到forRoot，如果是子模块，就用forChild()来注入
    RouterModule.forRoot(routeConfig)
  ],
  // providers 默认情况下的空的，用来声明模块中提供了什么服务，只能声明服务
  providers: [],
  // bootstrap 声明了模块主组件是谁
  bootstrap: [AppComponent]
})
export class AppModule { }
