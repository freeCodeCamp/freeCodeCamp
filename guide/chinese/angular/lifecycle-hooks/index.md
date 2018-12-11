---
title: Lifecycle Hooks
localeTitle: 生命周期钩子
---
# 生命周期钩子

#### 动机

现代前端框架将应用程序从一个州转移到另一个州。数据推动了这些更新。这些技术与数据相互作用，而数据反过来又转变了状态。随着每个州的变化，有许多特定时刻可以获得某些资产。

在一个实例中，模板可能已准备好，另一个数据将完成上载。每个实例的编码都需要一种检测手段。生命周期钩子满足了这种需求。现代前端框架包含各种生命周期钩子。 Angular也不例外

#### 生命周期钩子解释

生命周期钩子是定时方法。它们的执行时间和原因各不相同。变更检测会触发这些方法。它们根据当前循环的条件执行。 Angular运行会不断更改其数据的检测。生命周期钩子有助于管理其效果。

这些钩子的一个重要方面是它们的执行顺序。它永远不会偏离。它们基于从检测周期产生的可预测的一系列负载事件来执行。这使得它们可以预测。某些资产仅在某个钩子执行后才可用。当然，钩子仅在当前变化检测周期中设定的某些条件下执行。

本文按其执行顺序（如果它们都执行）呈现生命周期钩子。某些条件值得钩子激活。有一些人只在组件初始化后执行一次。

所有生命周期方法均可从`@angular/core` 。虽然不是必需的，但Angular [建议实现每个钩子](https://angular.io/guide/lifecycle-hooks#interfaces-are-optional-technically) 。这种做法可以提供有关组件的更好的错误消息。

### 按顺序执行......

#### ngOnChanges

`ngOnChanges`触发的修改以下`@Input`绑定类成员。由`@Input()`装饰器绑定的数据来自外部源。当外部源以可检测的方式更改该数据时，它再次通过`@Input`属性。

通过此更新， `ngOnChanges`立即触发。它还会在输入数据初始化时触发。钩子接收一个`SimpleChanges`类型的可选参数。此值包含有关已更改的输入绑定属性的信息。

```typescript
import { Component, Input, OnChanges } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnChanges { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnChanges() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnChanges Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
```

**简介：** ParentComponent将输入数据绑定到ChildComponent。组件通过其`@Input`属性接收此数据。 `ngOnChanges`火灾。五秒钟后， `setTimeout`回调会触发。 ParentComponent改变ChildComponent的输入绑定属性的数据源。新数据流经输入属性。 `ngOnChanges`再次开火。

#### ngOnInit

初始化组件的输入绑定（ `@Input` ）属性时， `ngOnInit`会触发一次。下一个示例看起来与上一个示例类似。当ChildComponent接收输入数据时，挂钩不会触发。相反，它会在数据呈现到ChildComponent模板后立即触发。

```typescript
import { Component, Input, OnInit } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <h3>Child Component</h3> 
  <p>TICKS: {{ lifecycleTicks }}</p> 
  <p>DATA: {{ data }}</p> 
  ` 
 }) 
 export class ChildComponent implements OnInit { 
  @Input() data: string; 
  lifecycleTicks: number = 0; 
 
  ngOnInit() { 
    this.lifecycleTicks++; 
  } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <h1>ngOnInit Example</h1> 
  <app-child [data]="arbitraryData"></app-child> 
  ` 
 }) 
 export class ParentComponent { 
  arbitraryData: string = 'initial'; 
 
  constructor() { 
    setTimeout(() => { 
      this.arbitraryData = 'final'; 
    }, 5000); 
  } 
 } 
```

**简介：** ParentComponent将输入数据绑定到ChildComponent。 ChildComponent通过其`@Input`属性接收此数据。数据呈现给模板。 `ngOnInit`开火。五秒钟后， `setTimeout`回调会触发。 ParentComponent改变ChildComponent的输入绑定属性的数据源。 ngOnInit **不会发生火灾** 。

`ngOnInit`是一个完成的钩子。初始化是唯一的问题。

#### ngDoCheck

每次更改检测周期`ngDoCheck`触发`ngDoCheck` 。角度运行经常改变检测。执行任何操作都会使其循环。 `ngDoCheck`会触发这些循环。请谨慎使用。如果实施不当，可能会产生性能问题。

`ngDoCheck`允许开发人员手动检查他们的数据。他们可以有条件地触发新的申请日期。结合`ChangeDetectorRef` ，开发人员可以创建自己的变更检测检查。

```typescript
import { Component, DoCheck, ChangeDetectorRef } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngDoCheck Example</h1> 
  <p>DATA: {{ data[data.length - 1] }}</p> 
  ` 
 }) 
 export class ExampleComponent implements DoCheck { 
  lifecycleTicks: number = 0; 
  oldTheData: string; 
  data: string[] = ['initial']; 
 
  constructor(private changeDetector: ChangeDetectorRef) { 
    this.changeDetector.detach(); // lets the class perform its own change detection 
 
    setTimeout(() => { 
      this.oldTheData = 'final'; // intentional error 
      this.data.push('intermediate'); 
    }, 3000); 
 
    setTimeout(() => { 
      this.data.push('final'); 
      this.changeDetector.markForCheck(); 
    }, 6000); 
  } 
 
  ngDoCheck() { 
    console.log(++this.lifecycleTicks); 
 
    if (this.data[this.data.length - 1] !== this.oldTheData) { 
      this.changeDetector.detectChanges(); 
    } 
  } 
 } 
