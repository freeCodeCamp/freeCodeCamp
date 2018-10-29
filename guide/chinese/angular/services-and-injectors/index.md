---
title: Services and Injectors
localeTitle: 服务和注射器
---
# 服务和注射器

#### 动机

组件负责呈现到模板中的数据。拥有外部_服务_可以简化这一责任。另外，封装外部更容易维护。

将过多的职责委托给单个组件会使组件类复杂化。如果这些责任适用于多个组件怎么办？复制和粘贴这种逻辑是非常糟糕的做法。未来对逻辑的任何更改都将难以实现和测试。

Angular意味着通过服务和依赖注入来解决这个问题。这两个概念协同工作以提供_模块化_功能。

组件也不需要提供任何无关的信息。服务代表其_服务_的组件导入其运行所需的内容。组件只需要实例化服务。从那里，他们用_服务_实例化的服务实例自己的需要。

至于测试和未来的修改，所有逻辑都集中在一个地方。该服务从其源实例化。对源的测试和修改适用于注入服务的任何位置。

#### 服务简介

服务是Angular中可用的一种_原理图_ 。它由命令行界面（CLI） `ng generate service [name-of-service]` ： `ng generate service [name-of-service]` 。将`[name-of-service]`替换为更好的名称。 CLI命令产生以下内容。

```typescript
import { Injectable } from '@angular/core'; 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  constructor() { } 
 } 
```

服务的逻辑在同类中是不同的。 Angular将类解释为基于`@Injectable`装饰器的_可注入_服务。注射服务必须_注册_注射器。

该组件在注入器提供该实例时实例化服务。请继续阅读下一节，了解有关喷油器的更多信息。

提供的`@Injectable`元数据字段`providedIn: 'root'`以当前应用程序的根模块（ `app.module.ts` ）为目标。它注册到模块的喷油器的服务，以便它可以_注入_该服务到任何孩子。

注射器是Angular依赖注射系统的构建模块。在继续提供服务之前，注射器是集中注意力的好地方。

#### 喷油器

从`app.module.ts`开始的应用程序包含一个注入器层次结构。它们与应用程序树中的每个模块和组件一起存在。

![应用程序层次结构](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image5.png)

绿色圆圈表示注射器。它们为实例化组件提供服务实例。根据注册服务的注入器，组件可能有也可能没有。

在应用程序根目录（ `app.module.ts` ）注册的服务可供所有组件使用。组件的注入器可能没有注册某个服务。如果是这种情况并且组件请求其实例化，则注入器将推迟到其父实例。这种趋势持续到达根注入器或找到服务。

查看图表，假设服务在B点的注入器处注册。 C点和向下的所有组件都无法访问B注入器处注册的服务。注射器永远不会将他们的孩子推迟到服务实例。

#### 依赖注入

有多种方法可以使用应用程序的注入器注册服务。

`@Injectable`的`providedIn: 'root'`元数据字段提供了最推荐的方法。 Angular 6发布了此元数据字段。

如前所述， `providedIn: 'root'`使用根模块注入器注册服务。因此，它可以在整个应用程序中实例化。

`providedIn: 'root'`的新颖性`providedIn: 'root'`是_树木震动_ 。如果该服务，尽管其注册未使用时，它会从在运行时应用_动摇_ 。这样它就不会消耗任何资源。

另外两种方式更直接，更传统。当然，他们不提供树木摇晃。

服务可以向组件树中的任何注入器注册。您在`@Component`元数据字段中将服务作为提供者插入： `providers: []` 。该组件及其子组件可以使用该服务

在第三个注册策略中， `providers: []`元数据在`@NgModule`装饰器中作为自己的字段存在。该服务可从模块实例化到底层组件树。

请记住，与`@NgModule` `providedIn: 'root'` ， `@NgModule`注册不提供树抖动。两种策略都是相同的。一旦服务向`@NgModule`注册，即使应用程序未使用它，它也会消耗资源。

#### 服务继续

接下来写下一个实际的服务。回顾一下，服务代表应用程序的组件处理某些功能。

服务擅长处理常见操作。这样做可以使组件免除责任。它节省了不必在多个组件上重写常用操作的时间。它也更容易测试，因为代码在一个地方。更改只需要在一个地方进行，而无需在其他地方搜索。

#### 用例

几个例子对完全理解服务有很大帮助。

*   控制台日志
    
*   API请求
    

两者在大多数应用中都很常见。拥有处理这些操作的服务将降低组件的复杂性。

##### 控制台日志

此示例从基础`@Injectable`骨架构建。通过执行CLI（ `ng generate service [name-of-service]]` ）可以获得框架。

