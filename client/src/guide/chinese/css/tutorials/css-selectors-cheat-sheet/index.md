---
title: CSS Selectors Cheat Sheet
localeTitle: CSS选择器备忘单
---
# CSS选择器

在CSS中，选择器是用于选择DOM元素的模式。

以下是使用选择器的示例。在以下代码中， `a`和`h1`是选择器：

```css
a { 
  color: black; 
 } 
 
 h1 { 
  font-size 24px; 
 } 
```

## 选择器的作弊清单

|选择器|选择|  
| --- | --- | | `head` |选择带有`head`标签的元素  
| `.red` |选择所有带有'red'类的元素  
| `#nav` |使用'nav'Id |选择元素  
| `div.row` |选择具有`div`标签和'row'类的所有元素 | `[aria-hidden="true"]` |选择具有值为“true”|的`aria-hidden`属性的所有元素 | `*` |通配符选择器。选择所有DOM元素。请参阅下面与其他选择器一起使用|

我们可以以有趣的方式组合选择器。一些例子：

|选择器|选择|  
| --- | --- | | `li a` | DOM后代组合子。所有的`a`标记，是一个孩子`li`标签|  
| `div.row *` |选择具有`div`标签和'row'class |的元素的后代（或子元素）的所有元素  
| `li > a` |差异组合子。选择直接后代，而不是所有后代，如后代选择器|  
| `li + a` |相邻的组合子。它选择紧跟前一个元素的元素。在这种情况下，每个`li`只有第一个`a` 。 |  
| `li, a` |选择所有`a`元素和所有的`li`元素。 |  
| `li ~ a` |兄弟姐妹的组合子。选择`a`承接元件`li`元件。 |

伪选择器或伪结构类对于从DOM中选择结构元素也是有用的。这里是其中的一些：

|选择器|选择| | --- | --- |  
| `:first-child` |在另一个元素的内部（或子元素）内立即定位第一个元素  
| `:last-child` |在另一个元素的内部（或子元素）内立即定位最后一个元素  
| `:nth-child()` |直接在另一个元素的内部（或子元素）中定位第n个元素。承认整数， `even` ， `odd`或公式|  
| `a:not(.name)` |选择所有不属于`.name`类`a`元素  
| `::after` |允许从CSS而不是HTML将内容插入页面。虽然最终结果实际上不在DOM中，但它在页面上显示为好像是。此内容在HTML元素之后加载。 |  
| `::before` |允许从CSS而不是HTML将内容插入页面。虽然最终结果实际上不在DOM中，但它在页面上显示为好像是。此内容在HTML元素之前加载。 |

我们可以使用伪类来定义DOM元素的特殊状态，但不要单独指向元素。一些例子：

|伪类|选择| | --- | --- | | `:hover` |选择一个被鼠标指针悬停的元素  
| `:focus` |选择一个从键盘接收焦点的元素或以编程方式| | `:active` |选择被鼠标指针点击的元素  
| `:link` |选择尚未点击的所有链接|  
| `:visited` |选择已被点击的链接

## 游戏

[CSS Diner](http://flukeout.github.io)是一款网络游戏，教授几乎所有关于组合选择器的知识。

## 补充参考

还有更多的CSS选择器！在[CodeTuts](http://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048) ， [CSS-tricks.com](https://css-tricks.com/almanac/selectors/) ， [w3schools.com](http://www.w3schools.com/cssref/css_selectors.asp)或[Mozilla Developer Network上](https://developer.mozilla.org/en/docs/Web/Guide/CSS/Getting_started/Selectors)了解它们。