---
id: bad82fee1322bd9aedf08721
title: 理解绝对单位与相对单位
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

最近的几个挑战都是设置元素的内边距和外边距的 `px` 值，即像素。 像素是一个长度单位，它告诉浏览器应该如何调整元素的大小和位置。 其实除了 `px`，CSS 也有其他单位供我们使用。

单位长度的类型可以分成 2 种：相对和绝对。 绝对单位与长度的物理单位相关。 例如，`in` 和 `mm` 分别代表着英寸和毫米。 绝对长度单位会接近屏幕上的实际测量值，不过不同屏幕的分辨率会存在差异，这就可能会造成误差。

相对单位长度，比如 `em` 和 `rem`，它们的实际值会依赖其他长度的值而决定。 比如 `em` 的大小基于元素字体的字体大小。 如果使用它来设置 `font-size` 值，它的值会跟随父元素的 `font-size` 值来改变。

**Note:** 有些单位长度选项是相对视窗大小来改变值的， 这种设定符合响应式网页设计的原则。

# --instructions--

给 `red-box` class 添加 `padding` 属性，并设置其属性值为 `1.5em`。

# --hints--

class 为 `red-box` 的元素应含有 `padding` 属性。

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

class 为 `red-box` 的元素的 `padding` 属性值应为 1.5em。

```js
assert(code.match(/\.red-box\s*?{[\s\S]*padding\s*:\s*?1\.5em/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;

  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```

# --solutions--

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: red;
    margin: 20px 40px 20px 40px;
    padding: 1.5em;
  }

  .green-box {
    background-color: green;
    margin: 20px 40px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box green-box">padding</h5>
</div>
```
