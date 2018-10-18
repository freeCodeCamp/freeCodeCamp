---
title: Directives
localeTitle: 指令
---
# 指令

#### 动机

指令是Angular模板HTML的核心。组件是最重要的例子。每个组件视图都呈现在根组件视图下方。这可以导致定义单个应用程序的视图树。视图构成一个类（ `component.ts` ）及其模板（ `component.html` ）。

其他指令虽然不那么重要，但却提供了急需的灵活性。位于元素上的指令可以完全控制它。使用`<ng-template></ng-template>`可以动态创建和删除HTML内容。 Microsyntax使开发人员可以自由地进一步定制指令行为。

#### 指令

指令是Angular创建和识别的组件元素和属性。 Angular将元素或属性与其对应的类定义相关联。 `@Directive`或`@Component`装饰这些类。两者都指示Angular该类作为指令执行。

某些指令会修改主机元素的样式。其他指令显示视图或作为嵌入视图插入现有视图。换句话说，它们会改变HTML布局。

在任何情况下，指令都会向Angular编译器发出信号。它们根据指令的类逻辑标记要修改的组件。

#### 组件指令

组件指令与其他指令类型的根本不同。它们通常被称为组件。它们形成了自己独特的HTML标记。对于每个组件，都有一些模板HTML。这与其他两个指令不同。他们的类是纯逻辑操作模板HTML中预定义的。

#### 组件创建

使用`ng generate component [name-of-component]`创建`ng generate component [name-of-component]` ;用`[name-of-component]`替换`[name-of-component]` 。该命令产生四个不同的文件，这些文件都属于一个组件。

`component.css`和`component.spec.ts`超出了本文的范围。组件的_指令_方面涉及其他两个文件。看一下生成的`component.ts`和`component.html` 。

```typescript
// example.component.ts 
 import { Component } from '@angular/core'; 
 
 @Component({ 
  selector: 'app-example', 
  templateUrl: './example.component.html' 
 }) 
 export class ExampleComponent { 
  constructor() { } 
 } 
```

从默认的`component.ts`生成中删除了一些不相关的细节。这样，重点是组件本身。

```html

<!-- example.component.html --> 
 
 <p>example works!</p> 
```

将ExampleComponent作为另一个组件的子项插入将如下所示。

```html

<!-- another.component.html --> 
 
 <h1>Welcome to AnotherComponent.</h1> 
 <h3>Check out ExampleComponent!</h3> 
 
 <!-- Outputs “<p>example works!</p>” --> 
 <app-example></app-example> 
 
 <h6>This is the end of the AnotherComponent template HTML.</h6> 
```

注意`<app-example></app-example>` 。 `app-example`与ExampleComponent的`@Component`装饰器中的选择器匹配。这是一个组件指令。 Angular识别`app-example` _并将_其呈现指向ExampleComponent类。

#### 结构指令

考虑编程逻辑中的`if`语句， `for`循环和`switch`语句。这些逻辑结构决定了代码的执行。代码是执行（ `if` ），执行多少次（ `for` ），以及执行哪个代码块（ `switch` ）。

这种模式继续结构指令。它们确定模板的结果HTML结构。它们总是涉及一些`ng-template`使用。 `ng-template`提供了一种创建有条件呈现HTML的机制。

以下是结构指令的三个示例。每个都有一个逻辑对应物（ `if` ， `for`和`switch` ）。

*   \* ngIf
    
*   \* ngFor
    
*   \* ngSwitchCase和\* ngSwitchDefault
    

**重要说明：**这三个都可以通过`CommonModule`导入获得。它可以从`@angular/common`获取，以便在应用程序的根模块中导入。

##### \* ngIf

`*ngIf`根据JavaScript中的一般布尔值评估测试给定值以查看它是否_真实_或_虚假_ 。如果真的，元素及其innerHTML出现。否则，它们永远不会呈现给域对象模型（DOM）。

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngIf="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *ngIf="false"> 
  <h1>Hi!</h1> 
 </div> 
```

这是一个人为的例子。模板的组件类中的任何成员值都可以替换为`true`或`false` 。

注意：您还可以使用\* ngIf执行以下操作以访问observalbe值

```html

