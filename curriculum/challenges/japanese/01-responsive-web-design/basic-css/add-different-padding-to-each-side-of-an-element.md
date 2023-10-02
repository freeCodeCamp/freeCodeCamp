---
id: bad87fee1348bd9aedf08824
title: 要素の四辺に異なるパディングを追加する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
dashedName: add-different-padding-to-each-side-of-an-element
---

# --description--

それぞれの側で異なる `padding` の値を持つように要素をカスタマイズしたい場合もあるでしょう。

CSS では `padding-top`, `padding-right`, `padding-bottom`, `padding-left` のプロパティを使用して、要素の 4 つの辺それぞれの `padding` を制御することができます。

# --instructions--

青い四角の `padding` を上側と左側は `40px`、下側と右側は `20px` に設定してください。

# --hints--

`blue-box` クラスは、要素の上側に `40px` の `padding` を与える必要があります。

```js
assert($('.blue-box').css('padding-top') === '40px');
```

`blue-box` クラスは、要素の右側に `20px` の `padding` を与える必要があります。

```js
assert($('.blue-box').css('padding-right') === '20px');
```

`blue-box` クラスは、要素の下側に `20px` の `padding` を与える必要があります。

```js
assert($('.blue-box').css('padding-bottom') === '20px');
```

`blue-box` クラスは、要素の左側に `40px` の `padding` を与える必要があります。

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
