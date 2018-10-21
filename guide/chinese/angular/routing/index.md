---
title: Routing
localeTitle: 路由
---
# 路由

#### 动机

路由至关重要。许多现代Web应用程序为一个页面托管了太多信息。用户不必滚动浏览整个应用程序的内容。应用程序需要将自身拆分为可区分的部分。

用户优先考虑必要的信息。路由帮助他们找到包含此类信息的应用程序部分。对其他用户有用的任何其他信息可能存在于完全独立的路由上。通过路由，两个用户都可以快速找到所需内容。不相关的细节在不相关的路线背后隐藏。

路由优于排序和限制对应用程序数据的访问。绝不应向未经授权的用户显示敏感数据。在每条路线之间，应用程序可能会介入。它可以检查用户的会话以进行身份​​验证。该检查确定如果它应该呈现的路线呈现什么。路由为开发人员提供了在继续之前验证用户的绝佳机会。

创建路线列表也可以促进组织。在开发方面，它使开发人员在可区分的部分进行思考。用户也可以从中受益，但在浏览应用程序代码时更多的是开发人员。程序化路由器列表描绘了应用程序前端的精确模型。

至于Angular，路由在框架内占用了自己的整个库。所有现代前端框架都支持路由，而Angular也不例外。使用散列或位置路由从客户端进行路由。两种样式都允许客户端管理自己的路由。在初始请求之后，不需要服务器的其他帮助。

Web浏览器很少使用客户端路由刷新。尽管没有刷新，但书签，历史记录和地址栏等Web浏览器实用程序仍然有效。这使得流畅的路由体验不会弄乱浏览器。在路由到不同页面时，不再有重载页面重新加载。

Angular在用于路由的核心技术上增加了一层抽象。本文旨在解释这种抽象。 Angular中存在两种路由策略：路径位置和哈希。本文重点介绍路径位置策略，因为它是默认选项。

