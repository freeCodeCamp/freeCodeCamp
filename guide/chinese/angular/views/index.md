---
title: Views
localeTitle: 查看
---
# 查看

#### 动机

视图提供了必要的抽象层。他们让Angular独立于平台特定的实用程序。作为一种跨平台技术，Angular使用其视图与平台连接。

对于Angular模板HTML中的每个元素，都有一个相应的视图。 Angular建议通过这些视图与平台进行交互。虽然直接操纵仍然可行，但Angular警告它。 Angular提供了自己的应用程序编程接口（API）来替换本机操作。

对特定于平台的API的回避视图会产生影响。在Web浏览器中开发Angular时，元素存在于两个位置：DOM和视图。仅与DOM混淆不会影响视图。

由于Angular不与平台接口，因此会产生不连续性。视图应该一对一地镜像平台。否则，Angular会浪费资源管理与其不匹配的元素。如果删除元素，这很糟糕。

这些差异使得视图显得不必要。永远不要忘记Angular是一个普遍的开发平台。视图是此目的的必要抽象。

通过遵守视图，Angular应用程序将在所有受支持的开发平台上运行。平台包括Web，Android和Apple iOS。

#### 注意

从这里开始，本文假设一个Web浏览器环境。您可以通过更适用于您首选平台的内容轻松替换DOM。

#### 观点是什么？

视图几乎就像他们自己的虚拟DOM。每个视图都包含对DOM的相应部分的引用。视图内部是反映本节内容的节点。 Angular为每个DOM元素分配一个视图节点。每个节点都包含对匹配元素的引用。

当Angular检查更改时，它会检查视图。 Angular避免了引擎盖下的DOM。视图代表它引用DOM。还有其他机制来确保视图更改呈现给DOM。相反，对DOM的更改不会影响视图。

同样，除了DOM之外，视图在所有开发平台上都很常见。即使开发一个平台，视图仍被视为最佳实践。他们保证Angular对DOM有正确的解释。

第三方库可能不存在视图。对于这种情况，直接DOM操作是一个逃避的方法。当然，不要指望应用程序跨平台运行。

#### 视图类型

有两种主要类型的视图：嵌入式和主机式。

还存在视图容器。它们包含嵌入式和主机视图，通常称为简单的“视图”。

每个`@Component`类都使用Angular注册一个视图容器（视图）。新组件生成针对特定DOM元素的自定义选择器。无论出现在何处，视图都会附加到该元素。 Angular现在知道组件存在于查看视图模型。

主机视图附加到使用工厂动态创建的组件。工厂提供了视图实例化的蓝图。这样，应用程序可以在运行时实例化组件的主机视图。主机视图在其实例化时附加到组件的包装器。该视图存储描述传统组件功能的数据。

`<ng-template></ng-template>`类似于HTML5 `<template></template>`元素。 Angular的`ng-template`适用于嵌入式视图。与主机视图不同，这些视图不会附加到DOM元素。它们与主机视图相同，因为它们都存在于视图容器内。

请记住， `ng-template`不是DOM元素。它后来被注释掉了，只留下了嵌入式视图节点。

差异取决于输入数据;嵌入式视图不存储组件数据。它们将一系列元素存储为包含其模板的节点。该模板构成了`ng-template`所有innerHTML。嵌入视图中的每个元素都是其自己的单独视图节点。

#### 主机视图和容器

主机视图_托管_动态组件。视图容器（视图）自动附加到模板中已有的元素。视图可以附加到除组件类特有的元素之外的任何元素。

想想传统的组件生成方法。它首先创建一个类，用`@Component`装饰，然后填充元数据。对于模板的任何预定义组件元素，都会出现此方法。

尝试使用Angular命令行界面（CLI）命令： `ng generate component [name-of-component]` 。它产生以下结果。

```typescript
import { Component, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html', 
  styleUrls: ['./example.component.css'] 
 }) 
 export class ExampleComponent implements OnInit { 
  constructor() { } 
 
  ngOnInit() { } 
 } 
```

这将使用选择器`app-example`创建组件。这会将视图容器附加到模板中的`<app-example></app-example>` 。如果这是应用程序的根，则其视图将封装所有其他视图。根视图标志着Angular的应用程序的开始。

动态创建组件并在Angular视图模型中注册它们需要一些额外的步骤。结构指令有助于管理动态内容（ `*ngIf, *ngFor, and *ngSwitch…` ）。但是，指令不能扩展到更大的应用程序。太多的结构指令使模板复杂化。

