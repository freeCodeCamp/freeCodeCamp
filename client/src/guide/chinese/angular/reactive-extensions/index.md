---
title: Reactive Extensions
localeTitle: 反应性扩展
---
# Angular中的反应性扩展

#### 动机

JavaScript的反应性扩展（RxJS）是_可观察_数据流的库。 RxJS在命令行执行`ng new [name-of-application]`时安装Angular。这使用Angular命令行界面（CLI）。 RxJS补充了数据通过`Observable`流程。 `Observable`对象有助于_可迭代_数据的流动。

数据流不是主要用例。毕竟，数据流并行事件流。事件发出，因此应用程序知道数据何时到达。虽然事件流构成了RxJS补充的核心，但本文也将它们称为数据流。

流同步（立即）或异步（超时）执行。 RxJS通过`Observable`数据流轻松处理这两种情况。严格的异步性是可以转换的。使用内存中的_可迭代_数据会立即发生，而外部数据获取需要时间。 Angular支持RxJS库，因此它可以处理带有数据流的两种用例。

#### 反应式编程

在深入研究之前，了解支持RxJS库的范例非常重要。如上所述，它通过`Observable`对象工作，该对象简化了事件发射数据。

RxJS围绕基本`Observable` 。它的整个图书馆补充了它的功能。 RxJS甚至包括其他对象，包括`Subject` ， `Subscription`和`Observer` 。每个都是它自己的基本`Observable`的自定义变体。

RxJS源于反应式编程范例。这种范式引入了_可观察的_模式。在其中存在这个关键思想：单个`Observable`在其所有`Observer`被通知时发出。 `Observer` _订阅_ `Observable`以便他们收到通知。此通知可能意味着几件事。

它可能表示数据更改或数据到达，如本文中所述。它可能表示影响`Observer`的应用程序的某些部分发生了变化。

这种_可观察的_模式也力图解耦概念。 `Observable`应该能够在没有任何`Observer`的情况下运行，反之亦然。这通常意味着它们可以独立而不是完全相互作用。

如果好奇，您可以通过阅读[本维基百科文章](https://en.wikipedia.org/wiki/Reactive_programming)了解有关反应式编程基础的更多信息。本节介绍了本文其余部分所需的内容。

#### 观测

为了快速重申，可以_观察到_ `Observable` 。这样一个`Observable`可以根据数据流为其依赖项提供反馈。在RxJS中， `Observable`是它自己的工厂函数，用于创建`Observable`对象。他们的基本蓝图如下。

```typescript
import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next(data); 
 }); 
```

`.next`在向观察者发出事件的同时传递数据。 `Observable`使用`.next`从其`.create`回调中发出数据。它接受一个表示要发出的数据的参数。 `Observable`还没有在JavaScript中实现。 RxJS提供了其库的替代品。

下一步是观察员。要告诉函数或对象_观察_ `Observable` ，使用以下语法： `observable.subscribe(observer)` 。另一种看待它的方法是`producer.subscribe(consumer)` 。 Observable通过调用`.next` _生成_数据。然后在接收数据时通知消费者。

```typescript
import { Observable } from 'rxjs'; 
 
 const observable = Observable.create((source) => { 
  source.next("Hello"); 
  source.next("World!"); 
 }); 
 
 observable.subscribe((word) => console.log(word)); 
 // console output 
 /* 
 Hello 
 World! 
 */ 
```

两个`.next`调用发生在`Observable`的`.create`回调（数据生成器）中。这导致观察者（数据使用者）的两个单独的控制台输出。

`.next`的两次调用表示同步数据流。 Streams将数据概念化为线性有序流。它可以根据数据的可用性同步或异步解析。

如果包含流的数据容易获得，则它同步执行。否则，流将超时异步解析。在任何一种情况下，数据的顺序总是相同的，这取决于observable中`.next`的调用。

`Observable`像队列一样运行。在一段数据上调用`.next`会将其推送到队列的后面。一旦解决了数据从前面弹出。

`Observable`数据流具有巨大的吸引力。它们在顺序上是确定性的，并且根据数据可用性而合理地执行。此外，任何数量的观察者都可以_观察_数据源`Observable` 。这意味着数据可以生成一次并在一次操作中随处发出。

回调函数不是使用数据的唯一方法。观察者可以作为生产者和消费者彼此链接。

```typescript
const observableI = Observable.create((source) => { 
  source.next("Hello World!"); 
 }); 
 
 const observableII = new Observable().subscribe((v) => console.log(v)); 
 
 observableI.subscribe(observableII); 
 // console output 
 /* 
 Hello World! 
 */ 
```

`.subscribe`位于`Observable`对象上。你可以用一个`Observable`作为它的源（生产者）和另一个observable作为它的参数（消费者）来调用它。数据可以通过任意数量的可观察量流动（发射）。

#### JavaScript的反应性扩展（RxJS）

流数据很好，但是如果observable不能编辑流，那又有什么意义呢？这就是RxJS库发挥作用的地方。它提供了对数据流执行各种突变的运算符。

Angular利用这些运算符来转换传入的数据。开发人员可以使用RxJS运算符从传入流中删除任何不必要的数据。这样可以节省内存并减少对额外转换逻辑的需求。

RxJS提供与标准`Observable`偏差，如`Subject` ， `Subscription`和`Observer` 。将这些偏差视为传统`Observable`特殊风味。他们没有必要使用图书馆。也就是说，像`Subject`这样的变体具有超越标准`Observable`令人难以置信的用例。

本文坚持使用标准的`Observable` 。来自RxJS的所有数据流运算符都通过`Observable`工作。

许多核心RxJS运营商来自JavaScript的Array Extras。 Array对象的原型包含许多与RxJS库相似的内容。这些也被称为'额外'。数组是类似于可观察数据流的类似流的结构。

为了更好地理解RxJS运算符，本文将简要介绍JavaScript的Array Extras。每个功能几乎与其RxJS对应功能相同。区别仅在于数据的格式（可迭代数组与可迭代流）。

#### 阵列附加功能

数组包含许多实用方法。这些方法称为Array Extras。它们都存在于Array对象的原型中。下面的列表包含五个与RxJS并行的额外内容。

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

对于每个示例，数组迭代自身以产生最终结果。

`.reduce`将数组最小化为单个值。 `.filter`使用布尔值评估修剪数组。 `.map`逐个元素地转换数组。 `.every`根据布尔条件计算整个数组的true或false。 `.forEach`遍历数组的元素。

数组模型流。它们是彼此按顺序并逐个迭代。 Observable以类似的方式将数据元素简化为他们的观察者。这就是RxJS在其库中包含每个Array Extra的逻辑对应的原因。当然，与Array Extras相比，RxJS提供了更多自己的运算符。

#### 基本的RxJS运算符

实际上有一整套图书馆的RxJS运营商。本文重点介绍下面列出的Array Extras的启发。

*   `.reduce`
*   `.filter`
*   `.map`
*   `.every`
*   `.forEach`

之前的列表没有任何变化。您对Array Extras的理解适用于RxJS运算符。唯一能看到的是一个名为`.pipe`的函数，在接下来的几个例子中会有很多用处。 `.pipe`链接RxJS运算符。来自前一个运算符的结果将进入下一个运算符直到最终运算符。然后，结果数据从可观察流中发出。

请注意下面的标准示例。使用它来比较每个运营商对发出的数据流的影响。

```typescript
import { Observable, from } from 'rxjs'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 1 
 2 
 3 
 4 
 5 
 */ 
```

`.from`将数组转换为`Observable`对象，该对象在每个数组元素上调用`.next` 。 `.pipe`函数接受任意数量的参数作为数组运算符。这是每个运营商实施的地方。运算符按照它们的实现顺序执行简化数据，作为`.pipe`参数。

##### 减少

`.reduce`在发出之前将数据流最小化为单个值。

```typescript
import { reduce } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  reduce((accum, val) => (accum + val)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 15 
 */ 
```

##### 过滤

`.filter`修剪流，消除不满足其条件的流值。

```typescript
import { filter } from 'rxjs/operators'; 
 
 const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
  filter((val) => (val % 2 === 0)) // filters out odd numbers 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 4 
 */ 
```

##### 地图

`.map`定位并转换每个正在进行的流值。

```typescript
const stream: number[] = [1, 2, 3, 4, 5]; 
 
 const observable: Observable<number> = from(stream).pipe( 
    map((val) => (val + 1)) 
 ); 
 observable.subscribe((val: number) => console.log(val)); 
 
 // console output 
 /* 
 2 
 3 
 4 
 5 
 6 
 */ 
```

##### 挑战：每一个和每一个

了解`.every`和`.forEach`作为Array Extras，尝试将它们实现为RxJS运算符。请随意使用前面的示例进行指导。经过大量阅读后，一点点的练习都有很长的路要走！

#### Angular中的HTTP

本节将RxJS和Angular结合在一起，展示它们如何相互作用。通常，Angular提供的服务将提供`Observable` 。然后， `Observable`的数据流可以使用带有`.pipe` RxJS运算符进行`.pipe` 。

Angular通过`@angular/common/http`提供`HttpClient`服务。 `HttpClientModule`也来自`@angular/common/http`并导出`HttpClient`服务。应用程序的根模块必须导入`HttpClientModule` 。这使得`HttpClientModule`从应用程序的任何位置_注入_ 。

`HttpClientModule`服务发出HTTP请求。这些请求是异步的。让他们对Angular感兴趣的是如何处理请求。每个请求都会返回一个`Observable` 。 RxJS可以把它带走。

即将到来的示例使用由[Typicode](https://jsonplaceholder.typicode.com)构建的公共API。 API为每个异步`GET`请求提供100个元素的数组。

```typescript
// ./models/post.model.ts 
 
 export interface Post { 
  userId: number; 
  id: number; 
  title: string; 
  body: string; 
 } 
```

```typescript
// ./services/json.service.ts 
 
 import { HttpClient } from '@angular/common/http'; 
 import { Injectable } from '@angular/core'; 
 
 import { Observable, from } from 'rxjs'; 
 import { switchMap, map, filter, reduce } from 'rxjs/operators'; 
 
 import { Post } from '../models/post.model'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class JsonService { 
  constructor(private http: HttpClient) { } 
 
  getPostsByUserId(id: number): Observable<any> { 
    const trim$ = (stream) => from(stream) 
      .pipe( 
        filter((post: Post) => +post.userId === +id), 
        map((post: Post) => ({ title: post.title, body: post.body })), 
        reduce((accum: Post[], post: Post) => accum.concat([post]), []) 
      ); 
 
    return this.http.get("https://jsonplaceholder.typicode.com/posts") 
      .pipe( 
        switchMap((value) => trim$(value)) 
      ); 
  } 
 } 
```

```typescript
// ./components/example/example.component.ts 
 
 import { Component } from '@angular/core'; 
 
 import { JsonService } from '../../services/json.service'; 
 import { Post } from '../../models/post.model'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Request User Posts</h1> 
  <span>User: </span><input #userInput> 
  <button (click)="requestForPosts(userInput.value)">REQUEST</button> 
  <hr> 
  <ul> 
    <div *ngIf="userPosts"> 
      <div *ngFor="let post of userPosts"> 
        <h3>{{ post.title }}</h3> 
        <p>{{ post.body }}</p> 
      </div> 
    </div> 
    <h3 *ngIf="!userPosts">No posts shown...</h3> 
  </ul> 
  ` 
 }) 
 export class ExampleComponent { 
  userPosts: Post[]; 
 
  constructor(private json: JsonService) { } 
 
  requestForPosts(id: number): void { 
    this.json.getPostsByUserId(id) 
      .subscribe((posts: Post[]) => { this.userPosts = posts.length > 0 ? posts : null; }); 
  } 
 } 