此外，路径位置可能会在[Angular Universal](https://universal.angular.io)完全发布后弃用散列路由。无论如何，这两种策略的实施非常相似。学习一个学习另一个。开始的时候了！

#### RouterModule安装程序

路由实用程序使用`@angular/router`提供的`RouterModule`导出。它不是核心库的一部分，因为并非所有应用程序都需要路由。引入路由的最常规方式是作为自己的[功能模块](https://angular.io/guide/feature-modules) 。

随着路由复杂性的增加，将其作为自己的模块将促进根模块的简单性。在不损害功能的情况下保持简单愚蠢构成模块的良好设计。

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AComponent } from '../../components/a/a.component'; 
 import { BComponent } from '../../components/b/b.component'; 
 
 // an array of soon-to-be routes! 
 const routes: Routes = []; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

`.forRoot(...)`是一个可从RouterModule类获得的类函数。该函数接受`Route`对象数组作为`Routes` 。 `.forRoot(...)`配置eager-loading路由，而其替代`.forChild(...)`配置延迟加载。

渴望加载意味着路由从一开始就将其内容加载到应用程序中。延迟加载是按需进行的。本文的重点是热切加载。它是在应用程序中加载的默认方法。 RouterModule类定义类似于下一个代码块。

```typescript
@NgModule({ 
  // … lots of metadata ... 
 }) 
 export class RouterModule { 
  forRoot(routes: Routes) { 
    // … configuration for eagerly loaded routes … 
  } 
 
  forChild(routes: Routes) { 
    // … configuration for lazily loaded routes … 
  } 
 } 
```

不要担心示例省略注释的配置详细信息。现在已经有了一般性的了解。

注意AppRoutingModule如何导入RouterModule同时导出它。鉴于AppRoutingModule是一个功能模块，这是有道理的。它作为功能模块导入根模块。它将RouterModule指令，接口和服务公开给根组件树。

这解释了为什么AppRoutingModule必须导出RouterModule。它是为了根模块的底层组件树而这样做的。它需要访问这些路由实用程序！

```typescript
import { BrowserModule } from '@angular/platform-browser'; 
 import { NgModule } from '@angular/core'; 
 
 import { AppComponent } from './app.component'; 
 import { AComponent } from './components/a/a.component'; 
 import { BComponent } from './components/b/b.component'; 
 import { AppRoutingModule } from './modules/app-routing/app-routing.module'; 
 
 @NgModule({ 
  declarations: [ 
    AppComponent, 
    AComponent, 
    BComponent 
  ], 
  imports: [ 
    AppRoutingModule, // routing feature module 
    BrowserModule 
  ], 
  providers: [], 
  bootstrap: [ AppComponent ] 
 }) 
 export class AppModule { } 
```

AppRoutingModule令牌从最顶层导入。它的令牌插入到根模块的imports数组中。根组件树现在可以使用RouterModule库。这包括已经提到的指令，接口和服务。非常感谢AppRoutingModule导出RouterModule！

RouterModule实用程序将为root的组件派上用场。 AppComponent的基本HTML使用一个指令： `router-outlet` 。

```html

<!-- app.component.html --> 
 
 <ul> 
  <!-- routerLink(s) here --> 
 </ul> 
 <router-outlet></router-outlet> 
 <!-- routed content appends here (AFTER THE ELEMENT, NOT IN IT!) --> 
```

`routerLink`是`routerLink`的属性指令。一旦设置了路由，它将附加到`<ul></ul>`每个元素。 `router-outlet`是一个有趣行为的组件指令。它更像是显示路由内容的标记。路由内容是导航到特定路线的结果。通常这意味着在AppRoutingModule中配置的单个组件

路由内容在`<router-outlet></router-outlet>`之后立即呈现。内部没有任何东西呈现出来。这并没有太大的差别。也就是说，不要指望`router-outlet`的行为就像路由内容的容器一样。它仅仅是将路由内容附加到文档对象模型（DOM）的标记。

#### 基本路由

上一节建立了路由的基本设置。在实际路由发生之前，必须解决一些问题

要解决的第一个问题是此应用程序将使用哪些路由？嗯，有两个组件：AComponent和BComponent。每个人都应该有自己的路线。它们可以根据当前路径位置从AppComponent的`router-outlet`进行渲染。

路径位置（或路径）通过一系列斜杠（ `/` ）定义附加到[网站原点的内容](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) （例如http：// localhost：4200）。

```typescript
// … same imports from before … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

`http://localhost:4200/A`从AppComponent的`router-outlet`呈现AComponent。 `http://localhost:4200/B`呈现BComponent。您需要一种方法来路由到这些位置而不使用地址栏。应用程序不应依赖Web浏览器的地址栏进行导航。

_全局CSS（层叠样式表）补充了它下面的HTML。应用程序的路由器链接应该具有令人愉悦的外观。此CSS也适用于所有其他示例。_

```css
/* global styles.css */ 
 
 ul li { 
  cursor: pointer; 
  display: inline-block; 
  padding: 20px; 
  margin: 5px; 
  background-color: whitesmoke; 
  border-radius: 5px; 
  border: 1px solid black; 
 } 
 
 ul li:hover { 
  background-color: lightgrey; 
 } 
```

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li routerLink="/B">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

这是基本的路由！单击任一routerLink元素即可路由该Web地址。它重新分配它而不刷新Web浏览器。 Angular的`Router`将路由地址映射到AppRoutingModule中配置的`Routes` 。它将地址与数组中单个`Route`对象的`path`属性相匹配。第一场比赛总是胜利，所以匹配所有路线应该位于`Routes`阵列的最后。

匹配所有路由可防止应用程序在无法与当前路由匹配时崩溃。这可以从用户可以在任何路线中键入的地址栏进行。为此，Angular提供了一个接受所有路由的通配符路径值`**` 。此路由通常呈现PageNotFoundComponent组件显示“错误404：找不到页面”。

```typescript
// … PageNotFoundComponent imported along with everything else … 
 
 const routes: Routes = [ 
  { 
    path: 'A', 
    component: AComponent 
  }, 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: '', 
    redirectTo: 'A', 
    pathMatch: 'full' 
  }, 
  { 
    path: '**', 
    component: PageNotFoundComponent 
  } 
 ]; 
```

包含`redirectTo`的`Route`对象使PageNotFoundComponent不会因`http://localhost:4200`而呈现。这是申请回家路线。要解决此问题， `redirectTo`将主路由重新路由到`http://localhost:4200/A` `http://localhost:4200/A`间接成为应用程序的新主路由。

`pathMatch: 'full'`告诉`Route`对象与home路由匹配（ `http://localhost:4200` ）。它匹配空路径。

自从第一场比赛获胜以来，这两个新的`Route`对象就位于数组的末尾。最后一个数组元素（ `path: '**'` ）始终匹配，因此最后一个。

在继续之前还有一件值得解决的事情。用户如何知道他或她在应用程序中相对于当前路线的位置？当然可能有特定于路线的内容，但用户应该如何建立连接？应该有一些形式的突出显示应用于routerLinks。这样，用户将知道给定网页的哪条路线是活动的。

这是一个简单的解决方案。单击`routerLink`元素时，Angular的`Router`会将_焦点_分配给它。该焦点可以触发某些样式，为用户提供有用的反馈。 `routerLinkActive`指令可以跟踪开发人员的这个焦点。

```html

<!-- app.component.html --> 
 
 <ul> 
  <li routerLink="/A" routerLinkActive="active">Go to A!</li> 
  <li routerLink="/B" routerLinkActive="active">Go to B!</li> 
 </ul> 
 <router-outlet></router-outlet> 
```

`routerLinkActive`的正确分配表示一串类。此示例仅描绘一个类（ `.active` ），但可以应用任意数量的以空格分隔的类。当`Router`将_焦点_分配给routerLink时，以空格分隔的类将应用于host元素。当焦点移开时，类会自动删除。

```css
/* global styles.css */ 
 
 .active { 
  background-color: lightgrey !important; 
 } 
```

用户现在可以轻松识别当前路线和页面内容的重合程度。 `lightgrey` highlighting适用于匹配当前路由的routerLink。 `!important`确保突出显示覆盖内联样式。

#### 参数化路线

路由不必完全硬编码。它们可以包含可从与`Route`对象相对应的组件引用的动态变量。在写入路径的路径时，这些变量被声明为参数。

路由参数是可选的或必需的，以匹配特定的`Route` 。这取决于路由如何写入其参数。存在两种策略：矩阵和传统参数化。

传统参数化从AppRoutingModule中配置的`Routes`数组开始。

```typescript
const routes: Routes = [ 
  // … other routes … 
  { 
    path: 'B', 
    component: BComponent 
  }, 
  { 
    path: 'B/:parameter', 
    component: BComponent 
  }, 
  // … other routes … 
 ]; 
```

专注于两条BComponent路线。参数化最终将在两个路径中发生。

传统参数化发生在第二个BComponent `Route` 。 `B/:parameter`包含`parameter`参数，如下所示`:` 。无论如何，冒号标记参数的名称。 `parameter`参数是第二个BComponent `Route`匹配所必需的。

`parameter`读入传递给路径的任何值。路由到`http://localhost:4200/B/randomValue`将为`parameter`赋值`randomValue` 。此值可包括除另一个`/`之外的任何内容。例如， `http://localhost:4200/B/randomValue/blahBlah`不会触发第二个BComponent `Route` 。而PageNotFoundComponent则呈现。

BComponent可以从其组件类引用路由参数。两种参数化方法（矩阵和传统方法）在BComponent中产生相同的结果。在查看BComponent之前，请检查下面的参数化矩阵形式。

```typescript
// app.component.ts 
 
 import { Component } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent { 
  constructor(private router: Router) { } 
 
  routeMatrixParam(value: string) { 
    if (value) 
      this.router.navigate(['B', { parameter: value }]); // matrix parameter 
    else 
      this.router.navigate(['B']); 
  } 
 
  routeAddressParam(value: string) { 
    this.router.navigate(['B', value]); 
  } 
 } 
```

Angular的依赖注入系统提供了`Router`的实例化。这允许组件以编程方式路由。 `.navigate(...)`函数接受一个解析为_可路由_路径的值数组。像`.navigate(['path', 'to', 'something'])`解析为`http://localhost:4200/path/to/something` 。 `.navigate(...)`在将数组规范化为_可路由_路径时添加路径分隔`/`标记。

第二种形式的参数化发生在`routeMatrixParam(...)` 。请参阅以下代码行： `this.router.navigate(['B', { parameter: value }])` 。这种形式的`parameter`是矩阵参数。它的值是可选的第一BComponent `Route`匹配（ `/B` ）。该`Route`无论在路径参数的存在相匹配。

`routeAddressParam(...)`解析与`http://localhost:4200/B/randomValue`参数化方法匹配的路由。这种传统策略需要一个参数来匹配第二个BComponent路径（ `B/:parameter` ）。

矩阵策略涉及`routeMatrixParam(...)` 。在路径中有或没有矩阵参数的情况下，第一个BComponent路径仍然匹配。 `parameter`参数传递给BComponent，就像传统方法一样。

为了充分了解上面的代码，这里是相应的模板HTML。

```html

// app.component.html 
 
 <ul> 
  <li routerLink="/A">Go to A!</li> 
  <li> 
    <input #matrixInput> 
    <button (click)="routeMatrixParam(matrixInput.value)">Matrix!</button> 
  </li> 
  <li> 
    <input #paramInput> 
    <button (click)="routeAddressParam(paramInput.value)">Param!</button> 
  </li> 
 </ul> 
 <router-outlet></router-outlet> 
```

在模板中，值被接受为文本输入。输入将其作为参数注入路径路径。每个参数化策略（传统和矩阵）存在两组独立的盒子。将所有部分组合在一起，是时候检查BComponent组件类了。

```typescript
// b.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { ActivatedRoute, ParamMap } from '@angular/router'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>Route param: {{ currParam }}</p> 
  ` 
 }) 
 export class BComponent implements OnInit { 
  currParam: string = ""; 
 
  constructor(private route: ActivatedRoute) { } 
 
  ngOnInit() { 
    this.route.params.subscribe((param: ParamMap) => { 
      this.currParam = param['parameter']; 
    }); 
  } 
 } 
