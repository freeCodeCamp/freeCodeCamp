---
id: 587d781e367417b2b2512aca
title: 使用 CSS 偏移移動相對定位的元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

CSS 裏面的 `top`、`bottom`、`left` 和 `right` 定義了元素在相應方位的偏移距離。 元素將從當前位置向屬性相反的方向偏移。 就像你在上一個挑戰看到的，`top` 屬性使 `h2` 向下移動。 同樣，使用 `left` 將項目移動到右邊。

# --instructions--

請通過 CSS 屬性把 `h2` 向上移動 10 像素，向右移動 15 像素。

# --hints--

應使用 CSS 屬性使 `h2` 相對當前位置向上移動 10px。 也就是說，從當前位置相對於 `bottom` 移動 10px。

```js
assert($('h2').css('bottom') == '10px');
```

應使用 CSS 屬性使 `h2` 相對當前位置向右移動 15px。 也就是說，從當前位置相對於 `left` 移動 15px。

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