```

注意控制台与显示器。数据在冻结前上升到“中间”。如控制台中所示，在此期间发生三轮变化检测。当'final'被推到`this.data`的末尾时，会发生另一轮变化检测。然后发生最后一轮变化检测。 if语句的评估确定不需要对视图进行更新。

**摘要：**类在两轮变化检测后实例化。类构造函数启动`setTimeout`两次。三秒钟后，第一个`setTimeout`触发更改检测。 `ngDoCheck`标记显示以进行更新。三秒钟后，第二个`setTimeout`触发更改检测。根据`ngDoCheck`的评估，无需更新视图。

##### 警告

在继续之前，了解内容DOM和视图DOM之间的区别（DOM代表文档对象模型）。

内容DOM定义了指令元素的innerHTML。相反，视图DOM是组件的模板，不包括嵌套在指令中的任何模板HTML。为了更好地理解，请参阅[此博客文章](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders) 。

#### ngAfterContentInit

`ngAfterContentInit`在组件的内容DOM初始化（第一次加载）后触发​​。等待`@ContentChild(ren)`查询是钩子的主要用例。

`@ContentChild(ren)`查询内容DOM的yield元素引用。因此，它们在内容DOM加载之后才可用。因此，为什么使用`ngAfterContentInit`及其对应的`ngAfterContentChecked` 。

```typescript
import { Component, ContentChild, AfterContentInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentInit { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterContentInit() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', 'yellow') 
 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', 'pink'); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', 'red'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

`@ContentChild`查询结果可从`ngAfterContentInit` 。 `Renderer2`更新包含`h3`标签和CComponent的BComponent的内容DOM。这是[内容投影](https://alligator.io/angular/content-projection-angular)的常见示例。

**简介：**渲染从AComponent开始。要完成它，AComponent必须渲染BComponent。 BComponent通过`<ng-content></ng-content>`元素投影嵌套在其元素中`<ng-content></ng-content>` 。 CComponent是预计内容的一部分。投影内容完成渲染。 `ngAfterContentInit`触发。 BComponent完成渲染。 AComponent完成渲染。 `ngAfterContentInit`不会再次触发。

#### ngAfterContentChecked

`ngAfterContentChecked`在针对内容DOM的每个更改检测周期后触发。这使开发人员可以促进内容DOM对更改检测的反应。如果执行`ngAfterContentChecked`可能会频繁触发并导致性能问题。

`ngAfterContentChecked`在组件的初始化阶段触发。它在`ngAfterContentInit`之后。

```typescript
import { Component, ContentChild, AfterContentChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterContentChecked { 
  @ContentChild("BHeader", { read: ElementRef }) hRef: ElementRef; 
  @ContentChild(CComponent, { read: ElementRef }) cRef: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterContentChecked() { 
    this.renderer.setStyle(this.hRef.nativeElement, 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(0), 'background-color', this.randomRGB()); 
    this.renderer.setStyle(this.cRef.nativeElement.children.item(1), 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterContentChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3 #BHeader>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

这与`ngAfterContentInit`几乎没有区别。只有`<button></button>`被添加到BComponent。单击它会导致更改检测循环。这会激活钩子，如`background-color`的随机化所示。

**简介：**渲染从AComponent开始。要完成它，AComponent必须渲染BComponent。 BComponent通过`<ng-content></ng-content>`元素投影嵌套在其元素中`<ng-content></ng-content>` 。 CComponent是预计内容的一部分。投影内容完成渲染。 `ngAfterContentChecked`发射。 BComponent完成渲染。 AComponent完成渲染。 `ngAfterContentChecked`可能会通过更改检测再次触发。

#### ngAfterViewInit

视图DOM完成初始化后， `ngAfterViewInit`触发一次。视图始终在内容之后加载。 `ngAfterViewInit`等待`@ViewChild(ren)`查询解析。从组件的同一视图中查询这些元素。

在下面的示例中，将查询BComponent的`h3`标头。一旦查询结果可用， `ngAfterViewInit`就会立即执行。

```typescript
import { Component, ViewChild, AfterViewInit, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewInit { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  ngAfterViewInit() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', 'yellow'); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewInit Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

`Renderer2`更改BComponent标头的背景颜色。这表示由于`ngAfterViewInit`已成功查询视图元素。

**简介：**渲染从AComponent开始。要完成它，AComponent必须渲染BComponent。 BComponent通过`<ng-content></ng-content>`元素投影嵌套在其元素中`<ng-content></ng-content>` 。 CComponent是预计内容的一部分。投影内容完成渲染。 BComponent完成渲染。 `ngAfterViewInit`触发。 AComponent完成渲染。 `ngAfterViewInit`不会再次触发。

#### ngAfterViewChecked

`ngAfterViewChecked`在针对组件视图的任何更改检测周期后触发。 `ngAfterViewChecked`钩子允许开发人员促进更改检测如何影响视图DOM。

```typescript
import { Component, ViewChild, AfterViewChecked, ElementRef, Renderer2 } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-c', 
  template: ` 
  <p>I am C.</p> 
  <p>Hello World!</p> 
  ` 
 }) 
 export class CComponent { } 
 
 @Component({ 
  selector: 'app-b', 
  template: ` 
  <p #BStatement>I am B.</p> 
  <button (click)="$event">CLICK</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class BComponent implements AfterViewChecked { 
  @ViewChild("BStatement", { read: ElementRef }) pStmt: ElementRef; 
 
  constructor(private renderer: Renderer2) { } 
 
  randomRGB(): string { 
    return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`; 
  } 
 
  ngAfterViewChecked() { 
    this.renderer.setStyle(this.pStmt.nativeElement, 'background-color', this.randomRGB()); 
  } 
 } 
 
 @Component({ 
  selector: 'app-a', 
  template: ` 
  <h1>ngAfterViewChecked Example</h1> 
  <p>I am A.</p> 
  <app-b> 
    <h3>BComponent Content DOM</h3> 
    <app-c></app-c> 
  </app-b> 
  ` 
 }) 
 export class AComponent { } 
```

**简介：**渲染从AComponent开始。要完成它，AComponent必须渲染BComponent。 BComponent通过`<ng-content></ng-content>`元素投影嵌套在其元素中`<ng-content></ng-content>` 。 CComponent是预计内容的一部分。投影内容完成渲染。 BComponent完成渲染。 `ngAfterViewChecked`会触发。 AComponent完成渲染。 `ngAfterViewChecked`可能会通过更改检测再次触发。

单击`<button></button>`元素可启动一轮更改检测。 `ngAfterContentChecked`会触发并随机化每个按钮单击的查询元素的`background-color` 。

#### ngOnDestroy

`ngOnDestroy`触发组件从视图和后续DOM中删除。在删除组件之前，此挂钩提供了清除任何松散端的机会。

```typescript
import { Directive, Component, OnDestroy } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appDestroyListener]' 
 }) 
 export class DestroyListenerDirective implements OnDestroy { 
  ngOnDestroy() { 
    console.log("Goodbye World!"); 
  } 
 } 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h1>ngOnDestroy Example</h1> 
  <button (click)="toggleDestroy()">TOGGLE DESTROY</button> 
  <p appDestroyListener *ngIf="destroy">I can be destroyed!</p> 
  ` 
 }) 
 export class ExampleComponent { 
  destroy: boolean = true; 
 
  toggleDestroy() { 
    this.destroy = !this.destroy; 
  } 
 } 
```

**摘要：**单击该按钮。 ExampleComponent的`destroy`成员切换为false。结构指令`*ngIf`计算结果为false。 `ngOnDestroy`开火。 `*ngIf`删除其主机`<p></p>` 。此过程会重复多次单击按钮以将`destroy`切换为false。

#### 结论

请记住，每个钩子必须满足某些条件。无论如何，它们总是按照彼此的顺序执行。这使得钩子可以预测，即使有些不执行也可以使用。

使用生命周期钩子，可以轻松地执行类的执行。它们让开发人员可以跟踪发生变更检测的位置以及应用程序应如何反应。它们会停止代码，这些代码只需要在一段时间后才能使用基于负载的依赖项。

组件生命周期是现代前端框架的特征。 Angular通过提供上述钩子来规划其生命周期。

## 来源

*   [角度团队。 “Lifecycle Hooks”。 _谷歌_ 2018年6月2日访问](https://angular.io/guide/lifecycle-hooks)
*   [Gechev，Minko。 “Angular中的ViewChildren和ContentChildren”。 2018年6月2日访问](http://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders)

## 资源

*   [角度文档](https://angular.io/docs)
*   [Angular GitHub存储库](https://github.com/angular/angular)
*   [生命周期钩在深度](https://angular.io/guide/lifecycle-hooks)