---
title: Components
localeTitle: 组件
---
# 组件

#### 动机

Angular包含许多用于构建应用程序的_原理图_ 。组件就是这样的示意图。它们包含与应用程序的单个部分相关的单个逻辑单元。组件通常与其他原理图配合使用以更有效地运行。

在所有原理图中，组件倾向于消耗更多而不是提供。虽然其他原理图如指令，管道和服务提供实用程序，但组件使用。他们负责应用程序界面，因此消费实用程序的原因才有意义。

组件简化了应用程序。将逻辑漏斗到可见界面的单个部分是他们的主要目标。要逐步构建应用程序，必须逐个组件构建。毕竟，组件充当Angular的构建块。

#### 组件介绍

如上所述，组件消耗实用程序（服务/资源）。他们站在业务逻辑和演示之间，以产生一个有凝聚力的单元。 Angular为每个组件附加了各种机制。这些附件将类标识为组件并定义其标准功能。

Angular必须在遇到组件时识别组件。为此， `@Component` Component必须装饰每个要作为组件的类。装饰者向Angular指出这个类是什么。

对于组件，它必须知道如何与其注入器交互，与模板连接，从样式列表中提取，封装其样式等等。 Angular负责处理大多数低级需求。开发人员仍然需要配置组件的行为，导入其依赖项并扩展其逻辑。

对于所有这些事情，我们有组件的类。班级保持一切相对统一。它封装了组件的业务逻辑。

#### 组件类和元数据

