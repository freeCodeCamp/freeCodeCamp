---
title: Animations
localeTitle: 动画
---
# 动画

#### 动机

现代Web组件经常使用动画。级联样式表（CSS）为开发人员提供了创建令人印象深刻的动画的工具。使用CSS可以实现属性转换，唯一命名的动画，多部分关键帧。由于CSS，动画可能性是无穷无尽的。

在现代Web应用程序中，动画集中了用户的注意力。良好的动画旨在以令人满意的，富有成效的方式引导用户的注意力。动画不应该对用户造成烦扰。

动画以动作的形式提供反馈。它们向用户显示应用程序正在主动处理其请求。当应用程序必须加载时，像可见按钮按下或加载器这样简单的东西会吸引用户的注意力。

动画在Angular的案例中继续变得越来越重要。 Google在推广Material Design理念的同时开发了Angular。它鼓励简洁的用户界面（UI），并辅以动画用户反馈。它使Web应用程序感觉有点活泼，使用起来很有趣。

Angular社区开发了一个名为[Material2](https://github.com/angular/material2)的核心小部件库。该项目为Angular添加了各种小部件模块。其中大多数都以动画为特色。为了理解它们的工作原理，本文建议在阅读之前研究CSS动画。

角度动画是CSS原生提供的框架的简化版本。 CSS是Web浏览器中出现的Angular动画的核心技术。但CSS超出了本文的范围。是时候正面处理Angular动画了。

#### 设置动画

在制作动画之前， `BrowserAnimationsModule`必须包含在根模块的imports数组中。它可以从`@angular/platform-browser/animations` 。此NgModule可确保动画适用于给定平台。本文假定每个示例的标准Web浏览器。

角度动画在`@Component`元数据中声明。 `@Component`装饰一个类，将其区分为Angular的一个组件。其元数据包含组件配置，包括`animations: []`字段。此字段中的每个数组元素表示动画触发器（ `AnimationTriggerMetadata` ）。

动画通过装饰器的元数据独占于其主机组件。动画只能在主机组件的模板中使用。动画不会继承到组件的子项。有一个简单的解决方法。

您始终可以创建一个导出数组的单独文件。任何组件类都可以从其主机文件的顶部导入该数组。然后，导入的数组标记将进入组件的动画元数据。对其动画元数据中需要相同数组的任何其他组件重复此过程。

内容投影允许您将动画应用于组件A的内容DOM（文档对象模型）。包装此内容的组件B DOM可以将内容投影到其自己的模板中。一旦它发生，组件A的动画不会否定。组件B通过内容投影结合A的动画。

好。您知道如何设置动画以及在何处声明动画。实施是下一步。

#### 动画方法

角度动画使用一系列可从`@angular/animations`导入的方法调用。 `@Component`动画数组的每个元素都以单个方法开头。它的参数解析为一系列高阶方法调用。以下列表显示了用于构建Angular动画的一些方法。

*   `trigger(selector: string, AnimationMetadata[])`

返回`AnimationTriggerMetadata`

*   `state(data: string, AnimationStyleMetadata, options?: object)`

返回`AnimationStateMetadata`

*   `style(CSSKeyValues: object)`

返回`AnimationStyleMetadata`

*   `animate(timing: string|number, AnimationStyleMetadata|KeyframesMetadata)`

返回`AnimationAnimateMetadata`

*   `transition(stateChange: string, AnimationMetadata|AnimationMetadata[], options?: object)`

返回`AnimationTransitionMetadata`

虽然有[更多的方法](https://angular.io/api/animations)可供选择，但这五种方法可以处理基础知识。试图将这些核心方法理解为列表并没有多大帮助。逐个子弹的解释以及一个例子将更好地理解它。

##### trigger（selector：string，AnimationMetadata \[\]）

`trigger(...)`方法在动画数组中封装了一个动画元素。

方法的第一个参数`selector: string`匹配`[@selector]`成员属性。它的作用类似于组件模板中的属性指令。它实质上是通过属性选择器将动画元素连接到模板。

第二个参数是一个包含适用动画方法列表的数组。 `trigger(...)`将它完全保存在一个阵列中。

##### state（data：string，AnimationStyleMetadata，options？：object）

`state(...)`方法定义动画的最终状态。它在动画结束后将一个CSS属性列表应用于目标元素。这就是动画元素的CSS与动画的分辨率相匹配。

第一个参数匹配绑定到动画绑定的数据的值。也就是说，模板中`[@selector]`绑定的值与`state(...)`第一个参数匹配。数据的值决定了最终状态。值的改变决定了动画的手段（见`transition(...)` ）。

第二个参数承载适用于动画后元素的CSS样式。样式通过调用`style(...)`传入，并将所需样式作为对象传递给其参数。

选项列表可选地占用第三个参数。除非另有说明，否则默认`state(...)`选项应保持不变。

##### style（CSSKeyValues：object）

您可能已经在上一个列表中多次注意到`AnimationStyleMetadata` 。 `style(...)`组件返回这种确切类型的元数据。无论何种CSS样式应用， `style(...)`方法都必须调用。包含CSS样式的对象代表其参数。

当然，CSS中可动画的样式会延续到Angular `style(...)`方法中。当然，使用Angular动画突然可能无法实现CSS。

##### animate（timing：string | number，AnimationStyleMetadata | AnimationKeyframesMetadata）

`animate(...)`函数接受一个计时表达式作为其第一个参数。此参数会对方法的动画进行计时，调整和/或延迟。此参数接受数字或字符串表达式。格式化[在这里](https://angular.io/api/animations/animate#usage)解释。

`animate(...)`的第二个参数是保证动画的CSS属性。这采用了返回`AnimationStyleMetadata`的`style(...)`方法的形式。将`animate(...)`视为启动动画的方法。

一系列关键帧也可以应用于第二个参数。关键帧是一个更高级的选项，本文稍后将对此进行说明。关键帧区分动画的各个部分。

`animate(...)`可能不会收到第二个参数。在这种情况下，方法的动画计时仅适用于`state(...)`方法中反映的CSS。触发器的`state(...)`方法中的属性更改将设置动画。

##### 转换（changExpr：string，AnimationMetadata | AnimationMetadata \[\]，options？：object）

`animate(...)`启动动画时动画`transition(...)`确定动画启动的动画。

第一个参数包含一种独特的微语法形式。它表示发生的状态变化（或数据变化）。绑定到模板动画绑定的数据（ `[selector]="value"` ）确定此表达式。即将发布的标题为“动画状态”的部分将进一步解释这一概念。

`transition(...)`的第二个参数`transition(...)`包括`AnimationMetadata` （由`animate(...)`返回）。该参数接受`AnimationMetadata`数组或单个实例。

第一个参数的值与模板中绑定的数据的值匹配（ `[selector]="value"` ）。如果发生完美匹配，则参数成功评估。然后第二个参数启动动画以响应第一个的成功。

选项列表可选地占用第三个参数。除非另有说明，否则默认`transition(...)`选项应保持不变。

##### 动画示例

```typescript
import { Component, OnInit } from '@angular/core'; 
 import { trigger, state, style, animate, transition } from '@angular/animations'; 
 
 @Component({ 
  selector: 'app-example', 
  template: ` 
  <h3>Click the button to change its color!</h3> 
  <button (click)="toggleIsCorrect()"     // event binding 
    [@toggleClick]="isGreen">Toggle Me!</button>  // animation binding 
    `, 
    animations: [       // metadata array 
      trigger('toggleClick', [     // trigger block 
      state('true', style({      // final CSS following animation 
        backgroundColor: 'green' 
      })), 
      state('false', style({ 
        backgroundColor: 'red' 
      })), 
      transition('true => false', animate('1000ms linear')),  // animation timing 
      transition('false => true', animate('1000ms linear')) 
    ]) 
  ]        // end of trigger block 
 }) 
 export class ExampleComponent { 
  isGreen: string = 'true'; 
 
  toggleIsCorrect() { 
    this.isGreen = this.isGreen === 'true' ? 'false' : 'true'; // change in data-bound value 
  } 
 } 
```

上面的示例在每次单击按钮时执行非常简单的颜色交换。当然，根据`animate('1000ms linear')` ，颜色以线性渐变快速过渡。动画通过将`trigger(...)`的第一个参数与`[@toggleClick]`动画绑定相匹配来绑定到按钮。

绑定绑定到组件类中`isGreen`的值。此值确定由`trigger(...)`块内的两个`style(...)`方法设置的结果颜色。动画绑定是单向的，因此组件类中对`isGreen`更改会通知模板绑定。也就是说，动画绑定`[@toggleClick]` 。

模板中的button元素也有一个绑定到它的`click`事件。单击该按钮会导致`isGreen`切换值。这会更改组件类数据。动画绑定会选中它并调用其匹配的`trigger(...)`方法。 `trigger(...)`位于组件元数据的动画数组中。触发器调用时会发生两件事。

第一次出现涉及两种`state(...)`方法。 `isGreen`的新值与`state(...)`方法的第一个参数匹配。匹配后， `style(...)`的CSS样式将应用于动画绑定的主机元素的最终状态。 \`最终状态在所有动画后生效。

现在第二次出现。调用动画绑定的数据更改在两个`transition(...)`方法之间进行比较。其中一个将数据更改与其第一个参数进行匹配。第一次按下按钮导致`isGreen`从'true'变为'false'（'true => false'）。这意味着第一个`transition(...)`方法激活其第二个参数。

对应于成功评估的`transition(...)`方法的`animate(...)`函数启动。此方法设置动画颜色渐变的持续时间以及淡入淡出的调步。动画执行，按钮渐变为红色。

点击按钮后，此过程可能会发生任意次。按钮的`backgroundColor`将以线性淡入淡出在绿色和红色之间循环。

#### 动画状态

`transition(...)`微语法值得详细解决。 Angular通过评估此语法来确定动画及其时间。存在以下状态转换。他们模拟绑定到动画绑定的数据的更改。

*   `'someValue' => 'anotherValue'`

一个动画触发器，绑定数据从'someValue'变为'anotherValue'。

*   `'anotherValue' => 'someValue'`

动画触发器，绑定数据从“anotherValue”变为“someValue”。

*   `'someValue' <=> 'anotherValue'`

数据从'someValue\`变为'anotherValue'，反之亦然。

还存在`void`和`*`状态。 `void`表示组件正在进入或离开DOM。这非常适合进入和退出动画。

*   `'someValue' => void` ：绑定数据的主机组件_离开_ DOM
    
*   `void => 'someValue'` ：绑定数据的主机组件正在_进入_ DOM
    

`*`表示通配符状态。通配符状态可以解释为“任何状态”。这包括`void`以及对绑定数据的任何其他更改。

#### 关键帧

本文介绍了为Angular应用程序设置动画的基础知识。高级动画技术与这些基础知识并存。将关键帧组合在一起就是这样一种技术。它的灵感来自`@keyframes` CSS规则。如果您使用过CSS `@keyframes` ，那么您已经了解了Angular中的关键帧是如何工作的。它只是语法问题

`keyframes(...)`方法从`@angular/animations`导入。它传递给`animate(...)`的第二个参数，而不是典型的`AnimationStyleMetadata` 。 `keyframes(...)`方法接受一个参数作为`AnimationStyleMetadata`的数组。这也可以称为`style(...)`方法的数组。

动画的每个关键帧都在`keyframes(...)`数组内。这些关键帧元素是支持`offset`属性的`style(...)`方法。 `offset`表示动画持续时间中应包含其伴随样式属性的点。它的值从0（动画开始）到1（动画结束）。

```typescript
import { Component } from '@angular/core'; 
 import { trigger, state, style, animate, transition, keyframes } from '@angular/animations'; 
 
 @Component({ 
  selector: 'app-example', 
  styles: [ 
    `.ball { 
      position: relative; 
      background-color: black; 
      border-radius: 50%; 
      top: 200px; 
      height: 25px; 
      width: 25px; 
    }` 
  ], 
  template: ` 
  <h3>Arcing Ball Animation</h3> 
  <button (click)="toggleBounce()">Arc the Ball!</button> 
  <div [@animateArc]="arc" class="ball"></div> 
  `, 
  animations: [ 
    trigger('animateArc', [ 
      state('true', style({ 
        left: '400px', 
        top: '200px' 
      })), 
      state('false', style({ 
        left: '0', 
        top: '200px' 
      })), 
      transition('false => true', animate('1000ms linear', keyframes([ 
        style({ left: '0',     top: '200px', offset: 0 }), 
        style({ left: '200px', top: '100px', offset: 0.50 }), 
        style({ left: '400px', top: '200px', offset: 1 }) 
      ]))), 
      transition('true => false', animate('1000ms linear', keyframes([ 
        style({ left: '400px', top: '200px', offset: 0 }), 
        style({ left: '200px', top: '100px', offset: 0.50 }), 
        style({ left: '0',     top: '200px', offset: 1 }) 
      ]))) 
    ]) 
  ] 
 }) 
 export class ExampleComponent { 
  arc: string = 'false'; 
 
  toggleBounce(){ 
    this.arc = this.arc === 'false' ? 'true' : 'false'; 
  } 
 } 
```

与其他示例相比，上述示例的主要区别在于`animate(...)`的第二个参数。它现在包含一个托管动画关键帧数组的关键`keyframes(...)`方法。虽然动画本身也不同，但动画技术是相似的。

单击该按钮会使按钮在屏幕上呈弧形。弧根据`keyframes(...)`方法的数组元素（关键帧）移动。在动画的中点（ `offset: 0.50` ），球改变轨迹。当它继续穿过屏幕时，它下降到原始高度。再次单击该按钮可反转动画。

设置`position: relative;`后， `left`和`top`是可动画的属性`position: relative;`对于元素。 `transform`属性可以执行类似的基于移动的动画。 `transform`是一个广泛但完全可动画的属性。

在偏移0和1之间可以存在任意数量的关键帧。复杂的动画序列采用关键帧的形式。它们是Angular动画中的许多高级技术之一。

### 主机绑定动画

毫无疑问，您会遇到想要将动画附加到组件本身的HTML元素而不是组件模板中的元素的情况。这需要更多的努力，因为你不能只是进入模板HTML并在那里附加动画。相反，您必须导入`HostBinding`并使用它。

此方案的最小代码如下所示。我会为上面的代码重复使用相同的动画条件以保持一致性，并且我不会显示任何实际的动画代码，因为您可以轻松地找到上面的代码。

```typescript
import { Component, HostBinding } from '@angular/core'; 
 
 @Component({ 
 ... 
 }) 
 export class ExampleComponent { 
  @HostBinding('@animateArc') get arcAnimation() { 
    return this.arc; 
  } 
 } 
```

动画主机组件背后的想法几乎与从模板中设置元素动画相同，唯一的区别是您无法访问要动画的元素。在声明`HostBinding` ，您仍然必须传递动画的名称（ `@animateArc` ），并且仍然必须返回动画的当前状态（ `this.arc` ）。函数的名称并不重要，因此`arcAnimation`可以更改为任何内容，只要它不与组件上的现有属性名称冲突，它就可以正常工作。

#### 结论

这涵盖了使用Angular进行动画制作的基础知识。 Angular使用Angular CLI可以非常轻松地设置动画。第一个动画入门只需要一个组件类。请记住，动画范围是组件的模板。如果计划在多个组件中使用过渡数组，请从单独的文件中导出过渡数组。

每个动画实用程序/方法都从`@angular/animations`导出。他们共同努力，提供一个强大的CSS动画系统。除了本文可以涵盖的内容之外，还有更多方法。

现在您已了解基础知识，请随时浏览以下链接，了解有关Angular动画的更多信息。

## 来源

*   [角度团队。 “动画”。 _谷歌_ 2018年6月7日访问。](https://angular.io/guide/animations)
*   [角度团队。 “动画套餐”。 _谷歌_ 2018年6月7日访问。](https://angular.io/api/animations)

## 资源

*   [角度文档](https://angular.io/guide)
*   [角动画教程](https://angular.io/guide/animations)
*   [角动画API](https://angular.io/api/animations)
*   [Angular GitHub存储库](https://github.com/angular/angular)
*   [角度CLI](https://cli.angular.io)