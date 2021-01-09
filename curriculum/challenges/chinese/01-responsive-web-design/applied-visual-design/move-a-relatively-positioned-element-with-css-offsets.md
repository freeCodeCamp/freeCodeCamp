---
id: 587d781e367417b2b2512aca
title: 使用 CSS 偏移移动相对定位的元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
---

# --description--

CSS 里面的 `top`、`bottom`、`left` 和 `right` 定义了元素在相应方位的偏移距离。元素将从当前位置向属性相反的方向偏移。就像你在上一个挑战看到的，`top` 属性使 `h2` 向下移动。`left` 属性使元素向右移动。

<img src='https://i.imgur.com/eWWi3gZ.gif' alt=''>

# --instructions--

请通过 CSS 属性把 `h2` 向上移动 10 像素，向右移动 15 像素。

# --hints--

应使用 CSS 属性使 `h2` 相对当前位置向上移动 `10px`。也就是说，从 `h2` 当前位置远离 `bottom` `10px`。

```js
assert($('h2').css('bottom') == '10px');
```

应使用 CSS 属性使 `h2` 相对当前位置向右移动 `15px`。也就是说，从 `h2` 当前位置远离 `left` `15px`。

```js
assert($('h2').css('left') == '15px');
```

# --solutions--

