---
title: How to Horizontally Center a Div Tag in Another Div Tag
localeTitle: 如何在另一个Div标签中水平居中Div标签
---
## 如何在另一个Div标签中水平居中Div标签

水平为中心的`<div>`的另一个内`<div>`是很容易的。

让我们从创建两个带有“父”和“子”类的div标签开始。父母将是我们的容器，孩子将是`<div>`我们水平居中。

```html

<!DOCTYPE html> 
 <html> 
 <head> 
  <meta charset="UTF-8"> 
  <title>How to Horizontally Center a Div Tag in Another Div Tag</title> 
 </head> 
 <body> 
  <div class="parent"> 
    <div class="child"> 
      <p>This is the center.</p> 
    </div> 
  </div> 
 </body> 
 </html> 
```

有几种方法可以解决这个问题，但是对于本教程，我们将重点关注两个方面。在第一个中，我们将使用`margin`将我们的孩子`<div>`居中，在第二个中我们将使用`flexbox` 。

### 使用边距居中Div标签的示例

如果在子div上指定`width` ，则可以使用`margin: auto` 。这将通过均匀分布其左右边距来使您的孩子`<div>`居中。

```css
.parent { 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  width: 50%; 
  margin: auto; 
  border: 1px solid black; 
 } 
```

### 使用Flexbox对Div标记进行居中的示例

使用flexbox将`<div>`置于中心位置略有不同。首先，它不要求您在子`<div>`上指定`width` 。其次，你居然中心孩子`<div>`由父应用CSS属性`<div>`

要使用flexbox对子`<div>`进行居中，您需要使用`display: flex`以及`justify-content: center`在父`<div>` 。

```css
.parent { 
  display: flex; 
  justify-content: center; 
  border: 2px solid red; 
 } 
 
 .centered-child { 
  border: 1px solid black; 
 } 
```

#### 更多信息：

[Flexbox支持矩阵](http://caniuse.com/#search=flexbox)