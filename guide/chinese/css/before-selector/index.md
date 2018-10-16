---
title: Before Selector
localeTitle: 选择器之前
---
## 选择器之前

CSS **:: before**选择器可用于在内容元素之前插入任何内容。它允许设计者在元素中的内容之前执行任何css设计。它通过将**:: before**附加到要使用的元素上来使用。

我们来看一些例子：

```css
p::before { 
    content: ""; 
    border: solid 5px #ccc 
 } 
 
 span.comment::before{ 
  content: "Comment: "; 
  color: blue; 
 } 
```

```html

<p> To infinity and beyond</p> 
 <p> I am buz lightyear, I come in peace.</p> 
 
 <span class="comment"> May the force be with you</span> 
 <br/> 
 <span> Do. Or do not. There is no try</span> 
```

在上面的示例中，我们在页面上的每个段落元素之前添加了一个灰色边框，并且我们还在每个span元素之前使用类注释添加了注释蓝色。

> 你可以在这里查看这个演示https://jsfiddle.net/398by400/

#### 定义和用法

`::before`是CSS伪元素选择器之一，用于设置元素的指定部分的样式。在这种情况下，我们可以在CSS的某些HTML元素之前插入内容。虽然我们将在页面中看到内容，但它不是DOM的一部分，这意味着我们无法通过Javascript操纵它。解决这个障碍的一个技巧是：使用数据属性传递内容并使用jQuery来操作它。这是一个使用示例：

```css
   p::before { 
     content: "Hello "; 
   } 
```

```html

<p>world!!</p> 
```

这将显示`Hello world!!`在页面中。

不仅字符串，图像，计数器甚至没有（“”，对于clearfix有用）都可以插入到`content`属性中，而**不是HTML中** 。以创造性的方式使用`::before`和`after`可以制作很多很酷的东西。如果你很好奇，你可以看看下一个链接： [一堆惊人的东西伪元素可以做](https://www.w3schools.com/css/css_pseudo_elements.asp)

#### 单结肠与双结肠

关于使用伪元素的正确方法有一些讨论：旧式单冒号（ `:before` ），在CSS规范1和2中使用，与CSS3 recomendation，双冒号（ `::before` ），主要是为了_“建立”伪类和伪元素之间的区别“_ 。但出于兼容性原因，仍然接受单冒号。谈到兼容性，IE8仅支持单冒号表示法。

#### 更多信息：

[W3Schools CSS伪元素](https://www.w3schools.com/css/css_pseudo_elements.asp)

[CSS-Tricks ::在/ ::之前](https://css-tricks.com/almanac/selectors/a/after-and-before/)

[使用jQuery选择和操作CSS伪元素，例如:: before和:: after](https://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin)