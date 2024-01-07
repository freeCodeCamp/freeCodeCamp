---
id: 587d781e367417b2b2512aca
title: 使用 CSS 偏移移动相对定位的元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

CSS 里面的 `top`、`bottom`、`left` 和 `right` 定义了元素在相应方位的偏移距离。 元素将从当前位置向属性相反的方向偏移。 就像你在上一个挑战看到的，`top` 属性使 `h2` 向下移动。 同样，使用 `left` 将项目移动到右边。

# --instructions--

请通过 CSS 属性把 `h2` 向上移动 10 像素，向右移动 15 像素。

# --hints--

应使用 CSS 属性使 `h2` 相对当前位置向上移动 10px。 也就是说，从当前位置相对于 `bottom` 移动 10px。

```js
assert($('h2').css('bottom') == '10px');
```

应使用 CSS 属性使 `h2` 相对当前位置向右移动 15px。 也就是说，从当前位置相对于 `left` 移动 15px。

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