<div *ngIf="observable$ | async as anyNameYouWant"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngFor

`*ngFor`循环基于右指定的_微_合成表达式。 Microsyntax超出了本文的范围。知道微合成是一种简短的逻辑表达形式。它作为一个能够引用类成员值的字符串出现。它可以循环可迭代的值，这使得它对`*ngFor`有用。

```html

<ul> 
  <li *ngFor=“let potato of ['Russet', 'Sweet', 'Laura']; let i=index”> 
      Potato {{ i + 1 }}: {{ potato }} 
  </li> 
  <!-- Outputs 
  <li> 
      Potato 1: Russet 
  </li> 
  <li> 
      Potato 2: Sweet 
  </li> 
  <li> 
      Potato 3: Laura 
  </li> 
  --> 
 </ul> 
```

`['Russet', 'Sweet', 'Laura']`是一个可迭代的值。数组是最常见的迭代之一。 `*ngFor`为每个数组元素吐出一个新的`<li></li>` 。每个数组元素都分配了变量`potato` 。这都是利用微合成酶完成的。 `*ngFor`定义了`ul`元素的结构内容。这是结构指令的特征。

注意：您还可以使用\* ngFor指令执行以下操作以获取对observalbe值的访问权限（hacky）

```html

<div *ngFor="let anyNameYouWant of [(observable$ | async)]"> 
  {{  anyNameYouWant }} 
 </div> 
```

##### \* ngSwitchCase和\* ngSwitchDefault

这两个结构指令协同工作，为模板HTML提供`switch`功能。

```html

<div [ngSwitch]=“potato”> 
  <h1 *ngSwitchCase=“'Russet'”>{{ potato }} is a Russet Potato.</h1> 
  <h1 *ngSwitchCase=“'Sweet'”>{{ potato }} is a Sweet Potato.</h1> 
  <h1 *ngSwitchCase=“'Laura'”>{{ potato }} is a Laura Potato.</h1> 
  <h1 *ngSwitchDefault>{{ potato }} is not a Russet, Sweet, nor Laura Potato.</h1> 
 </div> 
```

只有一个`*ngSwitch…`表达式呈现。注意包裹交换机的`div`元素内部的`[ngSwitch]`属性。这会沿着`*ngSwitch...`链传递`potato`的值。这个结构指令链决定了哪个`h1`元素呈现。

因此， `[ngSwitch]`不是`*ngSwitch…`语句不同的结构指令。它传递值，而switch块确定HTML的最终布局。

请记住，程式化和价值传递不是结构指令的责任。这涉及属性指令。结构指令仅确定布局。

#### 结构指令创建[1](https://angular.io/guide/structural-directives)

关于前面的例子，有一些重要的事情要理解。它们都是起始星号（ `*` ）的简写。每个星号应用程序都会使用`ng-template` 。

`ng-template`定义结构指令。它解释了如何配置模板HTML以生成实际的HTML。首先使用`ng generate directive [name-of-directive]`创建一个指令。将`[name-of-directive]`替换为可取的名称。该命令产生以下结果。

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

这个指令骨架非常简单。它还不知道我们是否正在构建结构或属性指令。 `selector: '[appExample]'`告诉Angular指令映射到哪个属性。由于您正在创建结构指令，因此请按如下方式修改骨架。

```typescript
Import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(booleanValue: boolean) { 
      if (booleanValue) { 
          this.ngTemplate.createEmbeddedView(this.innerHTMLOfTemplateScope); 
      } 
      else { 
          this.ngTemplate.clear(); 
      } 
  } 
 
  constructor( 
      private innerHTMLOfTemplateScope:TemplateRef<any>, 
      private ngTemplate:ViewContainerRef 
  ) { } 
 } 
```

在`appExample`属性中包含任意元素就是一个很好的例子。

```html

<div *appExample=“value”>innerHTML content</div> 
 <!-- This is shorthand for: 
 <ng-template> 
  <div>innerHTML content</div> 
 </ng-template> 
 --> 
```

这需要考虑很多。 `@Input() set ...`是一个setter成员声明。只要`appExample`属性出现在元素中并且被赋予布尔值，它就会执行`appExample`函数接收该布尔值作为执行参数。

`TemplateRef<any>`引用`<ng-template></ng-template>`的innerHTML。前面示例中使用的星号是上述代码块中注释的简写。 `ng-template`是它结构指令的_秘诀_ 。

`ViewContainerRef`引用`<ng-template></ng-template>`的封装范围。 `ng-template`不是实际元素。它是Angular编译器的标记，最终被注释掉。

`ViewContainerRef`有两个方法： `clear()`和`createEmbeddedView()` 。您可以将嵌入视图视为`ng-template`元素中的HTML范围。

`clear()`从HTML显示中删除`ng-template`中任何现有的HTML范围。 `createEmbeddedView()`将`ng-template`的HTML定位为可显示的HTML。

如果了解最新的代码示例，那么您就可以掌握`*ngIf` ， `*ngFor` ， `*ngSwitchCase`和`*ngSwitchDefault` 。它们都参考`TemplateRef<any>`和`ViewContainerRef`来确定布局。

实际上，上面的ExampleDirective模仿了`*ngIf`的功能！

```html

<!-- renders “<h1>Hello!</h1>” --> 
 <div *ngExample="true"> 
  <h1>Hello!</h1> 
 </div> 
 
 <!-- does not render --> 
 <div *appExample="false"> 
  <h1>Hi!</h1> 
 </div> 
```

永远不要忘记星号（ `*` ）。它是我们的指令类引用的`ng-template`元素的简写。

#### 属性指令

属性指令类似于结构。除此之外，属性指令对HTML布局没有任何影响。他们没有实现`<ng-template></ng-template>` 。它们是引用其主机元素以进行样式更改的属性。

最好的例子解释了他们的目的。

#### 属性指令创建[2](https://angular.io/guide/attribute-directives)

生成另一个指令： `ng generate directive [name-of-directive]` 。将`[name-of-directive]`替换为可取的名称。

```typescript
import { Directive } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  constructor() { } 
 } 
```

属性和结构指令都以相同的骨架开头。还有一些新增功能将区分属性指令。

```typescript
import { Directive, Input, ElementRef } from '@angular/core'; 
 
 @Directive({ 
  selector: '[appExample]' 
 }) 
 export class ExampleDirective { 
  @Input() set appExample(color:string) { 
      this.host.nativeElement.style.color = color; 
  } 
 
  constructor(private host:ElementRef) { } 
 } 
```

要测试的一些元素会有所帮助。

```html

<!-- the intended results are self-explanatory --> 
 <div appExample=“purple”>This text is purple!</div> 
 <div appExample=“blue”>This text is blue!</div> 
 <div appExample=“red”>This text is red!</div> 
```

`ElementRef`提供对host元素的直接引用。 `ElementRef.nativeElement`获取DOM节点。使用该节点，组件的样式就像`this.host.nativeElement.style.color = color`一样简单。

`@Input() set ...`是另一个setter函数，它读取它作为属性实现时赋值的值。它重新分配每个元素的样式表的颜色属性。

#### 结论

指令是Angular模板HTML中提供的强大工具。它们是组件彼此连接的方式。在每个组件中，它们提供了一种风格和布局。

构建每种类型的指令还有许多其他选项。不幸的是，覆盖每一个对于一篇文章来说太多了。对指令有基本的了解足以推进更高级的资源。

查看以下资源，深入了解情况。每种类型的指令都有链接。每个链接都是相同文档的一部分，因此在访问第一个链接后无需返回此处！

## 来源

1.  [角度团队。 _结构指令_ 。谷歌。 2018年5月28日访问](https://angular.io/guide/structural-directives)
    
2.  [角度团队。 _属性指令_ 。谷歌。 2018年5月28日访问](https://angular.io/guide/attribute-directives)
    

## 资源

*   [角度文档](https://angular.io/guide/pipes)
    
*   [Angular GitHub存储库](https://github.com/angular/angular)
    
*   [角度组件](https://angular.io/guide/architecture-components)
    
*   [角度结构指令](https://angular.io/guide/structural-directives)
    
*   [角度属性指令](https://angular.io/guide/attribute-directives)
    
*   [角度CLI](https://cli.angular.io)