这是从现有类逻辑实例化组件派上用场的地方。这些组件需要创建可以插入视图模型的主机视图。主机视图保存组件的数据，以便Angular识别其结构目的。

##### 主机视图续

每个组件都有一个类定义。然而，JavaScript不支持类。类是语法糖。它们生成包含组件工厂的函数。

工厂是主持人观点的蓝图。他们构建视图以代表其组件与Angular交互。主机视图附加到DOM元素。从技术上讲，任何元素都可以，但最常见的目标是`<ng-component></ng-component>` 。

必须首先存在用于保存视图的视图容器（视图）。 `<ng-container></ng-container>`是附加视图容器的好地方。视图容器是同样类型的视图，也适用于模板类元素。

来自`@angular/core`一些帮助器和引用提供了其他所需的实用程序。以下示例将所有内容放在一起。

```typescript
// another.component.ts 
 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  template: ` 
  <h1>Another Component Content</h1> 
  <h3>Dynamically Generated!</h3> 
  ` 
 }) 
 export class AnotherComponent { } 
```

```typescript
// example.component.ts 
 
 import { AfterViewInit, Component, ViewChild, 
 ViewContainerRef, ComponentFactoryResolver } from '@angular/core'; 
 import { AnotherComponent } from './another.component'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> 
  <h3>End of Application</h3> 
  `, 
  entryComponents: [ AnotherComponent ] 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor(private resolve: ComponentFactoryResolver) { } 
 
  ngAfterViewInit() { 
    const factory = this.resolve.resolveComponentFactory(AnotherComponent); 
    this.ctr.createComponent(factory); 
  } 
 } 
```

假设AnotherComponent和ExampleComponent都在同一模块下声明。 AnotherComponent是一个动态添加到ExampleComponent视图中的简单类组件。 ExampleComponent的`entryComponents`元数据必须包含用于[引导的](https://angular.io/guide/bootstrapping) AnotherComponent。

虽然ExampleComponent是模板的一部分，但AnotherComponent仍然是分离的。它从ExampleComponent动态渲染到模板中。

存在两个视图容器： `<app-example></app-example>`和`<ng-container></ng-container>` 。此示例的主机视图将插入`ng-container` 。

`@ViewChild`查询完成后，将触发`AfterViewInit`生命周期钩子。使用_模板引用变量_ `#container` `@ViewChild` ， `@ViewChild`引用`ng-container`作为`ctr` 。

`ViewContainerRef`是视图容器（视图）的引用类型。 `ViewContainerRef`引用支持插入其他视图的视图。 `ViewContainerRef`包含更多用于管理其包含视图的方法。

通过依赖注入，构造函数实例化Angular的`ComponentFactoryResolver`服务的实例。此服务提取AnotherComponent的工厂函数（主机视图蓝图）。

`createComponent`的单个参数需要工厂。 `createComponent`函数派生自`ViewContainerRef` 。它在从组件工厂派生的主机视图下实例化AnotherComponent。

然后主机视图将插入到视图容器中。 `<ng-component></ng-component>`将组件包装在视图容器内。它附有上述主机视图。 `ng-component`是主机视图与DOM的连接。

还有其他方法可以从组件动态创建主机视图。其他方式往往[侧重于优化](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866) 。

`ViewContainerRef`拥有强大的API。它可以管理托管或嵌入其视图中的任意数量的视图。 API包括视图操作，例如插入，移动和删除。这允许您通过Angular的视图模型操作DOM。这是最佳实践，以便Angular和DOM相互匹配。

#### 嵌入式视图

注意：嵌入视图附加到其他视图没有添加输入。主机视图使用来自其主机视图的输入数据附加到DOM元素，并将其描述为组件。

