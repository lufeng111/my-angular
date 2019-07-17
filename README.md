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

## 依赖注入
<!-- 
1： 什么是依赖注入模式以及使用依赖注入模式的好处？
依赖注入： Dependency Injection 简称 DI
假设写了一个方法，这个方法的参数是一个对象，当调用这个方法时，需要实例化这个对象，并把它传递给方法，
例如：new 一个商品Product，商品的信息在这里面Product()，然后调用createShipment方法，把这个商品Product传到这个方法里，
createShipment方法需要一个已经存在的product 类的实例，换句话说createShipment依赖Product类，但是createShipment方法本身并不知道如何创建一个product类，调用createShipment方法代码需要以某种方式创建 product，并将其作为方法的参数传递给createShipment方法，把这个对象那个作为参数传递给这个方法也叫注入这个方法，比如现在需要将product类换成一个product子类MockProduct，在我们的例子中，只需要改一行代码，
var product = new Product();
createShipment(product);
改成
var product = new MockProduct();
createShipment(product);
但是如果createShipment三个参数product,shipCompany,order，每个参数又有自己的依赖，代码可能会变成这样
var product = new Product();
var shipCompany = new ShipCompany();
var address = new Address();
var order = new Order();
order.setAddress(address);
createShipment(product,shipCompany,order);
把address信息set到order信息里面，然后调createShipment方法
上面代码有大量的手工实例化对象代码，能不能有什么能够代替创建createShipment方法所依赖的这些对象，以及这些对象自己所依赖的对象呢？
这个就是依赖注入模式要解决的问题
如果一个对象A要依赖一个类型为B的对象，那么对象A不需要去实例化对象B,B会外部机制注入进来，A只需要声明我需要一个B类型的对象，有人能给我一个吗？这就依赖注入要解决的问题
与依赖注入经常同时出现的一个概念叫控制反转，控制反转：Inversion of Control 简称 IOC、
控制反转是指将依赖的控制权从代码的内部转成代码外部，代码对外部的依赖是什么，是由代码的内部来决定的，
比如：var product = new Product() 决定了代码依赖Product()，如果我们把依赖改成MockProduct(),需要修改方法内部的代码，把Product()改成MockProduct()，如果实现控制反转，内部代码只需要声明我需要 Product()，至于传进来的是Product() 还是MockProduct()，是由代码外部来决定的，这样把依赖的控制权由代码的内部转成代码的外部，就叫控制反转，控制反转和依赖注入是一体两面，表达的是一个思想，控制反转侧重于描述目的：目的是将代码的控制权由代码内部转成代码外部。依赖注入侧重于描述手段：如何来实现控制反转，使用的手段叫依赖注入，实现控制反转模式的框架叫IOC容器，而angular框架就是一个IOC容器，

控制反转：Inversion of Control 简称 IOC
2： 介绍angular的依赖注入实现：注入器和提供器
3： 注入器的层级关系
 -->
## 使用依赖注入模式的好处
<!-- 
1： 依赖注入会以一种松耦合的方式编写代码，使代码的可重用性和可测性更高，

什么是松耦合和可重用性？

假设有一个商品组件productComponent,使用一个商品服务ProductService来获取商品信息，如果没有依赖注入，你需要知道在productComponent中如何实例化ProductService，有很多方式实例化ProductService比如new一个操作符，不管用哪种方法，商品组件productComponent和商品服务ProductService 都将紧密的结合在一起，如果想在另一个项目中，重用productComponent组件，但是要使用另一个不同的服务对象来获取商品的信息，这代表商品组件productComponent 和 商品服务ProductService 是紧密耦合在一起的，如果想在别的项目中使用商品组件productComponent，需要改代码商品组件里面的代码才可以用，而依赖注入可以解决这种商品组件和商品服务紧耦合关系，从而可以使商品组件在别的项目中也可以使用，不用修改商品组件中的代码，
var productService = new ProductService();
var productService = new AnotherProductService();
看下面一段代码：
@NgModule({
  providers: [ProductService]
  ... 省略其他配置
})
export class AppModule { }

@Componnet({
  ...省略组件配置
})
export class ProductComponnet {
  product: Product;
  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}

