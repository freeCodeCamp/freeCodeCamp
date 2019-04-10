---
title: Canvas Dimensions
localeTitle: 画布尺寸
---
## 画布尺寸

`width`和`height`属性将控制画布的大小。这些属性控制绘图画布的大小，而不是实际渲染的大小。

见笔[画布后尺寸演示](https://codepen.io/alanluo/pen/jLWMmM/)由罗志祥（ [@alanluo](https://codepen.io/alanluo) ）上[CodePen](https://codepen.io) 。

在上面的笔中，两个`canvas`元素都具有通过CSS设置的相同尺寸。但是，通过`height`属性设置的`height`两倍，因此导致完全相同的矩形在高度的一半处呈现。

当您想要制作动态大小的画布时，这可能会导致问题。对于instnace，您可能想制作全屏画布，或使用画布作为缩略图。

为了使绘图上下文的大小与`canvas`元素的渲染大小相匹配，我们必须实时强制执行此操作。一种常见的做法是将以下处理程序放在`onResize`侦听器中。

```js
// somewhere early in the script 
 var canvas = document.getElementById("canvas"); 
 ... 
 
 window.addEventListener("resize", function() { 
    canvas.setAttribute("width", canvas.scrollWidth); 
    canvas.setAttribute("height", canvas.scrollHeight); 
    console.log(canvas.offsetWidth); 
 }); 
```

#### 更多信息：

*   [MDN Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)