---
id: 587d7fa9367417b2b2512bd1
title: 更改 SVG 元素的颜色
challengeType: 6
forumTopicId: 301480
---

# --description--

所有组都在正确的位置上了，但是它们都是一样的黑色。SVG 可以改变组的颜色。

在 SVG 中， `rect` 图形用 `fill` 属性着色，它支持十六进制代码、颜色名称、rgb 值以及更复杂的选项，比如渐变和透明。

# --instructions--

添加 `attr()` 方法，将所有组的 "fill" 设置为 "navy"。

# --hints--

所有组的 `fill` 颜色都应该是 navy。

```js
assert($('rect').css('fill') == 'rgb(0, 0, 128)');
```

# --solutions--