继续安装[Angular命令行界面（CLI）](https://cli.angular.io) 。您可以从[本文中](https://guide.freecodecamp.org/angular/command-line-interface)了解有关它的更多信息。 CLI命令`ng generate component [name-of-component]`产生以下结果。

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

这是所有伟大组件的基本骨架。 `@Component`装饰器是最重要的部分。没有它，上面的例子就变成了一个通用的类。 Angular依靠装饰器来识别类的原理图类型。

`@Component`接收元数据作为单个对象。装饰器只是引擎盖下的JavaScript功能。它们与元数据对象一样接受参数。元数据对象配置组件的基本依赖项。每个领域都发挥着作用。

*   `selector:`告诉Angular将组件与应用程序模板HTML中的某个元素相关联。
    
*   `templateUrl:`接受组件模板HTML的文件位置（这是数据显示的位置）。
    
*   `styleUrls:`接受样式表文件位置（字符串）数组。这些样式表定位组件的已分配模板。
    

将元数据视为一大堆配置。装饰器接受它，以便它可以生成特定于组件的数据。装饰器使用其类行为所必需的数据来_装饰_底层类。一个_组件_类。

默认情况下，类的签名导出，以便可以导入组件。 `ngOnInit`也得到了实施。 `implements`告诉类根据接口的定义定义某些方法。 `ngOnInit`是一个生命周期钩子。

#### 组件生命周期和变更检测

组件使用各种工具，服务和功能。组件可用的一个关键功能是生命周期钩子。 [本文介绍](https://guide.freecodecamp.org/angular/lifecycle-hooks)了每个钩子的解释。

总共有八个，它们都作为计时功能。当组件通过[变化检测](https://blog.angularindepth.com/everything-you-need-to-know-about-change-detection-in-angular-8006c51d206f)从状态转换到状态时，它们有条件地执行。此过程在组件树中不断发生。它搜索值得重新呈现模板的数据变化。

分手后要往前看了。有关组件生命周期的更多信息，请参阅上述文章。它值得更多解释。

#### 组件数据

数据驱动一切。组件也不例外。组件封装了所有数据。要从外部接收数据，组件必须明确声明它。这种形式的隐私可以防止信息在组件树中发生冲突。

数据确定从组件类到其模板的显示内容。对类数据的任何更新都将（或至少应该）更新模板显示。

组件通常会初始化一组存储数据的成员（或变量）。为方便起见，它们在整个组件类逻辑中使用。此信息助长了导致模板及其行为的逻辑。请参阅以下示例。

```typescript
// ./components/example/example.component.ts 
 
 import { Component, OnInit } from '@angular/core'; 
 import { Post, DATA } from '../../data/posts.data'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent implements OnInit { 
  username: string; 
  totalPosts: number; 
  allPosts: Post[]; 
 
  deletePost(index: number): void { 
    this.allPosts.splice(index, 1); 
    this.totalPosts = this.allPosts.length; 
  } 
 
  ngOnInit(): void { 
    this.username = DATA.author; 
    this.totalPosts = DATA.thePosts.length; 
    this.allPosts = DATA.thePosts; 
  } 
 } 
```

```html

<!-- ./components/example/example.component.html --> 
 
 <h1>{{ username }}</h1> 
 <span>Change Name: </span><input [(ngModel)]="username"> 
 <h3>Posts: {{ totalPosts }}</h3> 
 <ul> 
 <hr/> 
 <div *ngFor="let post of allPosts; let i=index"> 
  <button (click)="deletePost(i)">DELETE</button> 
  <h6>{{ post.title }}</h6> 
  <p>{{ post.body }}</p> 
  <hr/> 
 </div> 
 </ul> 
```

请注意组件与其数据交互的方式。它首先从`../../data/posts.data`取出它，然后才开始将其转发到模板进行显示。

数据显示在整个模板中。在双花括号内，变量的值从组件类映射到大括号中。跨越`allPosts`类数组的`*ngFor`循环。单击该按钮可从其索引中删除`allPosts`中的特定元素。您甚至可以通过在输入框中输入来更改最顶层的`username` 。

上述交互改变了组件类的数据，而这些数据又更新了组件的模板HTML。组件提供了促进数据流的骨干逻辑。模板HTML使该数据对用户可读。

#### 组件模板

上一个示例的模板HTML具有一个有趣的语法。语法不是实际的HTML。这是Angular的模板HTML。有些人经常提到它只有Angular的编译器才能识别HTML _Plus_ 。编译器支持导致HTML动态操作的语法。本文通常将其称为“模板HTML”或“模板”。

该语法允许组件将数据直接注入模板HTML。注射是动态的。意思是，数据可以迭代并显示为HTML而无需外部帮助。 Angular编译器在到达Web浏览器时将其编译为实际HTML。

要了解有关数据绑定到模板的一些方法的更多信息，请阅读[Angular中的数据绑定](https://guide.freecodecamp.org/angular/data-binding) 。在前面的示例（ `{{ ... }}` ）中发生了一些数据绑定示例。对于本文，它足以识别组件类及其模板之间发生的数据交互。

#### 查询模板

管理模板状态的数据必须正常工作。然而，纯数据并不总能满足应用程序的预期设计。可能需要更直接地与文档对象模型（DOM）进行交互。

为此，组件必须引用模板元素。当数据更改时，组件可以显式操作DOM。这是一种更具声明性的方法。

组件可以使用Web浏览器的DOM应用程序编程接口（API）来获取引用。虽然不好主意。 Angular更喜欢跨平台兼容性。要使组件在Web浏览器之外运行，它需要使用Angular的API而不是DOM。

组件可以使用`@ViewChild`和`ContentChild`装饰器查询其模板。它们代表组件类获取对模板元素的引用。

```typescript
import { Component, ViewChild, ContentChild, ElementRef, Renderer2, AfterContentChecked, AfterViewChecked } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-child', 
  template: ` 
  <button (click)="toggleEnlarge()">Toggle Enlarge</button> 
  <ng-content></ng-content> 
  ` 
 }) 
 export class ChildComponent implements AfterContentChecked { 
  @ContentChild("pReference", { read: ElementRef }) pElement: ElementRef; 
  textEnlarge: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleEnlarge() { 
    this.textEnlarge = !this.textEnlarge; 
  } 
 
  ngAfterContentChecked() { 
    if (this.textEnlarge) 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', '25px'); 
      else 
      this.renderer.setStyle(this.pElement.nativeElement, 'font-size', 'initial'); 
    } 
 } 
 
 @Component({ 
  selector: 'app-parent', 
  template: ` 
  <button (click)="toggleHighlight()">Toggle Highlight</button> 
  <h1 #hOneRefereance>View Child</h1> 
  <app-child> 
    <p #pReference>Content Child</p> 
  </app-child> 
  ` 
 }) 
 export class ParentComponent implements AfterViewChecked { 
  @ViewChild("hOneRefereance", { read: ElementRef }) hOneElement: ElementRef; 
  textHighlight: boolean = false; 
 
  constructor(private renderer: Renderer2) { } 
 
  toggleHighlight() { 
    this.textHighlight = !this.textHighlight; 
  } 
 
  ngAfterViewChecked() { 
    if (this.textHighlight) 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'yellow'); 
    else 
      this.renderer.setStyle(this.hOneElement.nativeElement, 'background-color', 'initial'); 
  } 
 } 
```

上面的示例包含两个按钮，用于为每个元素切换特定样式。单击按钮可切换每个组件唯一的true / false值。这些布尔值决定了自定义样式是否适用。生命周期挂钩（ `ngAfterViewChecked`和`ngAfterContentChecked` ）以声明方式改变DOM，而不是强制导致更改的这些值。

声明性方法通过元素的引用显式更改样式。在命令式编程中，基于DOM的关闭数据的更改是隐含的。查看有关[命令式和声明性编程的](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)文章以了解更多信息。

需要注意的主要问题是如何从模板中提取这些引用。在该示例中，使用两个装饰器查询模板的两个部分： `@ViewChild`和`@ContentChild` 。

它们在寻找元素引用的位置上有所不同，无论它是在内容DOM中还是在视图DOM中。这两个DOM存在于ParentComponent的模板中。区分它们很重要，因为它们在不同的时间完成渲染。

这就是`@ViewChild`和`@ContentChild`都存在的原因。它们与其伴随生命周期钩子`ngAfterViewChecked`和`ngAfterContentChecked`一起工作。这些生命周期钩子在执行之前等待各自的查询解析。

解决后， `@ViewChild`和`@ContentChild`提供对两个元素的引用。两者都存在于DOM的不同部分中。布尔数据仍然决定了结果。这种结果如何转化为DOM是与以前的关键区别。 DOM通过`Renderer2`直接操作它来更新。

#### 内容投影

内容DOM存在于ChildComponent的`<app-child></app-child>`元素的innerHTML中。它全部位于ParentComponent的模板中。的innerHTML `app-child` _项目_到ChildComponent的模板，通过`<ng-content></ng-content>` 。

这举例说明了内容投影。显示从内容`one`部件到另一个使用的innerHTML `another` “在s个标签`one`小号模板”，使得`another`部件可以拉那的innerHTML到它自己的模板通过`<ng-content></ng-content>` 。 _谢谢你阅读那句话。_

因此，为什么ChildComponent引用其`<p></p>`使用元素`@ContentChild` 。 ParentComponent模板中`<app-child></app-child>`中包含的内容构成内容DOM。 ChildComponent使用`@ContentChild`查询引用该元素。

ParentComponent的视图DOM包含可从组件视图中访问的所有内容。这不一定包括给定`<app-child></app-child>`的innerHTML的整个模板。同样，使用`@ContentChild`从ChildComponent查询DOM的这一部分。使用ParentComponent类中的`@ViewChild`查询其他所有内容。

这是组件交换内容和查询自己内容的好方法，无论其DOM类型如何。组件也可以使用数据绑定与自身和其他人进行通信。从[这篇文章中](https://guide.freecodecamp.org/angular/data-binding)了解更多相关信息。

#### 组件样式

样式对于组件的可读性和交互性至关重要。每个组件都封装了它的样式表依赖项。这样他们只适用于组件的模板HTML。 HTML的影子DOM引入的一种特殊技术使这成为可能。

任何元素上都可能存在shadow DOM分支。从HTML的源代码中看不到DOM的这一部分。标准HTML元素利用shadow DOM提供其商标外观。 shadow DOM分支必须将自身锚定到可见组件，以便它可以设置样式并对其进行自定义。

关于shadow DOM分支的独特方面是它的封装。用于设置阴影DOM分支的根元素的所有内容都是私有的。没有其他元素可以访问它。

Angular采用这种形式的封装与组件。组件的样式表和模板封装在一起。没有其他组件可以访问它们。样式表冲突不会发生。

Angular默认不使用shadow DOM。它使用模拟阴影DOM行为的仿真系统。这是一个临时措施，因为某些Web浏览器尚不支持shadow DOM API。

`@Component`元数据包含`encapsulation`字段。这使开发人员可以在模拟阴影DOM，真实阴影DOM之间切换，或者两者都不切换。以下是各自订单中的选项：

*   `ViewEncapsulation.Emulated` - 假影子DOM（默认）
    
*   `ViewEncapsulation.Native` - 真正的影子DOM（自Angular 6.0.8以来已弃用）
    
*   `ViewEncapsulation.None` - 两者都没有
    

`ViewEncapsulation.None`表示组件的样式表提升到全局范围。不建议考虑组件应该形成自己的私有单元（封装）。 Angular仍然将其作为极端情况下的逃生舱。

#### 结论

组件构建应用程序除非另有配置，否则它们是私人范围的并且彼此分开制服。应用程序倾向于从根模块开始。过去，组件形成一个细长的树，定义了应用程序的其余部分。

组件覆盖应用程序界面的指定单元。这包括其样式，逻辑和布局。管道，服务和指令等其他原理图在组件代码中经常使用。您可以在其他一些Angular指南文章中了解有关这些交互的更多信息。

不要忘记组件必须[引导](https://angular.io/guide/bootstrapping) 。这可能发生在根模块或组件的元数据中。这样，Angular可以识别应用程序中出现的任何组件。

您可以通过浏览以下链接领先了解更多信息。组件的深度远远超过本文所能传达的深度。

## 来源

*   [角度团队。 “Angular Docs”。 _谷歌_ 2018年6月3日访问](https://angular.io/guide)
*   [Mozilla MDN社区。 “使用Shadow DOM”。 _Mozilla_ ，2018年5月30日更新。访问时间为2018年6月3日](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)
*   [Mundy，伊恩。 “声明与命令式编程”。 _codeburst.io_ ，2017年2月20日。访问2018年6月3日](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2)

## 资源

*   [角度文档](https://angular.io/guide)
*   [Angular GitHub存储库](https://github.com/angular/angular)
*   [组件简介](https://angular.io/guide/architecture-components)
*   [深度组件](https://angular.io/guide/displaying-data)
*   [暗影DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)