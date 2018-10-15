---
title: Angularjs Interview Questions
localeTitle: Angularjs访谈问题
---
# Angularjs访谈问题

以下是Angularjs访谈中经常被问到的概念列表。

*   什么是AngularJS？
*   什么是模型视图控制器（MVC）？
*   双向数据绑定
*   什么是依赖注入？它是如何工作的？
*   AngularJS中的$ scope是什么？
*   什么是AngularJS中的$ rootScope？
*   如何在Angular中实现路由？
*   解释指令
*   我们如何在Angular中创建自定义指令？
*   解释服务和工厂之间的差异
*   解释$ q服务，延期和承诺

# 示例问题和解答

问题：列出AngularJS中的指令？ 答案：ngBind，ngModel，ngClass，ngApp，ngInit，ngRepeat

问题：AngularJS中的$ scope是什么？ 答案：AngularJS中的$ scope是一个引用应用程序模型的对象。它是一个将视图（DOM元素）与控制器绑定的对象。在控制器中，模型数据通过$ scope对象访问。众所周知，AngularJS支持MV \*模式，$ scope对象成为MV \*的模型。

问题：AngularJS中的SPA（单页面应用程序）是什么？ 答案：单页面应用程序（SPA）是一种Web应用程序，它可以加载单个HTML页面，并在用户与应用程序交互时动态更新该页面。 SPA使用AJAX和HTML来创建流畅且响应迅速的Web应用程序，而无需不断的页面重新加载。但是，这意味着大部分工作都发生在客户端，在JavaScript中。 这里的单个HTML页面表示来自服务器的UI响应页面。源可以是ASP，ASP.NET，ASP.NET MVC，JSP等。 但是，单页Web应用程序作为一个页面提供给浏览器，并且通常不需要在用户导航到应用程序的各个部分时重新加载页面。这样可以为最终用户提供更快的导航，更高效的网络传输和更好的整体性能。

问题：AngularJS中的路由是什么？ 答：路由是AngularJS的核心功能。此功能在构建具有多个视图的SPA（单页应用程序）时非常有用。在SPA应用程序中，所有视图都是不同的Html文件，我们使用Routing来加载应用程序的不同部分，这有助于逻辑划分应用程序并使其可管理。换句话说，Routing帮助我们在逻辑视图中划分应用程序并将它们与不同的控制器绑定。

问题：解释重复指令。 答案：ng-repeat指令是最常用且非常有用的AngularJS指令功能。它迭代一组项目并创建DOM元素。它会不断监视数据源，以便根据更改重新呈现模板。

问题：ng-If和ng-show / ng-hide有什么区别。 答案：如果condition为true，则ng-If指令仅呈现DOM元素。其中ng-show / ng-hide指令呈现DOM元素，但它更改了ng-hide / ng-show的类，以保持页面上元素的可见性。

问题：如何使用AngularJs取消超时？ 答案：$ timeout是AngularJs的window.setTimeout包装器，你取消应用该函数的超时：
```
$timeout.cancel(function (){ 
  // write your code. 
 }); 
```

问题：什么是依赖注入？ 答案：依赖注入（DI）是一种软件设计模式，用于处理组件如何获取其依赖关系。 AngularJS注入器子系统负责创建组件，解析它们的依赖关系，并根据请求将它们提供给其他组件。

问题：解释-App指令。 答案：ng-app指令启动AngularJS应用程序。它定义了根元素。当加载包含AngularJS Application的网页时，它会自动初始化或引导应用程序。它还用于在AngularJS Application中加载各种AngularJS模块。

问题：解释-init指令 答案：ng-init指令初始化AngularJS应用程序数据。它用于将值放入要在应用程序中使用的变量。例如：在下面的示例中，我们使用JSON语法初始化了一组国家/地区，以定义国家/地区数组。

```html

<div ng-app = "" ng-init = "countries = [{locale:'en-US',name:'United States'}, {locale:'en-GB',name:'United Kingdom'}, {locale:'en-FR',name:'France'}]"> 
   ... 
 </div> 
```

问题：如何在控制器之间共享数据？ 答案：创建一个AngularJS服务，该服务将保存数据并将其注入控制器内部。 使用服务是最干净，最快速和最简单的测试方式。但是，有几种其他方法可以在控制器之间实现数据共享，例如： - 使用事件 - 使用$ parent，nextSibling，controllerAs等直接访问控制器 - 使用$ rootScope添加数据（不是一个好习惯）

问题：ng-if和ng-show / hide指令有什么区别？ 答案：ng-if仅在条件为真时创建并显示DOM元素，如果条件为false或更改为false，则不会创建或销毁创建的元素。 ng-show / hide将始终生成DOM元素，但它将根据条件的评估应用css display属性。

#### 更多信息：

在这里您可以找到其他问题和答案：

*   [AngularJS面试问题](https://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm)
*   [10 AngularJS面试问答](https://www.upwork.com/i/interview-questions/angularjs/)
*   [50个最重要的AngularJS面试问题取得100％的成功](http://www.techbeamers.com/latest-angularjs-interview-questions-answers/)