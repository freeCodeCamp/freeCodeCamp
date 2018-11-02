---
title: Limit Item Size Using the minmax Function ##
localeTitle: 使用minmax函数限制项目大小##
---
将_minmax_函数与_repeat_函数结合使用正是这个挑战所描述的内容，但这对我来说本身并不明显。传递此挑战的方法是删除_repeat_函数中的**max-width**值，然后添加_minmax_函数来代替_repeat_ **max-width**值。

这里是什么样子_之前_和_之后_的方法用一个**例子** ：

### 之前

```css
    grid-template-columns: repeat(3, 1fr); 
```

### 后

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```

* * *

您也可以在Codepen上查看此嵌入式笔以查看实际操作中的示例，您可以调整其大小以查看结果：

请参阅[CodePen](https://codepen.io/skywardcode)上的[skywardcode](https://codepen.io) （ [@skywardcode](https://codepen.io/skywardcode) ）的Pen [limit-item-size-using-the-minmax-function](https://codepen.io/skywardcode/pen/EeGGze/) 。

### 资源

[Mozilla开发者网络](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)