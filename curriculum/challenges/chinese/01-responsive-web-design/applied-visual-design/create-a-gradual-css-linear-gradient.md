---
id: 587d78a5367417b2b2512ad6
title: 创建一个 CSS 线性渐变
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
---

# --description--

HTML 元素的背景色并不局限于单色。CSS 还提供了颜色过渡，也就是渐变。可以通过 `background` 里面的 `linear-gradient()` 来实现线性渐变，下面是它的语法：

`background: linear-gradient(gradient_direction, 颜色 1, 颜色 2, 颜色 3, ...);`

第一个参数指定了颜色过渡的方向 - 它的值是角度，90deg 代表垂直渐变，45deg 的渐变角度和反斜杠方向差不多。剩下的参数指定了渐变颜色的顺序：

例子：

`background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));`

# --instructions--

使用 `linear-gradient()` 给 `div` 添加 `background` 渐变色，渐变角度 35deg，从 `#CCFFFF` 过渡到 `#FFCCCC`。

**注意**  
有很多种方式指定颜色值，如 `rgb()` 或者 `hsl()`。在本关里请使用 hex 颜色码。

# --hints--

`div` 元素应该有一个指定方向和颜色的 `linear-gradient` `background`渐变色。

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --solutions--

