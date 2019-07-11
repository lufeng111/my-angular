/*
main.ts 是angular应用的起点


*/

// 这个方法是由angular核心模块提供的一个方法enableProdMode，这个方法用来angular开发者模式
import { enableProdMode } from '@angular/core';
// 从angular浏览器模块中导入platformBrowserDynamic 方法，这个方法会告诉angular使用那个模块来启动整个应用
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 导入AppModule
import { AppModule } from './app/app.module';
// 导入环境配置
import { environment } from './environments/environment';

// 判断如果当前是生产环境，就调用enableProdMode方法，关闭angular开发者模式
if (environment.production) {
  enableProdMode();
}
/*
调用bootstrapModule 方法，传入AppModule，作为启动模块来启动应用，使用AppModule作为启动模块后，就会加载AppModule
然后angular会分析AppModule模块需要依赖哪些模块，并加载这些模块，例如AppModule模块中的import声明的模块，然后加载这些模块后，
也会分析import声明的模块这些模块又依赖哪些模块，然后会加载哪些模块，依次类推，直到所有的模块加载完成，
然后angular会在index文件中寻找启动模块AppModule指定的主组件AppComponent所对应的css选择器<app-root>，
找到<app-root>后，angular会用主组件AppComponent指定的模板内容templateUrl: './app.component.html'，去替换掉<app-root>标签，
在这个过程完成之前，页面会展现<app-root>标签中的内容，

*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
