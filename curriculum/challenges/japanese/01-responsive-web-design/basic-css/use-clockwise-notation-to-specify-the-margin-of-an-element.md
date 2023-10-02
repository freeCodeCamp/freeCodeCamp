---
id: bad87fee1348bd9afdf08726
title: 時計回りの表記を使用して要素のマージンを指定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
dashedName: use-clockwise-notation-to-specify-the-margin-of-an-element
---

# --description--

今度は `margin` で同じことをやってみましょう。

要素の `margin-top`, `margin-right`, `margin-bottom`, `margin-left` のプロパティを個々に指定する代わりに、次のようにしてすべてを 1 行で指定することができます:

```css
margin: 10px 20px 10px 20px;
```

これら 4 つの値は時計のように上、右、下、左の順に働き、そして辺ごとの margin 指定を使用するのとまったく同じ結果になります。

# --instructions--

時計回りの表記を使用して、`blue-box` クラスの要素に上側と左側は `40px`、下側と右側は `20px` の margin を設定してください。

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

`blue-box` クラスのマージンの設定に時計回りの表記を使用してください。

```js
assert(
  /\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
    __helpers.removeCssComments($('style').text())
  )
);
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
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
