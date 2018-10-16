---
title: Override Styles in Subsequent CSS
localeTitle: 覆盖后续CSS中的样式
---
## 覆盖后续CSS中的样式

想要在后续CSS中覆盖样式时要记住的最重要的一点是创建类的顺序。

最后更新的样式将优先于先前编写的类。

例如：

```html

<style> 
  body { 
    color: purple; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  { 
 </style> 
```

现在，当您创建在任何文本`body` ，它将具有文本颜色`purple`分配给它。

要开始尝试覆盖过程，您现在可以添加`"red-text"`类来查看结果。

使用上面的格式，下面的文本将覆盖以前的`purple`字体颜色与`red` 。

```html

<h1 class="red-text">Example</h1> 
```

如果要添加多个类，可以使用以下格式：

```html

<h1 class="class-name1 class-name2 class-name3">Example</h1> 
```

您现在可以将上面创建的最后一个类（ `"blue-text"` ）添加到上面的相同示例中以查看结果。

```html

<h1 class="red-text blue-text">Example</h1> 
```

这将自动选择在样式部分中创建的最后一个类，在本例中为`"blue-text"` 。

即使您在第二类`blue-text` `red-text`后面应用第一类`red-text` `blue-text` ，覆盖过程也将选择最后创建的类。在这种情况下，该类是`blue-text` 。

所以，例如：

```html

<h1 class="blue-text red-text">Example</h1> 
```

由于样式部分的排序，这仍然会显示`blue`字体颜色。

最后创建了`blue-text`类，底部是`</style>` 。