---
id: bad87fee1348bd9aedf08824
title: 給元素的每一側添加不同的內邊距
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

有時候，你會想給一個元素每個方向的 `padding` 都設置一個特定的值

CSS 允許你使用 `padding-top`、`padding-right`、`padding-bottom`、`padding-left` 屬性來設置四個不同方向的 `padding` 值。

# --instructions--

請將藍色框的頂部和左側 `padding` 屬性值設置爲 `40px`；將底部和右側的屬性值設置爲 `20px`。

# --hints--

class 爲 `blue-box` 的元素的上內邊距屬性值 `padding` 應爲 `40px`。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

class 爲 `blue-box` 的元素的右內邊距屬性值 `padding` 應爲 `20px`。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

class 爲 `blue-box` 的元素的下內邊距屬性值 `padding` 應爲 `20px`。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

class 爲 `blue-box` 的元素的左內邊距屬性值 `padding` 應爲 `40px`。

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
