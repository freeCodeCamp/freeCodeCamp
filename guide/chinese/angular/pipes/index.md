---
title: Pipes
localeTitle: 管道
---
# 管道

#### 动机

输出数据转换。它们确保数据在加载到用户屏幕上时处于理想的格式。通常，数据会在幕后进行转换。使用管道，转换数据可以在模板HTML中进行。管道直接转换模板数据。

管道看起来不错，方便。它们有助于保持组件类的基本转换。从技术上讲，管道封装了数据转换逻辑。

#### 输出转换

如前一节所述，管道内联转换数据。管道语法与shell脚本相关联。在许多脚本中，命令的一部分的输出作为输入通过_管道传输_到下一部分作为输入。同样的趋势是角管的特征。

在Angular中，存在许多与模板HTML中的数据交互的方式。管道可以应用于将数据解析到模板HTML中的任何位置。它们可以在微结构逻辑和innerHTML变量插值中发生。管道可以解释所有转换而无需添加到组件类。

管道也是_可链接的_ 。您可以一个接一个地集成管道，以执行日益复杂的转换。作为专业的数据变换器，管道几乎不是微不足道的。

#### 用例

Angular预先包装了一套基本的管道。与其中几个人合作将发展直觉来处理其余的问题。以下列表提供了两个示例。

*   AsyncPipe
    
*   DatePipe
    

这两个执行简单的任务。它们的简单性非常有益。

##### AsyncPipe

本节要求对Promises或Observables有基本的了解，以便充分理解。 AsyncPipe可以在两者中的任何一个上运行。 AsyncPipe从Promises / Observables中提取数据作为下一步的输出。

对于Obervables，AsyncPipe会自动订阅数据源。无论数据来自何处，AsyncPipe都会订阅源可观察对象。 `async`是AsyncPipe的语法名称，如下所示。

```html

<ul *ngFor=“let potato of (potatoSack$ | async); let i=index”> 
  <li>Potatoe {{i + 1}}: {{potato}}</li> 
 </ul> 
```

在示例中， `potatoSack$`是一个Observable，等待上传土豆。一旦马铃薯同步或异步到达，AsyncPipe就会将它们作为_可迭代_数组接收。然后列表元素填满土豆。

##### DatePipe

格式化日期字符串需要使用JavaScript `Date`对象进行相当多的黑客攻击。假设给定输入是有效的时间格式，DatePipe提供了一种格式化日期的强大方法。

```typescript
// example.component.ts 
 
 @Component({ 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  timestamp:string = '2018-05-24T19:38:11.103Z'; 
 } 
```

```html

<!-- example.component.html --> 
 
 <div>Current Time: {{timestamp | date:'short'}}</div> 
```

上述`timestamp`的格式是[ISO 8601 1](https://en.wikipedia.org/wiki/ISO_8601) - 不是最容易阅读的。 DatePipe（ `date` ）将ISO日期格式转换为更传统的`mm/dd/yy, hh:mm AM|PM` 。还有许多其他格式选项。所有这些选项都在[官方文档中](https://angular.io/api/common/DatePipe) 。

#### 创建管道

虽然Angular只有一定数量的管道，但`@Pipe`装饰器允许开发人员创建自己的管道。该过程从`ng generate pipe [name-of-pipe]` ，用一个优选的文件名替换`[name-of-pipe]` 。这是一个[Angular CLI](https://cli.angular.io)命令。它产生以下结果。

```typescript
import { Pipe, PipeTransform } from '@angular/core'; 
 
 @Pipe({ 
  name: 'example' 
 }) 
 export class ExamplePipe implements PipeTransform { 
  transform(value: any, args?: any): any { 
      return null; 
  } 
 } 
```

此管道模板简化了自定义管道创建。 `@Pipe`装饰器告诉Angular该类是一个管道。 `name: 'example'`的值`name: 'example'` ，在本例中是`example` ，是Angular在扫描自定义管道的模板HTML时识别的值。

关于类逻辑。 `PipeTransform`实现提供了`transform`函数的指令。此函数在`@Pipe`装饰器的上下文中具有特殊含义。它默认接收两个参数。

`value: any`是管道接收的输出。想想`<div>{{ someValue | example }}</div>` 。 someValue的值传递给`transform`函数的`value: any`参数。这与ExamplePipe类中定义的`transform`函数相同。

`args?: any`管道可选择接收的任何参数。想想`<div>{{ someValue | example:[some-argument] }}</div>` 。 `[some-argument]`可以被任何一个值替换。该值将传递给`transform`函数的`args?: any`参数。也就是说，在ExamplePipe的类中定义了`transform`函数。

无论函数返回什么（ `return null;` ）都成为管道操作的输出。查看下一个示例以查看ExamplePipe的完整示例。根据管道接收的变量，它将输入大写或小写为新输出。无效或不存在的参数将导致管道返回与输出相同的输入。

```typescript
// example.pipe.ts 
 
 @Pipe({ 
  name: 'example' 
 }) 
 export class ExamplePipe implements PipeTransform { 
  transform(value:string, args?:string): any { 
    switch(args || null) { 
      case 'uppercase': 
        return value.toUpperCase(); 
      case 'lowercase': 
        return value.toLowerCase(); 
      default: 
        return value; 
    } 
  } 
 } 
```

```typescript
// app.component.ts 
 
 @Component({ 
  templateUrl: 'app.component.html' 
 }) 
 export class AppComponent { 
  someValue:string = "HeLlO WoRlD!"; 
 } 
```

```html

<!-- app.component.html --> 
 
 <!-- Outputs “HeLlO WoRlD!” --> 
 <h6>{{ someValue | example }}</h6> 
 
 <!-- Outputs “HELLO WORLD!” --> 
 <h6>{{ someValue | example:'uppercase' }}</h6> 
 
 <!-- Outputs “hello world!” --> 
 <h6>{{ someValue | example:'lowercase' }}</h6> 
```

理解上面的示例意味着您了解Angular管道。还有一个话题要讨论。

#### 纯净和不纯的管道

到目前为止，你所看到的一切都是_纯粹的_管道。 `pure: true`默认情况下在`@Pipe`装饰器的元数据中设置`pure: true` 。两者之间的差异构成了Angular的变化检测。

只要其派生输入的值发生更改，纯管道就会自动更新。管道将重新执行，以在输入值发生可检测的变化时产生新的输出。可检测的变化由Angular的变化检测循环确定。

每当发生更改检测周期时，Impure管道都会自动更新。 Angular的变化检测经常发生。它表示组件类的成员数据是否发生了更改。如果是这样，模板HTML将使用更新的数据进行更新。否则，什么都不会发生。

在不纯的管道的情况下，无论是否存在可检测的变化，它都将更新。更改检测循环时，不纯的管道会更新。不纯的管道通常消耗大量资源，通常是不明智的。也就是说，它们更像是逃生舱。如果您需要检测敏感管道，请在`@Pipe`装饰器的元数据中切换`pure: false` 。

#### 结论

那涵盖了管道。管道有很多超出本文范围的潜力。管道为组件的模板HTML提供简洁的数据转换。在数据必须进行小规模转换的情况下，它们是很好的做法。

## 来源

1.  [维基社区。 _ISO 8601_ 。维基百科。 2018年5月27日访问](https://en.wikipedia.org/wiki/ISO_8601)

## 资源

*   [角度文档](https://angular.io/guide/pipes)
*   [Angular GitHub存储库](https://github.com/angular/angular)
*   [用Angular预包装的管道列表](https://angular.io/api?query=pipe)
*   [角度CLI](https://cli.angular.io)