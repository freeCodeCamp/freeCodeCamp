---
title: Selectors
localeTitle: 选择
---
# 选择

选择器是用于定位HTML元素以应用样式的CSS规则。标记名称，类名称，id和属性是用作选择器的一些钩子。

## 选择器语法

按特定顺序排列的选择器将构建一个规则来定位元素。一个例子，

```css
/* selects anchor tags */ 
 a { 
    color: orange; 
 } 
 
 /* selects elements with hero class */ 
 .hero { 
    text-align: center; 
 } 
```

## 选择器的类型

输入|描述 ------- | ------------ 类型选择器|标签名称用于选择元素，如`h1`或`a` 。 通用选择器|适用于所有元素的选择器。 `div *`匹配div元素中的所有元素。 属性选择器|选择器基于其属性\[以及可选的值\]来定位元素。 `h1[title]`选择具有`title`属性的`h1`元素。 类选择器|使用类名定位元素的选择器。 ID选择器|使用ID定位元素的选择器。 `#logo`选择`logo`为ID的元素。 伪类选择器|特殊选择器，根据其状态定位元素。 `a:hover`当指针悬停在链接上时， `a:hover`选择器应用样式。

## 选择器组合器

组合|目的 ----------- | ------------ `white space` |后裔组合子。 `.nav li`选择类`.nav`所有`li`子元素，包括嵌套的`li`元素。 `>` |儿童组合子。 `.menu > li`选择所有具有`.menu`类的元素直接子元素的li。 `+` |相邻的兄弟组合子。 `.logo + h1`目标是`h1` ，它是`.logo`类的直接兄弟。 `~` |一般兄弟组合。 `header ~ div` `div`元素作为`header`元素的兄弟元素。

本节详细介绍了所有这些选民。

#### 更多信息：

您可以在这些资源上了解有关选择器的更多信息：

*   [官方CSS3选择器规范](https://www.w3.org/TR/css3-selectors)
*   [Mozilla Developer Network上的选择器页面](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
*   [FreeCodeCamp指南上的CSS选择器备忘单](https://guide.freecodecamp.org/css/tutorials/css-selectors-cheat-sheet)

CSS中的选择器（级联样式表）是根据_特定性_确定的，我们可以更加具体地说明我们的样式规则，并覆盖可能针对相同元素但不具体的其他规则。此特定层次结构的工作方式基于权重，意味着元素选择器的权重为1（一），类选择器的权重为10（十），id选择器的权重为一百（100）。我们能够将不同的选择器组合在一起，更具体地说明我们要改变的元素。

举个例子：

`css p { color: blue; } p .red { color: red; }` 我们的类型选择器p将选择我们的html文档中的所有p元素，但它只有一个权重。相反，类选择器的权重为11，因为我们将类型选择器与类选择器组合在一起（此选择器将所有p元素与红色类匹配）。 - \*直接定向规则将始终优先于从其祖先继承元素的规则。 - \*仅当多个声明针对同一元素时才应用特定，然后才应用此规则。  
\- \*特性通常是为什么你们有些样式规则不适用于你期望它们的元素。