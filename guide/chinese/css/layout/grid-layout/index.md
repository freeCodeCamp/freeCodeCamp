---
title: Grid Layout
localeTitle: 网格布局
---
## 网格布局

CSS Grid Layout，简称为Grid，是一种CSS中最新，最强大的布局方案。它[受到所有主流浏览器的支持，](https://caniuse.com/#feat=css-grid)并提供了一种在页面上定位项目并移动它们的方法。

它可以自动将项目分配给_区域_ ，大小和调整大小，根据您定义的模式创建列和行，并使用新引入的`fr`单元进行所有计算。

### 为何选择Grid？

*   您可以轻松拥有一个带有一行CSS的12列网格。 `grid-template-columns: repeat(12, 1fr)`
*   Grid允许您向任何方向移动物体。与Flex不同，您可以在其中水平（ `flex-direction: row` ）或垂直（ `flex-direction: column` ）移动项目 - 不能同时移动两者，Grid允许您将任何_网格项目_移动到页面上的任何预定义_网格区域_ 。您移动的物品不必相邻。
*   使用CSS Grid，您可以**仅使用CSS更改HTML元素的顺序** 。从顶部向右移动某些内容，将页脚中的元素移动到侧边栏等。而不是在HTML中将`<div>`从`<footer>`到`<aside>` ，而只需在`grid-area`中更改它的位置即可。 CSS样式表。

### 网格与Flex

*   Flex是一维的 - 水平或垂直，而Grid是二维的，这意味着您可以在水平和垂直平面中移动元素
*   在Grid中，我们将布局样式应用于父容器而不是项目。另一方面，Flex以flex项为目标来设置`flex-basis` ， `flex-grow`和`flex-shrink`等属性
*   Grid和Flex不是互斥的。您可以在同一个项目中使用它们。

### 使用`@supports`检查浏览器兼容性

理想情况下，在构建站点时，您可以使用Grid进行设计，并使用Flex作为后备。您可以通过`@support` CSS规则（也就是要素查询）查看您的浏览器是否支持网格。这是一个例子：

```css
.container { 
  display: grid; /* display grid by default */ 
 } 
 
 @supports not (display: grid) { /* if grid is not supported by the browser */ 
  .container { 
    display: flex; /* display flex instead of grid */ 
  } 
 } 
```

### 入门

要使任何元素成为网格，您需要将其`display`属性分配给`grid` ，如下所示：

```css
.conatiner { 
  display: grid; 
 } 
```

就是这样。你刚刚把你的`.container`了一个网格。 `.container`每个元素`.container`自动成为网格项。

### 定义模板

行和列

```css
grid-template-columns: 1fr 1fr 1fr 1fr; 
 grid-template-rows: auto 300px; 
```

地区

```css
grid-template-areas: 
  "aaaa" 
  "bcde" 
  "bcde" 
  "ffff"; 
```

要么

```css
grid-template-areas: 
  "header header header header" 
  "nav main main sidebar"; 
```

### 网格区域

这里有一些关于如何定义和分配网格区域的示例代码

```css
.site { 
  display: grid; 
  grid-template-areas: /* applied to grid container */ 
    "head head" /* you're assigning cells to areas by giving the cells an area name */ 
    "nav  main" /* how many values kind of depends on how many cells you have in the grid */ 
    "nav  foot"; 
 } 
 
 .site > header { 
  grid-area: head; 
 } 
 
 .site > nav { 
  grid-area: nav; 
 } 
 
 .site > main { 
    grid-area: main; 
 } 
 
 .site > footer { 
    grid-area: foot; 
 } 
```

### `fr`单位

Grid引入了一个新的`fr`单元，代表_分数_ 。使用`fr`单元的好处在于它可以为您完成计算。使用`fr`可以避免边距和填充问题。使用`%`和`em`等，它在计算`grid-gap`时成为数学方程式。如果你使用了`fr`单位，它会自动计算柱子和装订线尺寸，并相应地调整柱子的大小，加上最后也没有出血间隙。

### 例子

#### 根据屏幕大小更改元素的顺序

假设你想要在小屏幕上将页脚移动到底部，在大屏幕上向右移动，并且在两者之间还有一堆其他HTML元素。

简单的解决方案是根据屏幕大小更改`grid-template-areas` 。您也可以**根据屏幕大小更改列数和行数** 。这是Bootstrap网格系统（ `col-xs-8 col-sm-6 col-md-4 col-lg-3` ）的一种更简洁，更简单的替代方案。

```css
.site { 
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-areas: 
    "title title" 
    "main header" 
    "main sidebar" 
 } 
 
 @media screen and (min-width: 34em) { /* If the screen is big enough, use a different template for grid areas */ 
  .site { 
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-areas: 
      "title title title" 
      "main header header" 
      "main sidebar footer" 
  } 
 } 
```

请参阅[CodePen](https://codepen.io/aamnah)上的[Aamnah](https://codepen.io) Akram（ [@aamnah](https://codepen.io/aamnah) ） [的示例 -](https://codepen.io/aamnah/pen/RLVVoE/) Pen [CSS Grid - 2（网格区域+网格间隙）](https://codepen.io/aamnah/pen/RLVVoE/) 。

#### 更多信息：

*   [Mozilla的CSS Grid Palyground](https://mozilladevelopers.github.io/playground/)如果您是CSS Grids的新手，那么这是一个很好的起点。它具有视觉效果，可帮助您轻松理解术语
*   [YouTube：Morten Rand-Hendriksen：CSS Grid改变了一切（关于Web布局）](https://www.youtube.com/watch?v=txZq7Laz7_4)这个演示文稿将在不到一个小时的时间内为您提供CSS Grids为什么很酷以及为什么/如何使用它们
*   [视频：学习网格布局视频系列由Rachel Andrew](https://gridbyexample.com/video/) Rachel Andrew被认为是该主题的专家。视频标题可能看起来很陌生而且势不可挡，但内容很短且非常重要
*   [书：Rachel Andrew为CSS网格布局做好准备](https://abookapart.com/products/get-ready-for-css-grid-layout)