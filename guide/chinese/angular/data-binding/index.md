---
title: Data Binding
localeTitle: 数据绑定
---
# 数据绑定

#### 动机

数据通常定义应用程序的外观。将数据解释为用户界面涉及类逻辑（ `.component.html` ）和模板视图（ `.component.ts` ）。 Angular通过数据绑定连接它们。将数据绑定视为组件交互的工具。

#### 组件和模板

该组件将其大部分逻辑和数据存储在用`@Component`修饰的`@Component` 。此装饰器将类定义为具有模板HTML的组件。组件的模板表示应用程序中的类。这里的重点需要在组件的类和模板HTML之间。

这是数据绑定发生的地方。元素属性和事件获得指定的值。由组件类定义的这些值提供两个角色之一。一种是生成模板然后接收的数据。另一个处理模板元素发出的事件。

![代码示例](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image4.png)

尝试将此图片用作下一部分的心智模型。

#### 绑定方向

绑定数据有两种方式：单向和双向。 Angular技术上只使用单向数据流。双向流动最终是单向的。它发生在两个单向流动的应用中，每个方向一次。稍后会详细介绍。

单向流定义了单向交互。组件将数据发送到模板，或者模板向组件逻辑发出事件。模板范围内的数据更改不会渗透到组件类。事件发出是从模板元素开始的单向事务。

双向构成两个方向。这意味着对类逻辑或模板HTML中的数据的更改将持续存在于彼此之间。更改的范围是组件的视图。视图包含组件的类和模板。

#### 元素属性

为了识别数据绑定元素属性，Angular使用特殊的括号语法。

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  value:type = /* some value of type */; 
 } 
```

```html

<!-- my.component.html --> 
 <any-element [property]=“value”>innerHTML</any-element> 
```

请耐心等待。

`[property]`镜像域对象模型（DOM）元素的对象节点中的属性。不要将对象属性与DOM元素的属性混淆。属性和属性通常共享相同的名称并执行相同的操作。然而，有一个明显的区别。

请记住， `attr` （attributes）是底层DOM对象的单个属性。它在DOM的实例化中声明，其属性值与元素的定义匹配。之后它保持相同的值。每个属性在DOM对象节点中都有自己的键值字段。这些属性在实例化后是可变的。

了解属性和属性之间的区别。这将有助于更好地理解Angular如何将数据绑定到属性（属性绑定）。 Angular几乎不会将数据绑定到元素的属性。例外情况非常罕见。最后一次：Angular将组件数据绑定到属性，而不是属性！

返回参考示例，元素属性赋值中的`[ … ]`具有特殊含义。括号表示`property`在赋值右侧绑定为`“value”` 。

`value`在括号的上下文中也有特殊含义。 `value`本身就是一个字符串文字。 Angular读取它并将其值与组件类成员进行匹配。 Angular将替换匹配成员属性的值。这当然是指承载模板HTML的相同组件类。

从组件到模板的单向数据流已完成。该成员与括号内财产的正确转让相匹配，提供了`value` 。请注意，组件类中成员值的更改会渗透到模板。这就是Angular在工作中的变化检测。模板范围内的更改对组件类成员没有影响。

关键要点：组件类在模板显示时提供数据。

我没有提到数据值也可以显示在组件的`innerHTML` 。最后一个示例实现了双花括号。 Angular识别这些大括号并将匹配的组件类数据插入到`div`的`innerHTML`中。

```html

<div>The value of the component class member 'value' is {{value}}.</div> 
```

#### 事件处理

如果组件提供数据，则模板提供事件。

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  handler(event):void { 
      // function does stuff 
  } 
 } 
```

```html

// my.component.html 
 <any-element (event)=“handler($event)”>innerHTML</any-element> 
```

这类似于属性绑定。

`(event)`适用于任何有效的事件类型。例如，最常见的事件类型之一是`click` 。 _单击_鼠标时会发出。无论类型如何， `event`都绑定到示例中的`“handler”` 。事件处理程序通常是组件类的成员函数。

`( … )`对Angular特殊。括号告诉Angular一个事件受限于正确的`handler`分配。事件本身源自host元素。

当事件发出时，它以`$event`的形式传递Event对象。 `handler`映射到组件类的同名`handler`函数。从事件绑定元素到组件类的单向交换已完成。

尽可能从处理程序中发出事件不会影响模板元素。毕竟绑定是单向的。

#### 双向绑定

输入表单提供了为什么需要双向绑定的一个很好的例子。双向数据绑定比事件或属性绑定更昂贵。

双向数据绑定有自己的模块。在考虑之前，请考虑以下示例。

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 export class MyComponent { 
  inputValue:string = ""; 
 
  handler(event) { 
      this.inputValue = event.target.value; 
  } 
 } 
```

```html

<!-- my.component.html --> 
 <input (input)=“handler($event)” [value]=“inputValue”> 
```

是时候打破这个了。

这个例子结合了前两个。这就解释了为什么它成本更高。遵循逻辑，假设用户在输入元素中键入内容。元素向模板的组件类的`handler`发出`input`事件。处理程序将类成员`inputValue`分配给发出的事件的值。这结束了事件处理/绑定。

现在进入属性绑定。为`inputValue`分配了一个新值。由于`inputValue`绑定到input元素的`value` ，因此其数据更改会渗透到input元素的`value`属性中。 input元素的`value`与`inputValue`匹配。结束了属性绑定。

你有它。双向数据绑定发生在连续应用单向绑定的两个应用程序中。但语法有点乱。

值得庆幸的是，Angular提供了`NgModel`来简化语法。以下示例与上述内容同义。

```typescript
// my.component.ts 
 @Component({ 
  templateUrl: './my.component.html' 
 }) 
 
 export class MyComponent { 
  inputValue:string = ""; 
 } 
```

```html

<!-- my.component.html --> 
 <input [(ngModel)]=“inputValue”> 
```

`ngModel`是一个很好的方便。在使用之前，您必须在应用程序的根目录中导入FormsModule。通过这种平方，双向数据绑定变得更容易使用。

为了加强您所学到的知识，请查看官方[Angular文档1中的](https://angular.io/guide/architecture-components#data-binding)这张图片。

![数据流图](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image2.png)

到目前为止，您可以使用此图片直观地总结所有内容。 Angular的文档还有很多其他值得一看的图片。鉴于本文的范围，这个应该足够了。

#### 组件到组件

要跨不同组件绑定数据和事件，必须使用@Input和@Output装饰器。角度组件是私有范围的。组件的所有成员都不能从其原生视图之外的任何位置访问。

@Input装饰器指示成员的值来自父函数。这需要可视化以更好地理解。

![代码示例](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image3_.png)

请注意将父级的`value`成员传递给子级的`property`成员。如果`property`没有@Input装饰器，那么这是不可能的。 Angular编译器依赖于它。

@Output的另一个示例显示了事件如何从子项传播到父项。请记住，@ Output几乎总是与自定义事件绑定有关。

![代码示例](https://raw.githubusercontent.com/sosmaniac-FCC/designatedata/master/image1.png)

如果要复制其中任何一个示例，请确保从`@angular/common`导入`EventEmitter` ， `@angular/common` `@Input`和`@Output` 。

#### 结论

这是一个停下来的好地方。数据绑定涵盖了大量用例。这个主题值得在[Angular的网站](https://angular.io)上进一步探讨。这些不是您在Angular中操作数据的唯一方法。有关更多信息，请参阅参考资料下的链接

### 来源

1.  [角度团队。组件简介。谷歌。 2018年5月26日访问](https://angular.io/guide/architecture-components#data-binding)

### 资源

*   [角度文档](https://angular.io/docs)
    
*   [Angular GitHub存储库](https://github.com/angular/angular)
    
*   [有关Angular中的组件和模板的更多信息](https://angular.io/guide/displaying-data)