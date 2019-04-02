---
title: CSS Classes
localeTitle: CSS类
---
## CSS类

类是对HTML元素进行分组的有效方式，以便它们可以共享相同的样式。 CSS（层叠样式表）类可用于排列和装饰网页元素。

编写HTML时，可以向元素添加类。只需将属性`class="myclass"`到元素即可。多个元素可以具有相同的类，一个元素可以具有多个类。通过将空格分隔的所有所需类名添加到HTML中的`class`属性，可以为元素分配多个类。

```html

<h1 class="super-man other-class third-class">"Here I come to save the day!"</h1> 
 <p>is a popular catchphrase that <span class="super-man">Super Man</span> often said.</p> 
```

然后可以使用CSS设置这些元素的样式。在CSS中使用句点（。）引用类，但不应在HTML中添加句点。

```css
.super-man { 
  color: red; 
  background-color: blue; 
 } 
```

此代码为具有`super-man`所有元素提供蓝色背景和红色文本颜色。 [在CodePen上查看此示例](https://codepen.io/Tlandis/pen/RLvomV) 。

您还可以为元素声明多个类，例如：

```html

<div class="ironMan alfred"> 
 We're going to save you. 
 </div> 
```

然后在你的css文件中：

```css
.ironMan{ 
 color:red; 
 } 
 
 .alfred{ 
 background-color: black; 
 } 
```

**注意：**类名传统上都是小写的，多个单词类名中的每个单词用连字符分隔（例如“super-man”）。

您还可以在同一行中组合类：

```css
.superMan .spiderMan { 
 color: red; 
 background-color: blue; 
 } 
```

您可以在[此处](https://codepen.io/Tlandis/pen/RLvomV)查看上述代码的[结果](https://codepen.io/Tlandis/pen/RLvomV) 。 [在这里](https://www.w3schools.com/css/css_combinators.asp)学习如何使用选择器组合CSS类。

#### 更多信息：

*   [CSS Class Selector，w3学校](https://www.w3schools.com/cssref/sel_class.asp)
*   [HTML课程，w3学校](https://www.w3schools.com/html/html_classes.asp)
*   [CSS-技巧](https://css-tricks.com/how-css-selectors-work/)
*   [如何在HTML5和CSS3中编码](http://howtocodeinhtml.com/chapter7.html)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)