```

BComponent来自AppRoutingModule中两个BComponent路由中的任何一个。 `ActivatedRoute`实例化为一组与当前路线有关的有用信息。也就是说，导致BComponent渲染的路由。 `ActivatedRoute`通过针对类构造函数的依赖注入实例化。

`ActivatedRoute.params`的`.params`字段返回一个`Observable` ，它发出路由参数。注意两种不同的参数化方法如何产生`parameter`参数。返回的`Observable`其作为`ParamMap`对象内的键值对发出。

在两种参数化方法之间， `parameter`参数解析相同。尽管采用了参数化方法，但该值仍然来自`ActivatedRoute.params` 。

地址栏区分每种方法的最终结果。矩阵参数化（ `Route`匹配可选）产生地址： `http://localhost:4200/B;parameter=randomValue` 。传统参数化（ `Route`匹配所需）产生： `http://localhost:4200/B/randomValue` 。

无论哪种方式，都会产生相同的BComponent结果。实际差异：不同的BComponent `Route`匹配。这完全取决于参数化策略。矩阵方法确保参数对于`Route`匹配是可选的。传统方法需要它们。

#### 嵌套路由

`Routes`可以形成层次结构。在DOM中，这涉及一个父`router-outlet`渲染至少一个子`router-outlet` 。在地址栏中，它看起来像这样： `http://localhost/parentRoutes/childRoutes` 。在`Routes`配置中， `children: []`属性表示`Route`对象具有嵌套（子）路由。

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { NestComponent } from '../../components/nest/nest.component'; 
 import { AComponent } from '../../components/nest/a/a.component'; 
 import { BComponent } from '../../components/nest/b/b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'nest', 
    component: NestComponent, 
    children: [ 
      { path: 'A', component: AComponent }, 
      { path: 'B', component: BComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ] 
 }) 
 export class AppRoutingModule { } 
```

```typescript
// nest.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-nest', 
  template: ` 
  <ul> 
    <li routerLink="./A">Go to A!</li> 
    <li routerLink="./B">Go to B!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class NestComponent { } 
```

NestComponent呈现一个`router-outlet`从另一个根级渲染本身后`router-outlet`在AppComponent。 NestComponent模板的`router-outlet`可以呈现AComponent（ `/nest/A` ）或BComponent（ `/nest/B` ）。

AppRoutingModule在NestComponent的`Route`对象中反映了这种嵌套。 `children: []`字段包含一组`Route`对象。这些`Route`对象也可以在其`children: []`节点中嵌套路径`children: []`字段。然而，这可以继续多层嵌套路由。上面的例子显示了两层嵌套。

与`/`相比，每个`routerLink`包含`./` 。这个`.`确保routerLink附加到路由路径。 routerLink完全替换了路径。路由到`/nest` ， `.`扩展到`/nest` 。

这对于从`.nest`路由路由到`/nest/A`或`/nest/B`非常有用。 `A`和`B`构成`/nest`嵌套路由。路由到`/A`或`/B`返回PageNotFound。 `/nest`必须在前面添加两条路由。

在模板中查看包含根级`router-outlet`的AppComponent。 AppComponent是第一层嵌套，而NestComponent是第二层。

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/nest">Go to nested routes!</li> 
    <li routerLink="/">Back out of the nested routes!</li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { } 
