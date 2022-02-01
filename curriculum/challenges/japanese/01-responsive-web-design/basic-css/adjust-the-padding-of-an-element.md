---
id: bad88fee1348bd9aedf08825
title: 要素のパディングを調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cED8ZC2'
forumTopicId: 301083
dashedName: adjust-the-padding-of-an-element
---

# --description--

では猫の写真アプリは一旦置いておいて、HTML のスタイル調整についてもっと学びましょう。

すでに気づいているかもしれませんが、すべての HTML 要素は基本的に小さな長方形です。

3 つの重要なプロパティが、各 HTML 要素を囲むスペースを制御します。`padding`、`border`、そして `margin` です。

要素の `padding` は、要素の中身と `border` の間のスペースを制御します。

ここでは、青い四角と赤い四角が黄色い四角の中に入れ子になっています。 赤い四角は青い四角よりも `padding` が多いことに注目してください。

青い四角の `padding` を増やすと、テキストと枠線の間の距離 (`padding`) が増えます。

# --instructions--

青い四角の `padding` が赤い四角と同じになるように変更してください。

# --hints--

`blue-box` クラスは、要素に `20px` の `padding` を与える必要があります。

```js
assert($('.blue-box').css('padding-top') === '20px');
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
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
