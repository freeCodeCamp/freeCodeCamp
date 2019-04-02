---
title: Give a Background Color to a div Element
localeTitle: 为div元素提供背景颜色
---
## 为div元素提供背景颜色

您可以通过两种方式之一将`background` `color`更改为`div`元素（或部分）。

**第一种方法：**

在样式括号中创建一个`class` 。

```html

<style> 
 .blue-background { 
    background-color: blue; 
  } 
 </style> 
```

然后，您可以将该`class`添加到`div`元素：

```html

<div class="blue-background"> 
  <p> Example </p> 
 </div> 
```

**第二种方法：**

不用创建的`class`像在第一种方法，你可以创建一个`div`元素`class`的风格括号内。

每个`div`元素都将包含您创建和分配的`class` 。

（这意味着它是您创建的每个`div`元素的重复`class` 。）

```html

<style> 
  div { 
    background-color: blue; 
  } 
 </style> 

```