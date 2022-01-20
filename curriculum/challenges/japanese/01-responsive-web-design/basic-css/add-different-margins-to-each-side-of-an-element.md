---
id: bad87fee1248bd9aedf08824
title: 要素の四辺に異なるマージンを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4RWh4'
forumTopicId: 16633
dashedName: add-different-margins-to-each-side-of-an-element
---

# --description--

それぞれの側で異なる `margin` を持つように要素をカスタマイズしたい場合もあるでしょう。

CSS では `margin-top`, `margin-right`, `margin-bottom`, `margin-left` のプロパティを使用して、要素の 4 つの辺それぞれの `margin` を制御することができます。

# --instructions--

青い四角の `margin` を上側と左側は `40px`、下側と右側は `20px` に設定してください。

# --hints--

`blue-box` クラスは、要素の上側に `40px` の `margin` を与える必要があります。

```js
assert($('.blue-box').css('margin-top') === '40px');
```

`blue-box` クラスは、要素の右側に `20px` の `margin` を与える必要があります。

```js
assert($('.blue-box').css('margin-right') === '20px');
```

`blue-box` クラスは、要素の下側に `20px` の `margin` を与える必要があります。

```js
assert($('.blue-box').css('margin-bottom') === '20px');
```

`blue-box` クラスは、要素の左側に `40px` の `margin` を与える必要があります。

```js
assert($('.blue-box').css('margin-left') === '40px');
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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
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
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