```

在嵌套`Route`对象中， `children: []`包含两个嵌套路由。如前所述，当从`/nest`路由时，它们会产生AComponent和BComponent。为了演示，这些组件非常简单。 `<li routerLink="/">...</li>`可让您导航出巢路线以通过导航到主路线来重置示例。

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <p>a works!</p> 
  ` 
 }) 
 export class AComponent { } 
```

```typescript
import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>b works!</p> 
  ` 
 }) 
 export class BComponent { } 
```

`children: []`数组接受`Route`对象作为元素。 `children: []`也可以适用于任何这些元素。这些元素的孩子可以继续筑巢。然而，这种模式可以继续用于许多层嵌套。为每个嵌套路由层插入`router-outlet`到模板中。

无论`Route`对象的嵌套级别如何，路由技术都适用。参数化技术仅在一个方面不同。子路径只能通过`ActivatedRoute.parent.params`访问其父级参数。 `ActivatedRoute.params`针对相同级别的嵌套路由。这不包括父级路由及其参数。

`Route`保护特别适合嵌套路由。一个`Route`对象可以限制对其所有嵌套（子）路由的访问。

#### 守卫路线

Web应用程序通常由公共和私有数据组成。两种类型的数据往往都有自己的带有_保护_路由的页面。这些路由允许/限制访问，具体取决于用户的权限。未经授权的用户可能会与受保护的路由进行交互。如果用户尝试访问其路由内容，则该路由应阻止该用户。

Angular提供了一组可以附加到任何路由的身份验证保护。这些方法根据用户与受保护路由的交互方式自动触发。

*   `canActivate(...)` - 当用户尝试访问路由时触发
    
*   `canActivateChild(...)` - 当用户尝试访问路由的嵌套（子）路由时触发
    
*   `canDeactivate(...)` - 当用户尝试离开路线时触发
    

Angular的防护方法可从`@angular/router` 。为了帮助他们进行身份验证，他们可以选择接收一些参数。这些参数不通过依赖注入注入。在引擎盖下，每个值都作为参数传递给调用的guard方法。

*   `ActivatedRouteSnapshot` - 适用于所有三个
    
*   `RouterStateSnapshot` - 可用于所有三个
    
*   `Component` - 可用于`canDeactivate(...)`
    

`ActivatedRouteSnapshot`提供对受保护路由的路由参数的访问。 `RouterStateSnapshot`公开与路由匹配的URL（统一资源定位符）Web地址。 `Component`引用路由呈现的组件。

为了保护路由，实现保护方法的类首先需要作为服务存在。该服务可以注入AppRoutingModule以保护其`Routes` 。服务的标记值可以注入任何一个`Route`对象。

