---
title: Z Index
localeTitle: Z指数
---
## Z指数

Z Index（ `z-index` ）是一个CSS属性，用于定义重叠HTML元素的顺序。具有较高索引的元素将放置在具有较低索引的元素之上。

**注意** ：Z索引仅适用于定位元素（ `position:absolute` ， `position:relative`或`position:fixed` ）。

#### 可能的值

```css
/* Default value if not specified */ 
 z-index: auto; 
 
 /* Integer values */ 
 z-index: 1; 
 z-index: 100; 
 z-index: 9999; 
 z-index: -1; 
 
 /* Global values */ 
 z-index: inherit; 
 z-index: initial; 
 z-index: unset; 
```

#### 示例用法

在此示例中，您可以使用`z-index`看到以不同顺序在彼此之上显示的三个框。

_HTML_

```html

<div class="container"> 
  <div class="box" id="blue"></div> 
  <div class="box" id="red"></div> 
  <div class="box" id="green"></div> 
 </div> 
```

_CSS_

```css
#blue { 
  background-color: blue; 
 } 
 
 #red { 
  background-color: red; 
 } 
 
 #green { 
  background-color: green; 
 } 
```

由于未定义`z-index` ，因此默认值为`auto` 。这是一个结果：

![三个盒子的图像](https://image.prntscr.com/image/Yc9oGkdKTnm_YIHzaKQmbQ.png)

尝试使用`z-index` CSS中的顺序更改为绿色，蓝色，红色。

```css
#blue { 
  background-color: blue; 
  z-index: 2; 
 } 
 
 #red { 
  background-color: red; 
  z-index: 1; 
 } 
 
 #green { 
  background-color: green; 
  z-index: 3; 
 } 
```

你的结果将是：

![三个盒子的图像](https://image.prntscr.com/image/Am9XxPO4Q2mq-PcokJ47Wg.png)

如果需要在容器下面放置背景元素，请使用Z Index。你可以轻松地将背景放在每个元素下面，给它一个负Z指数，如下所示：

```css
#background { 
  z-index: -1; 
 } 
```

#### 更多信息：

[https://css-tricks.com/almanac/properties/z/z-index/](https://css-tricks.com/almanac/properties/z/z-index/)

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS _定位/理解_ z\_index](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index)

[https://philipwalton.com/articles/what-no-one-told-you-about-z-index/](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)