```typescript
// services/logger.service.ts 
 
 import { Injectable } from '@angular/core'; 
 
 interface LogMessage { 
  message:string; 
  timestamp:Date; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class LoggerService { 
  callStack:LogMessage[] = []; 
 
  constructor() { } 
 
  addLog(message:string):void { 
      // prepend new log to bottom of stack 
      this.callStack = [{ message, timestamp: new Date() }].concat(this.callStack); 
  } 
 
  clear():void { 
      // clear stack 
      this.callStack = []; 
  } 
 
  printHead():void { 
      // print bottom of stack 
      console.log(this.callStack[0] || null); 
  } 
 
  printLog():void { 
      // print bottom to top of stack on screen 
      this.callStack.reverse().forEach((logMessage) => console.log(logMessage)); 
  } 
 
  getLog():LogMessage[] { 
      // return the entire log as an array 
      return this.callStack.reverse(); 
  } 
 } 
```

LoggerService通过`@Injectable`元数据向根模块注册。因此它可以在`app.component.html`实例化。

```typescript
// app.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { LoggerService } from './services/logger.service'; 
 
 @Component({ 
  selector: 'app-root', 
  templateUrl: './app.component.html' 
 }) 
 export class AppComponent implements OnInit { 
  logs:object[] = []; 
 
  constructor(private logger:LoggerService) { } 
 
  updateLog():void { 
      this.logger.printHead(); 
      this.logs = this.logger.getLog(); 
  } 
 
  logMessage(event:any, message:string):void { 
      event.preventDefault(); 
 
      this.logger.addLog(`Message: ${message}`); 
      this.updateLog(); 
  } 
 
  clearLog():void { 
      this.logger.clear(); 
      this.logs = []; 
  } 
 
  ngOnInit():void { 
      this.logger.addLog(“View Initialized”); 
      this.updateLog(); 
  } 
 } 
```

模板HTML提供了对组件使用LoggerService的进一步了解。

```html

<!-- app.component.html --> 
 
 <h1>Log Example</h1> 
 
 <form (submit)="logMessage($event, userInput.value)"> 
  <input #userInput placeholder="Type a message..."> 
  <button type="submit">SUBMIT</button> 
 </form> 
 
 <h3>Complete Log</h3> 
 <button type="button" (click)="clearLog()">CLEAR</button> 
 <ul> 
  <li *ngFor="let log of logs; let i=index">{{ logs.length - i }} > {{ log.message }} @ {{ log.timestamp }}</li> 
 </ul> 
```

这有ToDo应用程序的感觉。您可以记录消息并清除消息日志。想象一下，如果服务中的所有逻辑都被推入AppComponent！它会使代码变得复杂。 LoggerService保留从核心AppComponent类封装的与日志相关的代码。

##### 获取请求

这是另外一个值得玩的例子。这个例子可以归功于[typicode的JSONPlaceholder 1](https://jsonplaceholder.typicode.com) 。 API是公开的，可以免费使用。

```typescript
import { Injectable } from '@angular/core'; 
 import { HttpClient } from '@angular/common/http'; 
 import { Observable } from 'rxjs'; 
 
 // https://jsonplaceholder.typicode.com 
 // public API created by typicode @ https://github.com/typicode 
 
 interface Post { 
  userId:number; 
  id:number; 
  title:string; 
  body:string; 
 } 
 
 @Injectable({ 
  providedIn: 'root' 
 }) 
 export class PlaceholderService { 
  constructor(private http:HttpClient) { } 
 
  getPosts():Observable<Post[]> { 
      return this.http.get('https://jsonplaceholder.typicode.com/posts'); 
  } 
 
  getPost(id:number):Observable<Post> { 
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`); 
  } 
 } 
```

这更像是一个独立的部分，而不是一个完全充实的例子。获取请求往往更适合作为可注入服务。替代方案是一个过于复杂的组件。注入的类订阅了PlaceholderService预配置的内容。

#### 结论

服务和依赖注入非常有用。它们允许开发人员封装通用逻辑并注入多个不同的组件。仅此一项对于任何未来的维护都是非常方便的。

注射器作为中间人。它们在实例化组件和注册服务库之间进行调解。注入者为其分支子项提供这些可实例化的服务。

有关服务和依赖注入的更多信息，请参阅下面的几个链接。

## 来源

1.  [Typicode， _JSONPlaceholder_ ，https： _//jsonplaceholder.typicode.com，2018年_ 5月29日访问。](https://jsonplaceholder.typicode.com)

## 资源

*   [角度文档](https://angular.io/docs)
    
*   [Angular GitHub存储库](https://github.com/angular/angular)
    
*   [依赖注入](https://angular.io/guide/dependency-injection-pattern)
    
*   [服务和DI介绍](https://angular.io/guide/architecture-services)