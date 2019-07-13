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


## 项目目录结构详解
<!-- 
## 项目目录结构详解
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

## src 目录下的结构
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

## app核心内容
  <!-- 
  app
    1: app.component.ts 组件，
    2: app.module.ts 模块
   -->

## 组件必备元素
   <!-- 
  组件必备元素：@component装饰器，controller 控制器，template 模板
    @Component() 是组件元数据装饰器，用来告知angular框架如何处理一个 typescript 类，@Component包含多个属性，
    这些属性就叫做元数据，angular会根据这些元数据的值渲染组件，执行组件的逻辑，

    Template 叫做模板，通过组件自带的模板，定义组件的外观，以html的形势存在，告诉angularr如何渲染组件，
    模板很想html,但是可以在模板中使用，angular 数据绑定语法，来呈现控制器中的数据，

    Controller 控制器，就是一个普通的typescript类，会被@Component装饰器装饰，控制器会包含组件所有的属性和方法，
    绝大多数的页面逻辑就是写在控制器中的，控制器通过数据绑定与模板通讯，模板展现控制器上的数据，控制器处理模板上触发的事件，
    -->

## 组件可选的可注入对象
   <!-- 
  组件可选的可注入对象
    输入属性 @Inputs() ： 接收web传递的数据的，输入属性使父组件可以直接传递数据给子组件
    提供器 providers ： 是用来做依赖注入的
    生命周期钩子 Lifecycle Hooks ： 一个组件从创建到销毁的过程中，有多个钩子可以执行不同情况下的业务逻辑，一个组件创建的时候执行初始化的逻辑
    样式表 styles ： 样式表时可选的，没有样式表只有模板也是可以的
    动画 animations : angular提供一个动画包，来创建与组件相关的动画效果，如淡入淡出等
    输出属性 @Outputs ： 和@Inputs输入属性时相对的，用来定义一些其他组件可能感兴趣的事件，或者用来在组件间传递数据
    -->

  ## 启动angular应用  
   <!-- 
   1： 启动时加载了那个页面
        启动index.html页面 "index": "src/index.html", 
   2： 启动时加载了哪些脚本
        加载main.ts文件， "main": "src/main.ts",
   3： 这些脚本做了什么事
        详解看main.ts
    -->
   
  ## angular如何使第三方类库 jquery 和 bootstrap
  <!-- 
  第一步：将第三方类库安装到本地
    在当前目录下执行 
    npm install jquery --save ，
    npm install bootstrap --save ，
    其中--save意思是jquery依赖放到package.json这个文件中,安装完成之后会在jquery这个包放到node_modules中，然后在package.json中加入jquery的安装版本号
  第二步：把这两个库引到项目中去
    需要修改angular.json文件，在angular.json文件的app("prefix": "app")下的 
            "styles": [
              "src/styles.scss",
              "../node_modules/bootstrap/dist/css/bootstrap.css"
            ],
            "scripts": [
              "../node_modules/jquery/dist/jquery.js",
              "../node_modules/bootstrap/dist/js/bootstrap.js"
            ]
  引入这两个文件
  注意： 直接在文件中使用jquery的 $ 符号，是没办法识别的，因为jquery是javascript的东西，typescript是没办法直接用的，
  这里需要用到typescript的类型描述文件，才能识别 $ 符号，
  在本地安装typescript类型描述文件 
    npm install @types/jquery --save-dev
    npm install @types/bootstrap --save-dev
  这两个文件的作用是使typescript能够识别javascript语法
    
  第三步：
  
   -->

   ## 安装依赖过程中，--save和--save-dev的区别
   <!-- 
      --save 表示安装的依赖在开发和发布时都需要： 指将包信息添加到dependencies
      --save-dev 表示安装的依赖在开发时需要： 指将包含信息添加到devDependencies
    -->
  ## angular的设计目标
  <!-- 1：帮开发人员方便的开发出可重用的组件 -->
  ## angular 生成新的组件
  <!-- ng g component 组件名（app目录下文件的名字） -->
  ## 在最新版本angualr中引入bootstrap的样式
  <!-- 
  注意：在最新版本的angular中按照上面方式引入jquery和bootstrap 会报错
  引入bootstrap样式时
  第一种： 找到index.html直接添加样式引用，<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">

  第二种： 打开Angular.json文件找到 project->architect->builder->options 下的style和scripts两个配置节。并将bootstrap的样式引入到styles中。由于angular只能引用bootstrap样式，所以scripts不需要引用bootstrap相关脚本(引用了也不生效)。
   "styles": [
              "src/styles.css",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],即可
   -->

## angular route 导航
  <!-- 
    单页面应用：浏览器进入一个index.html页面，浏览器页面不会跳转，执行某些操作时只会替换掉页面内容，但是不会重新加载整个页面，在非单页面应用中，点击商品进入商品详情，页面会跳转并重新加载页面所需的js,css文件等

    angular是一个spa(单页面应用)
  
   -->
## 路由器
  <!-- 
  路由器：控制整个应用视图状态的对象，每一应用都有一个路由器，需要配置这个路由器满足我们的需求，
  路由器的作用是给每一个视图分配一个唯一url，这样就可以使用url跳转到特定的视图状态，但是页面展示的仍然是index.html

  视图状态：可以把spa理解为一个视图状态的集合，
  -->
## angular route 导航的基础知识
<!-- 
  Routes: 路由配置，保存着那个URL对应展示那个组件，以及在那个RouterOutlet中展示组件
  RouterOutlet: 在html 中标记路由内容呈现位置的占位符指令
  Router: 负责在运行时执行路由的对象，可以通过调用其navigate()和navigateByUrl() 方法来导航到        一个指定的路由
  RouterLink: 在html中声明路由导航用的指令
  ActivatedRoute: 当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等

 -->
## Routes 详解和使用
<!-- 
Routes：存在与模块中的，Routes 对象由一组配置信息组成，每一组配置信息至少包含两个属性path属性和component
  path: /user   ()
  component: A  (组件A)
当Routes是 /user时，展示A组件，是/order时展示B组件，但是AppComponent可能会有很多内容，那组件A要展示在具体哪个位置呢？
这就需要用到 RouterOutlet 指令来指定组件A的位置，把RouterOutlet 写在哪，组件A就展示在哪，如果我们想展示B组件的话，可以在
页面上通过一个链接来改变浏览器的地址，而RouterLink指令 就是在模板上生成这样一个链接，另外我们也可以在组件控制器中调用Router对象的 navegate方法来改变浏览器的地址，从而实现路由的转换，
最后，我们可以通过URL来传递一些数据，比如path: /user？name=lufeng, 这些数据就会保存在 ActivatedRoute 对象中，比如说从组件A路由到组件B时，我们可以通过组件B中的 ActivatedRoute 对象，来获取组件A的路由中携带的参数，

 -->

  
