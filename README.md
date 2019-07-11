# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<!-- 
项目目录结构详解
  1： .editorconfig 是vscode 的配置文件
  2： .gitignore git的配置文件
  3： e2e 是端到端的测试目录 包含基本的测试桩，是用来作自动化测试的
  4： angular.json 是angular命令行工具的一个配置文件，后期可能会去修改这个文件，因为后期可      能 会引入 jquery 和 bootstrap 等第三方的插件
  5： karma.conf.js 是单元测试的集成器，这个是配置文件，用来执行自动化测试的
  6： package.json  标准的npm工具的配置文件，列明了这个应用所使用的第三方依赖包，在安装环     境时会有 install package提示信息，实际上就是在根据package文件内容去下载第三方  依     赖包，放到 node_modules文件下，node_modules目录下放的都是第三方依赖包
  7： README.md 包含angular命令行工具生成项目的一个标准说明，比如：怎么去构建，怎么去测       试，怎么去运行，
  8： tsconfig.app.json 
  9： tsconfig.json 这个是typescript 编译器的一个配置，按照angular项目的标准都已经配好     了，
  10： tsconfig.spec.json
  11： tslint.json 是tslint的一个配置文件，他是用来定义 typescript 代码质量检查的一些       规则，不需要改动

 -->


 <!-- 
src 目录下的结构
  7： app 包含应用的组件和模块
  8： assets 用来存静态资源的，比如说图片
  9： environments 环境配置，angular 是支持多环境开发的，比如说开发环境，测试环境，生产      环境公用一套代码，然后把这些环境不同的配置比如：后台服务的地址，在生产环境和开发环境是     不一样的，写在不同环境的配置文件里面，然后在编译的时候会把相应环境的配置文件编译到代码     里面来
  10： favicon.ico 图标文件
  11： index.html 是整个应用的根html , 启动系统第一次访问的文件，在body里有一个标签          <app-root></app-root>
  12： main.ts 整个web应用的入口点，脚本执行的入口点，angular 通过这个文件来启动整个项目
  13： polyfills.ts 主要是导入一些必要的库，使angular可以正常运行在一些老版本的浏览器中，
  14： styles.scss 这个放整个应用的一些全局的样式，
  15： test.ts 和karma.conf.js一样都是用来作自动化测试的，
 
  -->

  <!-- 
  app
    1: app.component.ts 组件，
    2: app.module.ts 模块
    3: 
    4: 
  
   -->

   <!-- 
  组件必备元素：@component装饰器，controller 控制器，template 模板
    @Component() 是组件元数据装饰器，用来告知angular框架如何处理一个 typescript 类，@Component包含多个属性，
    这些属性就叫做元数据，angular会根据这些元数据的值渲染组件，执行组件的逻辑，

    Template 叫做模板，通过组件自带的模板，定义组件的外观，以html的形势存在，告诉angularr如何渲染组件，
    模板很想html,但是可以在模板中使用，angular 数据绑定语法，来呈现控制器中的数据，

    Controller 控制器，就是一个普通的typescript类，会被@Component装饰器装饰，控制器会包含组件所有的属性和方法，
    绝大多数的页面逻辑就是写在控制器中的，控制器通过数据绑定与模板通讯，模板展现控制器上的数据，控制器处理模板上触发的事件，

    我是feature分支上的代码，哈哈


    
   
    -->
