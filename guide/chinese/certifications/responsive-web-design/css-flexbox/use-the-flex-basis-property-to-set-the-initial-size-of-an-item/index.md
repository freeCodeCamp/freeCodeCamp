---
title: Use the flex-basis Property to Set the Initial Size of an Item
localeTitle: 使用flex-basis属性设置项的初始大小
---
## 使用flex-basis属性设置项的初始大小

使用`flax-basis`可以达到与前两个挑战相同的效果。 设置适当的值后，在应用任何收缩或增长之前，您将看到`#box-2`大于`#box-1` 。

```css
#box-1 { 
  background-color: dodgerblue; 
  height: 200px; 
  flex-basis: 10em; 
 } 
 
 #box-2 { 
  background-color: orangered; 
  height: 200px; 
  flex-basis: 20em; 
 } 

```