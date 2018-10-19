---
title: Override Class Declarations by Styling ID Attributes
localeTitle: 通过样式ID属性覆盖类声明
---
## 通过样式ID属性覆盖类声明

为了理解CSS中的覆盖，首先必须了解CSS中的优先原则。

要记住的关键规则是从底部到顶部读取CSS。

一个例子是：

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
 </style> 
 <h1 class="red-text blue-text">Example</h1> 
```

在上面的示例中，文本`Example`将为蓝色，因为最后添加的类是`blue-text` 。

**记住`id`属性优先于类，这意味着它排名最高是关键。**

您可以通过在类的名称前面添加`#`来创建`id`属性，如下所示：

```html

<style> 
  #purple-text { 
    color: purple; 
  } 
 </style> 
```

下面是一个示例，向您展示如何**通过样式ID属性覆盖类声明** ：

```html

<style> 
  body { 
    background-color: black; 
    font-family: Arial; 
    color: black; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  } 
  #green-color { 
    color: green; 
  } 
 </style> 
 <h1 id="green-color" class="red-text blue-text">Example</h1> 
```

这将使文本`Example`为绿色，因为`id`属性将始终优先于`class`声明。