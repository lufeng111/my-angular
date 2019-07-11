/*从angular 核心模块里引入Component装饰器 */
import { Component } from '@angular/core';
/*
用这个装饰器@Component定义了一个组件，以及组件的元数据，
@Component(）组件元数据装饰器，@符叫做装饰器
*/
/*
组件元数据详解
  元数据告诉angular如何把ts类AppComponent处理成组件？
  元数据介绍：
  selector: 是css选择器, 这个属性的意思是这个组件可以通过index.html文件<app-root></app-root> 这个html标签来调用，
  意思是<app-root></app-root>在这里展示app-root组件的内容，app-root组件的内容就是templateUrl
  templateUrl：指定了一个html文件app.component.html的作为组件的模板，最终在index.html文件的<app-root>标签的位置展示app.component.html模板的内容
  模板是组件的必备属性，定义了用户最终看到的布局和内容，
  styleUrls：指向了一组css文件，这个css文件中编写组件模板需要用到的css样式

 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/*
整个下面的部分AppComponent是一个标准的typescript类，和angular没有暂时没有关系，直到告诉angular框架 AppComponent 是组件，
如何告诉angular框架 AppComponent 是一个组件？
  这就需要把元数据附加到这个类上，
如何把元数据附加到这个ts类上？
  这就需要用到装饰器@compnent,@compnent装饰器里包裹一个对象，这个对象的属性如selector就是元数据，就相当于告诉angular把这个ts类转换成angular框架中的一个组件，
*/

/*
整个下面部分ts类，定义了这个组件的控制器controller,控制器是一个对象，只有一个属性title, 控制器是指一个被@Component装饰器装饰的typescript类，
包含所有与模板相关的属性和方法，和页面相关的逻辑大部分都是在这个控制器中的，

 */
export class AppComponent {
  /*
  AppComponent有一个属性title，这个属性的值最终会展示在浏览器的页面中<h1>Welcome to {{ title }}!</h1> ，用双大括号包裹起来
  插值表达式：
  数据绑定：
  angular支持双向数据绑定，双向数据绑定让模板的各个部分和控制器的各个部分相互作用的一个机制，我们在html模板中添加绑定标记，告诉angular如何把两者联系起来
  这种用双大括号括起来的title属性，就是最常见的把组件中的值绑定到模板中的一种常用方法，叫插差值表达式，在浏览器运行时，app.component.ts中title属性的值会替换掉双大括号里面的title
  */
  title = 'my-app';
}
