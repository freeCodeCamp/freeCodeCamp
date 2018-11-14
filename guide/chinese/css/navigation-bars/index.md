---
title: Navigation Bars
localeTitle: 导航栏
---
## 导航栏

导航栏是任何网站的一个非常重要的元素。它们通过提供到用户的主链接列表来提供主要的导航方法。有许多方法可以创建导航栏。创建导航栏的最简单方法是使用无序列表并使用CSS设置样式。

导航栏主要由水平排列和样式化的`<ul>`列表组成。

在设置导航栏样式时，通常会删除由`<ul>`和`<li>`标记创建的额外间距以及自动插入的项目符号：

```css
   list-style-type: none; 
   margin: 0px; 
   padding: 0px; 
```

**例：**

任何导航都有两个部分：HTML和CSS。这只是一个简单的例子。

```html

<nav class="myNav">                                 <!-- Any element can be used here --> 
    <ul> 
        <li><a href="index.html">Home</a></li> 
        <li><a href="about.html">About</a></li> 
        <li><a href="contact.html">Contact</a></li> 
    </ul> 
 </nav> 
```

```css
/* Define the main Navigation block */ 
 .myNav { 
    display: block; 
    height: 50px; 
    line-height: 50px; 
    background-color: #333; 
 } 
 /* Remove bullets, margin and padding */ 
 .myNav ul { 
    list-style: none; 
    padding: 0; 
    margin: 0; 
 } 
 .myNav li { 
    float: left; 
    /* Or you can use display: inline; */ 
 } 
 /* Define the block styling for the links */ 
 .myNav li a { 
    display: inline-block; 
    text-align: center; 
    padding: 14px 16px; 
 } 
 /* This is optional, however if you want to display the active link differently apply a background to it */ 
 .myNav li a.active { 
    background-color: #3786E1; 
 } 
```

#### 更多信息：

更多导航示例： [W3Schools](https://www.w3schools.com/css/css_navbar.asp)