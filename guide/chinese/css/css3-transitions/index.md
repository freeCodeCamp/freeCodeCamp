---
title: CSS3 Transitions
localeTitle: CSS3过渡
---
## CSS3过渡

如果您希望您的应用或网页更具动态性和美观，则使用CSS3 **过渡**非常有用。

实际上，转换允许您以**平滑的**方式更改属性（ `width` ， `color` ，...）值。

`transition`属性是`transition-property` ， `transition-duration` ， `transition-timing-function` ， `transition-delay`的简写属性，语法如下：

```css
transition: transition-property transition-duration transition-timing-function transition-delay 
```

例如 ：
```
transition: width 2s ease-in-out 1s; 
```

### 属性描述

#### `transition-property`

指定应应用转换的属性的**名称** ：

*   `background-color`
*   `color`
*   `width`
*   `height`
*   `margin`
*   `border-radius`
*   等等 ！

例如 ：
```
transition-property: width; /* means the transition applies on the width */ 
```

#### `transition-duration`

指定转换应**采用** **的秒数或毫秒数** ：

例如 ：
```
transition-duration: 2s /* means the transition effect last 2s */ 
```

#### `transition-timing-function`

指定过渡效果的**速度曲线** 。因此，您可以**在其持续时间内**更改**转换的速度** 。

以下是最常用的值：

*   `linear`
*   `ease`
*   `ease-in`
*   `ease-out`
*   `ease-in-out`
*   `cubic-bezier(n, n, n, n)`

例如 ：

```css
transition-timing-function: linear 
```

注意：上面的所有值实际上都是特定的`cubic-bezier` 。例如， `linear`相当于`cubic-bezier(0.25,0.1,0.25,1)`

您可以[在这里](http://cubic-bezier.com/)试验并了解有关_Cubic Bezier的_更多信息

#### `transition-delay`

转换**开始**时以**秒或毫秒**指定。

例如 ：
```
transition-delay: 1s /* means wait 1s before the transition effect start */ 
```

### 如何使用过渡？

您可以通过两种方式编写转换：

#### 使用速记属性（ `transition` ）

```css
div { 
  width: 200px; 
  transition: all 1s ease-in-out; 
 } 
 
 div:hover { 
  width: 300px; 
 } 
```

#### 为所有过渡属性赋予值

```css
div { 
  width: 200px; 
  transition-property: width; 
  transition-duration: 1s; 
  transition-timing-function: ease-in-out; 
 } 
```

注意：两个例子都是**等价的**

### 例子

以下是一些包含简单过渡的简单笔：

*   [基本过渡](https://codepen.io/thomlom/pen/gGqzNp)
*   [过渡+ JavaScript](https://codepen.io/thomlom/pen/JrxZKz?editors=1111)

#### 更多信息：

*   [w3schools：CSS3过渡](https://www.w3schools.com/css/css3_transitions.asp)
*   [MDN Web文档：使用CSS过渡](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
*   [DevTips：CSS Transition](https://www.youtube.com/watch?v=8kK-cA99SA0)