```typescript
import { NgModule } from '@angular/core'; 
 import { RouterModule, Routes } from '@angular/router'; 
 
 import { AuthService } from '../../services/auth.service'; 
 import { UserService } from '../../services/user.service'; 
 
 import { PrivateNestComponent } from '../../components/private-nest/private-nest.component'; 
 import { PrivateAComponent } from '../../components/private-nest/private-a/private-a.component'; 
 import { PrivateBComponent } from '../../components/private-nest/private-b/private-b.component'; 
 
 const routes: Routes = [ 
  { 
    path: 'private-nest', 
    component: PrivateNestComponent, 
    canActivate: [ AuthService ], // !!! 
    canActivateChild: [ AuthService ], // !!! 
    canDeactivate: [ AuthService ], // !!! 
    children: [ 
      { path: 'private-A', component: PrivateAComponent }, 
      { path: 'private-B', component: PrivateBComponent } 
    ] 
  } 
 ]; 
 
 @NgModule({ 
  imports: [ RouterModule.forRoot(routes) ], 
  exports: [ RouterModule ], 
  providers: [ 
    AuthService, 
    UserService 
  ] 
 }) 
 export class AppRoutingModule { } 
```

`canActivate` ， `canActivateChild`和`canDeactivate`来自AuthService。服务实现将在UserService实现的同时显示。

UserService提供验证用户身份所需的信息。 AuthService防护方法实现执行身份验证。 AppRoutingModule必须将两个服务包含在其providers数组中。这样模块的注入器就知道如何实例化它们。

嵌套路由存在于`/private-nest`路径之外。 `/private-nest`的`Route`对象包含一些新字段。他们的名字应该看起来很熟悉，因为他们反映了相应的防守方

触发时，每个字段在服务内部触发其同名的方法实现。任何数量的服务也可以填充此数组。每个服务的方法实现都经过测试。它们必须返回一个布尔值或一个发出布尔值的`Observable` 。

请参阅下面的AuthService和UserService实现。

```typescript
// user.service.ts 
 
 import { Injectable } from '@angular/core'; 
 import { Router } from '@angular/router'; 
 
 class TheUser { 
  constructor(public isLoggedIn: boolean = false) { } 
 
  toggleLogin() { 
    this.isLoggedIn = true; 
  } 
 
  toggleLogout() { 
    this.isLoggedIn = false; 
  } 
 } 
 
 const globalUser = new TheUser(); 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class UserService { 
  theUser: TheUser = globalUser; 
 
  constructor(private router: Router) { } 
 
  get isLoggedIn() { 
    return this.theUser.isLoggedIn; 
  } 
 
  login() { 
    this.theUser.toggleLogin(); 
  } 
 
  logout() { 
    this.theUser.toggleLogout(); 
    this.router.navigate(['/']); 
  } 
 } 
```

随着UserService的每个实例化传递相同的`TheUser`实例。 `TheUser`可以访问`isLoggedIn`来确定用户的登录状态。另外两个公共方法让UserService切换`isLoggedIn`的值。这样用户就可以登录和注销。

您可以将`TheUser`视为全局实例。 `UserService`是一个可实例化的接口，用于配置此全局。从一个`UserService`实例化对`TheUser`更改适用于每个其他`UserService`实例。 `UserService`实现到AuthService以提供对TheUser的`isLoggedIn`的访问以`TheUser`身份验证。

```typescript
import { Component, Injectable } from '@angular/core'; 
 import { CanActivate, CanActivateChild, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; 
 
 import { UserService } from './user.service'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class AuthService implements CanActivate, CanActivateChild, CanDeactivate<Component> { 
  constructor(private user: UserService) {} 
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (this.user.isLoggedIn) 
      return true; 
    else 
      return false; 
  } 
 
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    return this.canActivate(route, state); 
  } 
 
  canDeactivate(component: Component, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { 
    if (!this.user.isLoggedIn || window.confirm('Leave the nest?')) 
      return true; 
    else 
      return false; 
  } 
 } 
```

AuthService实现从`@angular/router`导入的每个保护方法。每个保护方法都映射到PrivateNestComponent的`Route`对象中的相应字段。 UserService的实例从AuthService构造函数实例化。 AuthService确定用户是否可以继续使用UserService公开的`isLoggedIn` 。

从警卫返回`false`指示路由阻止用户路由。返回值为`true`允许用户前往其路由目的地。如果多个服务进行身份验证，则它们都必须返回true以允许访问。 `canActivateChild`保护`canActivateChild`的子路由。该保护方法考虑用户通过地址栏绕过PrivateNestComponent。

Guard方法参数在调用时自动传入。虽然该示例没有使用它们，但它们确实从路线提供了有用的信息。开发人员可以使用此信息来帮助验证用户身份。

AppComponent还实例化UserService以便在其模板中直接使用。 AppComponent和AuthService的UserService实例化引用相同的用户类（ `TheUser` ）。

```typescript
import { Component } from '@angular/core'; 
 
 import { UserService } from './services/user.service'; 
 
 @Component({ 
  selector: 'app-root', 
  template: ` 
  <ul> 
    <li routerLink="/private-nest">Enter the secret nest!</li> 
    <li routerLink="/">Leave the secret nest!</li> 
    <li *ngIf="user.isLoggedIn"><button (click)="user.logout()">LOGOUT</button></li> 
    <li *ngIf="!user.isLoggedIn"><button (click)="user.login()">LOGIN</button></li> 
  </ul> 
  <router-outlet></router-outlet> 
  ` 
 }) 
 export class AppComponent { 
  constructor(private user: UserService) { } 
 } 
```

UserService处理AppComponent的所有逻辑。 AppComponent主要关注其模板。 UserService确实从类构造函数实例化为`user` 。 `user`数据确定模板的功能。

#### 结论

路由在应用程序的组织和限制部分之间达到了很好的平衡。较小的应用程序（如博客或致敬页面）可能不需要任何路由。即使这样，包括一点哈希路由也不会受到伤害。用户可能只想参考页面的一部分。

Angular应用自己的构建于HTML5 [历史API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)之上的路由库。此API省略了散列路由，而是使用`pushState(...)`和`replaceState(...)`方法。他们更改网址URL而不刷新页面。 Angular中的默认路径位置路由策略以这种方式工作。如果`RouterModule.forRoot(routes, { useHash: true })`设置`RouterModule.forRoot(routes, { useHash: true })`启用散列路由。

本文重点介绍默认路径定位策略。无论策略如何，许多路由实用程序都可用于路由应用程序。 `RouterModule`通过其导出公开这些实用程序。使用RouterModule可以实现基本，参数化，嵌套和保护路由。有关包含延迟加载路由的更高级实现，请参阅以下链接。

## 来源

*   [角度团队。 “路由和导航”。 _谷歌_ 2018年6月8日访问。](https://angular.io/guide/router)
*   [侯赛因，阿西姆。 “Angular 5：Routing”。 _codecraft.tv_ 。 2018年6月8日访问。](https://codecraft.tv/courses/angular/routing)
*   [史密斯，彼得。 “角度中的3种路径加载，用500个单词解释”。 _Upstate Interactive_ ，2017年5月3日。访问时间为2018年6月8日。](https://blog.upstate.agency/3-types-of-route-loading-in-angular-explained-in-500ish-words-f22976e1f60b)
*   [Koretskyi，Maxim。 “避免与Angular模块的常见混淆”。 _Angular In Depth_ ，2017年8月10日。访问2018年6月8日。](https://blog.angularindepth.com/avoiding-common-confusions-with-modules-in-angular-ada070e6891f)

## 资源

*   [角度文档](https://angular.io/guide)
*   [路由和导航](https://angular.io/guide/router)
*   [Angular 5：Asim Hussain的路由教程](https://codecraft.tv/courses/angular/routing/overview)
*   [角度深度](https://blog.angularindepth.com)
*   [Angular GitHub存储库](https://github.com/angular/angular)
*   [角度CLI](https://cli.angular.io)