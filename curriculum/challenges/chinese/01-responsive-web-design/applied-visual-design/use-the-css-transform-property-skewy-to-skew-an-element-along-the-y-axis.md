---
id: 587d78a6367417b2b2512adc
title: 使用 CSS Transform skex 属性沿Y轴倾斜元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

`skewX` 函数使指定元素沿 X 轴翻转指定的角度，想必你已经猜到了，`skewY` 属性使指定元素沿 Y 轴（垂直方向）翻转指定角度。

# --instructions--

使用 `transform` 属性沿 Y 轴翻转 id 为 `top` 的元素 -10 度。

# --hints--

id 为 `top` 的元素应该沿着 Y 轴翻转 -10 度。

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