```

`json.service.ts`创建一个`Observable`的代表`component.example.ts` 。组件可以订阅返回的`Observable` 。到`Observable`解析数据流时，只会发出一个值。

对`jsonplaceholder.typicode.com`的请求产生一个包含100个帖子的单个数组。通过`HttpClient`的请求产生一个`Observable` 。运算符`switchMap`返回另一个`Observable` ，它覆盖当前流。变量`trim$`将`Observable`存储为其值。将`$`附加到用于存储`Observable`的变量是惯例。

`from` `jsonplaceholder.typicode.com`将数组转换为100值发射的`Observable` 。然后，RxJS运算符筛选流中的每个数据。他们删除与请求无关的流值。进行数据修剪，以使流值保持不必要的信息。最终结果再次作为单个数组连接在一起，向其观察者发出一个数组。

在`component.example.ts` ，JsonService引用返回刚才描述的`Observable` 。此方法在组件模板中单击按钮时调用。模板中的输入框也提供单个`id`参数。

按下按钮，JsonService返回一个发出单个数组的`Observable` 。 `.subscribe`对返回的`Observable`调用。然后，该组件将`userPosts`的值设置为等于发出的数组。

角度变化检测可以获取类数据的变化。模板更新和`*ngFor`确保`*ngFor`每个数组元素`userPosts`呈现自己的模板元素。

#### 结论

RxJS提供核心`Observable`及其运算符。该库使用`ng new [name-of-app]` （Angular CLI）从命令行自动安装。 RxJS核心类型和运算符分别下载到`rxjs`和`rxjs/operators` 。

即使您不使用CLI， `HttpClient`等服务仍然可用。如果RxJS不可用，则服务返回`Promise`而不是`Observable` 。与`Observable`不同， `Promise`对象是JavaScript的原生对象。这可能会在下一个官方JavaScript版本中发生变化。

也就是说，充分利用RxJS！任何可迭代的结构都可以容纳`Observable` 。有了它，整个RxJS库变得可用。其运营商有效地将数据从流转换为结果。此外，观察者可以订阅结果，从而提高数据的整体可移植性。

## 来源

*   [角度团队。 “RxJS库”。 _谷歌_ 2018年6月5日访问。](https://angular.io/guide/rx-library)
*   [福布斯，艾略特。 “使用Angular和Socket.io教程创建实时应用程序”。 _TutorialEdge.net_ ，2017年1月10日。访问2018年6月5日。](https://tutorialedge.net/typescript/angular/angular-socket-io-tutorial)
*   [RxJS团队。 “RxJS文档”。 _RxJS_ 。 2018年6月5日访问。](https://rxjs-dev.firebaseapp.com)
*   [Sukale，Ryan。 “Rxjs主题与可观察之间的差异”。 _TutorialHorizo​​n_ ，2017年3月23日。访问2018年6月5日。](https://javascript.tutorialhorizon.com/2017/03/23/rxjs-subject-vs-observable)
*   [维基百科社区。 “反应式编程”。 _维基百科_ ，2018年6月2日。访问2018年6月5日。](https://en.wikipedia.org/wiki/Reactive_programming)

## 资源

*   [角度文档](https://angular.io/guide)
*   [GitHub上的Angular](https://github.com/angular/angular)
*   [角度CLI](https://cli.angular.io)
*   [RxJS和Angular](https://angular.io/guide/rx-library)
*   [反应式编程](https://en.wikipedia.org/wiki/Reactive_programming)
*   [JavaScript的反应性扩展](https://rxjs-dev.firebaseapp.com)