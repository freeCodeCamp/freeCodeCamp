---
id: bad87fee1248bd9aedf08824
title: 给元素的每一侧添加不同的外边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
---

# --description--

有时候，你会想给一个元素每个方向的 `margin` 都设置成一个特定的值。

CSS 允许你使用 `margin-top`、`margin-right`、`margin-bottom`、`margin-left` 属性来设置四个不同方向的 `margin` 值。

# --instructions--

请将蓝色框的顶部和左侧 `margin` 属性值设置为 `40px`；将底部和右侧的属性值设置为 `20px`。

# --hints--

class 为 `blue-box` 的元素的上外边距属性值应为 `40px`。

```js
assert($('.blue-box').css('margin-top') === '40px');
```

class 为 `blue-box` 的元素的右外边距属性值应为 `20px`。

```js
assert($('.blue-box').css('margin-right') === '20px');
```

class 为 `blue-box` 的元素的下外边距属性值应为 `20px`。

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

class 为 `blue-box` 的元素的左外边距属性值应为 `40px`。

```js
assert($('.blue-box').css('margin-left') === '40px');
```

# --solutions--

