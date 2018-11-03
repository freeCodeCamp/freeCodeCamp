---
title: Introduction to HTML5 Elements
localeTitle: HTML5元素简介
---
## HTML5元素简介

将HTML元素包装在其他HTML元素周围意味着将_内部_元素放在包装器的开始标记之后和结束标记之前。  

下面的示例表示包含在`header`元素中的`h1`元素和`h4`元素：
```
<header> 
  <h1> Big title </h1> 
  <h4> Tiny subtitle </h4> 
 </header> 
```

正如您所看到的， `header`包含最终位于同一级别的其他元素（ `h1`在`h4`开始之前结束，并且两者都嵌套在`header` ）。