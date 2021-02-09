---
id: bad87fee1348bd9aedf08824
title: 给元素的每一侧添加不同的内边距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

有时候，你会想给一个元素每个方向的 `padding` 都设置一个特定的值

CSS 允许你使用 `padding-top`、`padding-right`、`padding-bottom`、`padding-left` 属性来设置四个不同方向的 `padding` 值。

# --instructions--

请将蓝色框的顶部和左侧 `padding` 属性值设置为 `40px`；将底部和右侧的属性值设置为 `20px`。

# --hints--

class 为 `blue-box` 的元素的上内边距属性值 `padding` 应为 `40px`。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

class 为 `blue-box` 的元素的右内边距属性值 `padding` 应为 `20px`。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

class 为 `blue-box` 的元素的下内边距属性值 `padding` 应为 `20px`。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

class 为 `blue-box` 的元素的左内边距属性值 `padding` 应为 `40px`。

```js
assert($('.blue-box').css('padding-left') === '40px');
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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
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
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
