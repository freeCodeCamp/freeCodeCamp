---
id: 587d78a3367417b2b2512ace
title: 使用 float 属性将元素左浮动或右浮动
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
---

# --description--

接下来要介绍的定位机制并不是 `position` 属性的选项，它通过元素的 `float` 属性来设置。浮动元素不在文档流中，它向左或向右浮动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。通常需要用 `width` 属性来指定浮动元素占据的水平空间。

# --instructions--

设置 `#left` 元素的 `float` 为 `left`，设置 `#right` 元素的 `float` 为 `right`。使这两个元素按两列布局，`section` 和 `aside` 左右排列。

# --hints--

id 为 `left` 的元素应该有一个值为 `left` 的 `float` CSS 属性。

```js
assert($('#left').css('float') == 'left');
```

id 为 `right` 的元素应该有一个值为 `right` 的 `float` CSS 属性。

```js
assert($('#right').css('float') == 'right');
```

# --solutions--

