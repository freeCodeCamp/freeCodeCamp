---
title: CSS Flexbox Tips and Tricks
localeTitle: CSS Flexbox提示和技巧
---
# CSS Flexbox

[CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)允许我们轻松地格式化HTML，就像您从未知道的那样。使用flexbox，可以轻松地垂直和水平对齐。喜欢它的声音？我也是。

它对于您的网站或应用程序的总体布局来说也很棒，它易于学习，支持得很好（在所有现代浏览器中）并且非常适合使用，更不用说它不需要很长时间才能掌握！

## Flexbox的

以下是可用于在css中定位元素的flexbox属性列表：

### 可以应用于容器的CSS
```
display: flexbox | inline-flex; 
 flex-direction: row | row-reverse | column | column-reverse; 
 flex-wrap: nowrap | wrap | wrap-reverse; 
 flex-flow: <'flex-direction'> || <'flex-wrap'> 
 justify-content: flex-start | flex-end | center | space-between | space-around; 
 align-items: flex-start | flex-end | center | baseline | stretch; 
 align-content: flex-start | flex-end | center | space-between | space-around | stretch; 
```

### 可以应用于容器中的项目/元素的CSS
```
order: <integer>; 
 flex-grow: <number>; /* default 0 */ 
 flex-shrink: <number>; /* default 1 */ 
 flex-basis: <length> | auto; /* default auto */ 
 flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ] 
 align-self: auto | flex-start | flex-end | center | baseline | stretch; 
```

所以现在你有了自己的工具包，但是你问“我如何处理我的工具，我该如何使用它们？”，让我告诉你。

### 显示Flex

`display: flex;`只是告诉你的浏览器嘿我想用这个容器使用flexbox，拜托。这会将此框初始化为flex容器并应用一些默认的flex属性。

这是容器看起来没有`display: flex;`

![CSS playground没有flex属性](//discourse-user-assets.s3.amazonaws.com/original/2X/8/8f20f30d24cba9a7f56bf950a3f23d37d356ca51.png)

添加`display: flex;`我们得到以下内容，应用默认的flex属性，使其显示为这样

![CSS playground显示flex默认样式](//discourse-user-assets.s3.amazonaws.com/original/2X/6/66404664f9177ae748be00f769faf67d5956034d.png)

### 弹性方向

`flex-direction:`允许我们控制容器中物品的显示方式，你想要它们从左到右，从右到左，从上到下或从下到上？您可以通过设置容器的弯曲方向轻松完成所有这些操作。

Flexbox将行应用为方向的默认值。这是他们所有的样子：

`flex-direction: row;`

![弯曲方向：行;例](//discourse-user-assets.s3.amazonaws.com/original/2X/9/951cc993820547efa28e70dca905f5531a4488d5.png)

`flex-direction: row-reverse;`

![flex-direction：row-reverse示例](//discourse-user-assets.s3.amazonaws.com/original/2X/c/cf738aaf83f29eccdb461e91b775b10e41b92389.png)

`flex-direction: column;`

![flex-direction：列示例](//discourse-user-assets.s3.amazonaws.com/original/2X/7/7ef77565bc07ee86fd3033a531dd76b49709cf7e.png)

`flex-direction: column-reverse;`

![flex-direction：列反向示例](//discourse-user-assets.s3.amazonaws.com/original/2X/e/ec9a1ec064bf0027fa61016ca620df14d9bd47a9.png)

### Flex Wrap

默认情况下，Flexbox会尝试将所有元素放入一行，但您可以使用flex-wrap属性更改它，这允许您设置元素是否会溢出， `flex-wrap:`有3个属性`flex-wrap:`

`flex-wrap: nowrap`这是默认设置，看起来从左到右适合所有行。

`flex-wrap: wrap`这将允许项目继续创建多行并从左到右。

`flex-wrap: wrap-reverse`允许项目在多行上，但这次显示从右到左。

### Flex Flow

柔性流动将`flex-wrap`和`flex-direction`的使用结合到一个属性中，首先设置方向然后包裹使用它。

`flex-flow: column wrap;`是一个如何使用它的例子。

### 证明内容

`justify-content`是一个属性，用于沿主轴对齐容器中的项目（这取决于内容的显示方式）。这有多种选择，它允许我们填充行上的任何空白空间，但定义我们想要“证明”它的方式。

当我们证明我们的内容`flex-start | flex-end | center | space-between | space-around;`时，我们有以下选项`flex-start | flex-end | center | space-between | space-around;` 。

### 对齐项目

对齐项目允许我们沿横轴对齐项目。这允许使用合理内容以多种不同方式定位内容并将项目对齐在一起。

`align-items: flex-start | flex-end | center | baseline | stretch;`

### 对齐内容

这用于对齐具有多条线的项目，用于在横轴上对齐，并且对一行的内容没有影响。

`align-content: flex-start | flex-end | center | space-between | space-around | stretch;`

## 游戏和应用

[Flexbox Defense](http://www.flexboxdefense.com/)是一款以有趣的方式教授flexbox的网页游戏。

[Flexbox Froggy](http://flexboxfroggy.com/)也是一款以有趣的方式教授flexbox的网页游戏。

[Flexbox in 5](http://flexboxin5.com/)是一款网络应用程序，可让您通过一些简单的控件查看flexbox的工作原理。

[Flexyboxes](http://the-echoplex.net/flexyboxes/)是一个应用程序，它允许您查看代码示例和更改参数，以查看Flexbox如何在视觉上工作。

[Flexbox Patters](http://www.flexboxpatterns.com)是一个展示大量Flexbox示例的网站

## 文档

[Mozilla开发者网络](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)

[CSS技巧](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 影片

[Flexbox Essentials](https://www.youtube.com/watch?v=G7EIAgfkhmg)

[Flexbox实例](https://www.youtube.com/watch?v=H1lREysgdgc)

[什么是Flexbox？！](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid)