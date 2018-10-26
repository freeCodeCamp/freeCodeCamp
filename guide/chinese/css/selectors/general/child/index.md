---
title: Child
localeTitle: 儿童
---
## 儿童

子选择器由`>`表示，并放在两个选择器之间： `parent > child` 。它匹配任何第二个选择器，它们是第一个选择器（父级）的子级。第二个选择器必须是第一个选择器的直接子项。

这是一个语法示例：

```css
first selector (parent) > second selector (child) { 
    css declarations; 
 } 
```

这是一个代码示例，它匹配`div`父级的所有直接`span`元素：

```css
div > span { 
    background-color: red; 
 } 
```

### 更多信息：

*   [W3C儿童选择器工作草案](https://www.w3.org/TR/CSS22/selector.html#child-selectors)