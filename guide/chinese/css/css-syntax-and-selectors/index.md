---
title: CSS Syntax and Selectors
localeTitle: CSS语法和选择器
---
## CSS语法和选择器

当我们谈论CSS的语法时，我们谈论的是如何布局。关于什么去哪里都有规则，因此你可以一致地编写CSS，程序（如浏览器）可以解释它并正确地将它应用到页面。

编写CSS有两种主要方法。

### 内联CSS

关于CSS特异性的细节： [CSS技巧](https://css-tricks.com/specifics-on-css-specificity/)

内联CSS将样式应用于单个元素及其子元素，直到遇到覆盖第一个元素的另一个样式。

要应用内联CSS，请将“style”属性添加到您要修改的HTML元素中。在引号内，包括一个以分号分隔的键/值对列表（每个由冒号分隔），表示要设置的样式。

这是一个内联CSS的例子。单词“One”和“Two”将具有黄色的背景颜色和红色的文本颜色。单词“Three”具有覆盖第一个的新样式，并且将具有青色的背景颜色和青色的文本颜色。在示例中，我们将样式应用于`<div>`标记，但您可以将样式应用于任何HTML元素。

```html

<div style="color:red; background:yellow"> 
  One 
  <div> 
    Two 
  </div> 
  <div style="color:cyan; background:green"> 
    Three 
  </div> 
 </div> 
```

### 内部CSS

虽然编写内联样式是更改单个元素的快捷方式，但是有一种更有效的方法可以同时将相同的样式应用于页面的许多元素。

内部CSS在`<style>`标记中指定了`<style>` ，并嵌入在`<head>`标记中。

这是一个与上面的“内联”示例具有类似效果的示例，除了CSS已被提取到其自己的区域。单词“One”和“Two”将匹配`div`选择器，并且是黄色背景上的红色文本。单词“Three”和“Four”也将与`div`选择器匹配，但它们也匹配`.nested_div`选择器，该选择器适用于引用该类的任何HTML元素。这个更具体的选择器会覆盖第一个，它们最终会在绿色背景上显示为青色文本。

```html

<style type="text/css"> 
  div { color: red; background: yellow; } 
  .nested_div { color: cyan; background: green; } 
 </style> 
 
 <div> 
  One 
  <div> 
    Two 
  </div> 
  <div class="nested_div"> 
    Three 
  </div> 
  <div class="nested_div"> 
    Four 
  </div> 
 </div> 
```

上面显示的选择器非常简单，但它们可能会非常复杂。例如，可以仅将样式应用于嵌套元素;也就是说，是另一个元素的子元素。

这是一个示例，我们指定的样式应该只应用于`div`元素，这些元素是其他`div`元素的直接子元素。结果是“两个”和“三个”将在黄色背景上显示为红色文本，但“一个”和“四个”将保持不受影响（并且很可能是白色背景上的黑色文本）。

```html

<style type="text/css"> 
  div > div { color: red; background: yellow; } 
 </style> 
 
 <div> 
  One 
  <div> 
    Two 
  </div> 
  <div> 
    Three 
  </div> 
 </div> 
 <div> 
  Four 
 </div> 
```

### 外部CSS

所有样式都有自己的文档，该文档链接在`<head>`标记中。链接文件的扩展名为`.css`

#### 更多信息：

*   [CSS语法](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax) @MDN
*   [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) @ MDN
*   [CSS选择器参考](https://www.w3schools.com/cssref/css_selectors.asp)
*   [CSS选择器的特异性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)