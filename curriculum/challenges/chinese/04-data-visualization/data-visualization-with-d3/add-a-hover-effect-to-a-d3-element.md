---
id: 587d7faa367417b2b2512bd4
title: 给 D3 元素添加悬停效果
challengeType: 6
forumTopicId: 301469
---

# --description--

我们可以为用户的鼠标悬停行为添加高亮显示的效果。到目前为止，矩形的样式应用了内置的 D3 和 SVG 方法，但是你也可以使用 CSS 来实现。

你可以使用 `attr()` 方法在 SVG 元素上设置 CSS 类。然后用 `:hover` 伪类为你新添加的 CSS 类设置鼠标悬停的效果。

# --instructions--

用 `attr()` 方法给所有的 `rect` 元素都添加 `bar` 类。当鼠标悬停在元素上时，它的 `fill` 将变为棕色。

# --hints--

`rect` 元素应该有 `bar` 类。

```js
assert($('rect').attr('class') == 'bar');
```

# --solutions--