结构指令创建[围绕一大块HTML内容](https://angular.io/guide/structural-directives#the-asterisk--prefix)的[`ng-template`](https://angular.io/guide/structural-directives#the-asterisk--prefix) 。该指令的host元素附加了一个视图容器。这使得内容可以有条件地呈现为其预期的布局。

`ng-template`保存嵌入视图节点，表示其innerHTML中的每个元素。 `ng-template`绝不是DOM元素。它自我评论。标签定义其嵌入视图的扩展。

#### 嵌入式视图续

实例化嵌入式视图不需要超出其自身引用的外部资源。 `@ViewChild`查询可以获取它。

使用模板引用，从中调用`createEmbeddedView`就可以了。引用的innerHTML成为其自己的嵌入式视图实例。

在下一个示例中， `<ng-container></ng-container>`是一个视图容器。 `ng-container`在编译期间被注释掉，就像`ng-template` 。因此，它提供了用于插入嵌入视图同时保持DOM倾斜的出口。

嵌入视图模板将插入`ng-container`的布局位置。除了视图容器之外，这个新插入的视图没有额外的视图封装。请记住它与主机视图的不同之处（主机视图附加到其`ng-component`元素包装器）。

```typescript
import { Component, AfterViewInit, ViewChild, 
 ViewContainerRef, TemplateRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>Application Content</h1> 
  <ng-container #container></ng-container> <!-- embed view here --> 
  <h3>End of Application</h3> 
 
  <ng-template #template> 
    <h1>Template Content</h1> 
    <h3>Dynamically Generated!</h3> 
  </ng-template> 
  ` 
 }) 
 export class ExampleComponent implements AfterViewInit { 
  @ViewChild("template", { read: TemplateRef }) tpl: TemplateRef<any>; 
  @ViewChild("container", { read: ViewContainerRef }) ctr: ViewContainerRef; 
 
  constructor() { } 
 
  ngAfterViewInit() { 
    const view =  this.tpl.createEmbeddedView(null); 
    this.ctr.insert(view); 
  } 
 } 
```

`@ViewChild`查询_模板引用变量_ `#template` 。这提供类型的模板参考`TemplateRef` 。 `TemplateRef`包含`createEmbeddedView`函数。它将模板实例化为嵌入式视图。

`createEmbeddedView`的单个参数用于上下文。如果您想传递其他元数据，可以在此处作为对象进行传递。这些字段应与`ng-template`属性匹配（ `let-[context-field-key-name]=“value”` ）。传递`null`表示不需要额外的元数据。

第二个`@ViewChild`查询提供对`ng-container`的引用，作为`ViewContainerRef` 。嵌入式视图仅附加到其他视图，而不是DOM。 `ViewContainerRef`引用嵌入视图中的视图。

嵌入式视图也可以插入到`<app-example></app-example>`的组件视图中。此方法将视图定位在ExampleComponent视图的最后。但是，在这个例子中，我们希望内容显示在`ng-container`所在的中间位置。

`ViewContainerRef` `insert`函数_将_嵌入视图插入`ng-container` 。视图内容在ExampleComponent视图中间的预期位置显示。

#### 结论

不建议使用特定于平台的方法操作DOM。创建和管理一组紧凑的视图使Angular和DOM保持在同一页面上。更新视图会通知Angular当前DOM的状态。对视图的更新也会延续到DOM显示的内容。

Angular为视图交互提供了灵活的API。由于这种抽象级别，开发独立于平台的应用程序是可能的。当然，依赖于平台的策略的后退诱惑仍然存在。除非你有充分的理由不这样做，否则请坚持使用API​​ Angular提供的观点。这将在所有平台上产生可预测的结果。

查看以下资源！本文仅涉及表面。对于一篇文章，视图还有很多其他用例。

## 来源

*   [AngularInDepth.com。 “组件视图，主机视图，嵌入式视图”，＃40423772。 2017年7月11日。“视图，主机视图和嵌入视图之间有什么区别”](https://stackoverflow.com/questions/40423772/what-is-the-difference-between-a-view-a-host-view-and-an-embedded-view)
    
*   [角度团队。 “结构指令”。 _谷歌_ 2018年5月31日访问](https://angular.io/guide/structural-directives)
    
*   [Koretskyi，Maxim。 “使用ViewContainerRef探索Angular DOM操作技术”。 _Angular In Depth_ ，2017年3月4日。访问2018年5月30日。](https://blog.angularindepth.com/exploring-angular-dom-abstractions-80b3ebcfc02)
    
*   [Koretskyi，Maxim。 “实现高级DOM操作方案”。 _Youtube_ ，由ng-conf上传，2018年4月19日。访问2018年5月30日](https://www.youtube.com/watch?v=vz9cNCkaPsY)
    
*   [Koretskyi，Maxim。 “在Angular中使用DOM：意外后果和优化技术”。 _Angular In Depth_ ，2017年5月3日。访问2018年5月31日](https://blog.angularindepth.com/working-with-dom-in-angular-unexpected-consequences-and-optimization-techniques-682ac09f6866)
    

## 资源

*   [角度文档](https://angular.io/guide/pipes)
    
*   [角度深度](https://blog.angularindepth.com)
    
*   [ViewContainerRef](https://angular.io/api/core/ViewContainerRef)
    
*   [TemplateRef](https://angular.io/api/core/TemplateRef)
    
*   [Angular GitHub存储库](https://github.com/angular/angular)
    
*   [角度CLI](https://cli.angular.io)