在angular项目中，通过指定providers 来告诉angular哪些对象需要依赖注入，
providers 属性是一个数组，数组里面的每一个元素是一个provider, 一个provide 定义了一个对象在被注入到指令和组件之前如何实例化，
providers: [ProductService]  这一段代码等价于 
providers: [{provide: ProductService, useClass: ProductService}]   
这里涉及angular的一个概念token, 一个token用来代表一个可被注入的对象的类型，token类型由providers的配置对象的provide属性来决定，所以providers: [{provide: ProductService, useClass: ProductService}] 这段代码的意思是，注册一个类型是 ProductService的token，当由组件或者指令声明自己需要一个ProductService的token时，实例化一个useClass: ProductService，并将其注入到目标对象，

那么组件或指令如何声明自己需要一个类型为 ProductService的token，？
答案是用组件或指令的构造函数，如果在构造函数中这样去写（productService: ProductService ）就是我需要一个类型为 ProductService的token, angular框架看到这个声明以后，就会去providers中去找provide: ProductService 这个类型的token对应的类useClass: ProductService 是哪一个，
constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
现在写的类useClass对应 ProductService 那么就会实例化一个ProductService注入到constructor(productService: ProductService)，ProductComponnet组件本身并不知道传递进来的是ProductService哪一个实现，更不需要明确实例化 ProductService，他只需要使用angular创建好的这个
对象constructor(productService: ProductService)，然后调用他的 getProduct 方法就可以了，如果想在其他项目中重用ProductComponnet这个组件，而那个项目中有另一个实现ProductService的类，那么可以修改另一个项目的AppModule 中的 providers声明，修改成这样
providers: [{provide: ProductService, useClass: AnotherProductService}]
这个意思是说我要注册一个ProductService的token，当有组件或者类声明我需要ProductService时，就在useClass: AnotherProductService 这里new 一个 AnotherProductService，现在angular 将实例化这个类型AnotherProductService， 并注入到ProductComponnet组件里面，而 ProductComponnet组件本身并不需要任何的修改，在这里消除了 ProductService 和 ProductComponnet 的紧耦合，从而提高了ProductComponnet 组件的重用性，


依赖注入的第二个好处： 可测性
当真实的对象还不可用时，可以方便的注入一个虚拟的对象来测试程序，
假设为应用添加一个登陆功能，创建一个LoginComponnet 组件，让用户填写用户名和密码，LoginComponnet 组件也需要依赖一个login服务，login服务需要连接一个身份认证服务器，并且检查用户提供的用户名，密码是否正确，但是身份认证服务器是另一个部门开发的，还没开发好，但是LoginComponnet 组件已经开发好了，没法测试，这时依赖注入可以很好地解决这个问题： 可以创建一个 MockLoginService 这个服务并不真正的连接认证服务器，而是另外编码一段逻辑判断是否可以认证登录，例如只有用户名是admin 密码是1234时，才可以认证登录，其他情况都返回用户名和密码错误，然后使用依赖注入将这个 MockLoginService 注入到LoginComponnet 组件，等认证服务器开发好了，只需要改一行代码 providers的属性，就可以让 angular 注入真正的loginservice ,提高可测试行
 -->

 ## angular 如何实现依赖注入
 <!-- 
 这主要涉及到两个概念 注入器 和 提供器
 注入器：constructor(private productService: ProductService){...}
 提供器： providers:[ProductService] => providers:[{provide:ProductService, useClass: ProductService}]
 当provide 和useClass的类型都是ProductService 可以简写成这个样providers:[ProductService]

 注入器：
  每一个组件都有一个注入器，负责注入组件需要的对象，注入器是angular 提供的一个服务类，一般情况下不需要直接调用注入器的方法，注入器会自动通过组件的构造函数将组件所需的对象注入进组件，例如：
  constructor(private productService: ProductService){...}
  constructor这个就是组件的构造函数，在这个构造函数中声名private我们需要的 productService 这样一个属性，在这个属性上我们指明他的
  类型是 ProductService ,angular 在看到这样一个构造声明的时候，就会在整个应用中去寻找 ProductService 的实例，如果能找到这个实例，就会把
  ProductService 这个实例注入到productService这个对象里面去，直接使用就可以了，为了让注入器知道需要被注入的对象如何实例化：这个ProductService怎样产生这个ProductService ，你需要指定提供器，

