---
title: ol Tag
localeTitle: ol标签
---
## ol标签

`<ol>`标记在HTML中创建有序列表元素。有序列表是HTML中的两个列表结构之一，另一个是由`<ul>`标记创建的无序列表。有序列表用于显示具有有意义顺序的列表。默认情况下，有序列表中的列表项显示为编号列表，从1开始。可以使用“type”属性或使用CSS样式更改此行为。列表元素可以嵌套。

```html

<ol> 
  <li>First Item</li> 
  <li>Second Item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First Subitem</li> 
      <li>Second Subitem</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third Item</li> 
 </ol> 
```

### 有序与无序列表

在HTML中，有序和无序列表在使用和样式方面都类似。在更改项目顺序的位置使用有序列表将更改列表的含义。例如，有序列表可用于配方，其中改变步骤的顺序很重要。对没有有意义顺序的项目组使用无序列表。农场中的动物列表可以列在无序列表中。

#### 更多信息：

## 其他资源

*   [无序列表`<ul>`](https://github.com/freeCodeCamp/guides/blob/master/src/pages/html/elements/ul-tag/index.md)
*   [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)