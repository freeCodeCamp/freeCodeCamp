---
id: 587d78a8367417b2b2512ae4
title: 使用无限的动画计数制作 CSS 心跳
challengeType: 0
videoUrl: 'https://scrimba.com/c/cDZpDUr'
forumTopicId: 301062
---

# --description--

这也是一个用 `animation-iteration-count` 属性创造持续动画的例子，它基于前面关卡创建的心形。

心跳动画的每一秒包含两个部分。`heart` 元素（包括 `:before` 和 `:after`）使用 `transform` 属性改变其大小，背景 `div` 使用 `background` 属性改变其颜色。

# --instructions--

给 `back` class和 `heart` class添加值为 infinite 的 `animation-iteration-count` 属性，使心脏持续跳动。`heart:before` 和 `heart:after` 选择器不需要添加动画属性。

# --hints--

`heart` class 的 `animation-iteration-count` 属性应该赋值 infinte。

```js
assert($('.heart').css('animation-iteration-count') == 'infinite');
```

`back` class 的 `animation-iteration-count` 属性应该赋值 infinite。

```js
assert($('.back').css('animation-iteration-count') == 'infinite');
```

# --solutions--