提供器：providers:[ProductService] => providers:[{provide:ProductService, useClass: ProductService}]
  一般我们会通过组件或者模块的providers属性来声明provide(像这样[ProductService]),在这个声明里provide 指定了提供器的token，useClass 说明实例化的方式是new ,new一个 ProductService ，而这个token 就是 在构造函数中constructor(private productService: ProductService){...} 声明的属性productService的一个类型 ProductService，当我在构造函数中声明我需要一个ProductService类型的对象的时候，他会去找token对应的productService，也就是找provide:ProductService这样一个provide的声明，他看到这个声明写的是useClass: ProductService, 他就会new一个ProductService放到 这里来constructor(private productService: ProductService){...}，如果这样写
  providers:[{provide:ProductService, useClass: AnotherProductService}] 那么在构造函数中constructor(private productService: ProductService){...}声明我需要的ProductService这样一个token的时候，new出来的东西就是AnotherProductService，所以构造函数声明的类型productService: ProductService和提供器里面provide的token（provide:ProductService）这两个是一致的，根据token的类型来匹配要注入的对象和提供器的，然后根据提供器的useClass属性来实例化具体的一个类，这里useClass: ProductService指定的是什么类 ，真正实例化的就是什么类

  最后我们还可以通过一个工厂方法useFactory来返回一个实例化对象，把工厂方法返回的实例{...}注入到ProductService属性中，
  providers:[{provide:ProductService, useFactory: () => {...}}]
  在工厂函数中还可以对实例化对象ProductService 做一些初始化的操作，
 
  -->

  ## 依赖注入：重构在线竞拍
  <!-- 
  1： 编写ProductService, 包含3个方法：getProducts(), getProduct(id), 以及 getCommentsForProduct(id),
  2: 修改路由配置，在商品列表进入商品详情时不再传递商品名称，改为传递商品ID 
  3: 注入ProductService 并使用其服务
  
   -->
  ## 数据绑定 响应式编程 管道
  <!-- 
  数据绑定：双向数据绑定

  响应式编程：和angular关系不大，是由rxjs这个框架实现的，angular集成rxjs并且将一些特性建立在响应式编程的基础上，所以需要对响应式编程有一个初步的理解，才能进一步学习与之相关的特性，

  管道： 是 angular 用来格式化模板输出的一种可重用对象，

   -->
   ## 数据绑定
   <!-- 
   下面是数据绑定的三种方式：
   <h1>{{productTitle}}</h1>
   使用插值表达式将一个表达式的值显示在模板上
   
   <img [src] = "imgUrl">
   使用方括号将html标签上的一个属性绑定到一个表达式上
   
   <button (click)="toProductDetail()">商品详情</button>
   使用小括号将组件控制器的一个方法绑定到模板上一个事件的处理器

   angular 默认的数据绑定是单向的数据绑定，单向是指：要么将控制器上数据的变化显示在模板上，要么将模板上的事件绑定到组件控制器的方法上，
   angular1默认是双向数据绑定，当标签h1的内容发生变化时，productTitle这个属性的值也会发生变化，这也是angular1在处理复杂页面性能的原因，因为angular1 会在页面上维护一个存有所有数据绑定表达式的列表，浏览器事件发生时，angular1会反复检查这个列表，直到确认所有的数据都已经同步，这个过程是非常耗性能的，在angular 中默认的数据绑定方式为单向数据绑定，但是可以通过明确指定的方式，来实现数据双向绑定，也就是说双向数据绑定变成一个可选项而不是默认行为

   数据绑定的几种形式：
   事件绑定
   dom属性绑定
   html属性绑定
   双向数据绑定
    -->
  ## 事件绑定
  <!-- 
  <input (input)="onInputEvent($event)">
  ()小括号表示这是一个事件绑定，
  (input)中的input是事件名称，
  $event 浏览器事件对象
  onInputEvent($event) 组件方法名称
  "onInputEvent($event) 当事件发生时执行的表达式，这个表达式是组件控制性中的一个方法
  当小括号中指定的事件被触发时，等号右侧双引号中的表达式会被执行，
  所以每次(input)这个事件被触发时，这个onInputEvent()方法就会被调用，如果处理事件的方法onInputEvent()需要了解input事件的属性，就给这个处理事件的方法添加一个$event 参数，这个参数$event 是一个标准的浏览器事件对象，它的target属性高指向产生事件的dom 节点，也就是input节点，
  这里有两点需要注意：
  第一：等号右侧的表达式可以不是一个函数调用，也可以是一个属性赋值，想这个样子
  <button (click)="saved = true"></button> ,表示当我点击时组件的saved属性会被设为true, 
  第二点：被绑定的事件可以是标准的DOM事件，也可以是任意的自定义事件，
  
   -->


