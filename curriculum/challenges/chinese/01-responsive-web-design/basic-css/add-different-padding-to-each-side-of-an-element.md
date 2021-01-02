---
id: bad87fee1348bd9aedf08824
title: 给元素的每一侧添加不同的内边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
---

# --description--

有时候，你会想给一个元素每个方向的 `padding` 都设置一个特定的值

CSS 允许你使用 `padding-top`、`padding-right`、`padding-bottom`、`padding-left` 属性来设置四个不同方向的 `padding` 值。

# --instructions--

请将蓝色框的顶部和左侧 `padding` 属性值设置为 `40px`；将底部和右侧的属性值设置为 `20px`。

# --hints--

class 为 `blue-box` 的元素的上内边距属性值应为 `40px`。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

class 为 `blue-box` 的元素的右内边距属性值应为 `20px`。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

class 为 `blue-box` 的元素的下内边距属性值应为 `20px`。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

class 为 `blue-box` 的元素的左内边距属性值应为 `40px`。

```js
assert($('.blue-box').css('padding-left') === '40px');
```

# --solutions--

