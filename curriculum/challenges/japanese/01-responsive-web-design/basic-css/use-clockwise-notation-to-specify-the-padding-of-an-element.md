---
id: bad87fee1348bd9aedf08826
title: 時計回りの表記を使用して要素のパディングを指定する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB7mBS9'
forumTopicId: 18346
dashedName: use-clockwise-notation-to-specify-the-padding-of-an-element
---

# --description--

要素の `padding-top`, `padding-right`, `padding-bottom`, `padding-left` のプロパティを個々に指定する代わりに、次のようにしてすべてを 1 行で指定することができます:

```css
padding: 10px 20px 10px 20px;
```

これら 4 つの値は時計のように上、右、下、左の順に働き、そして辺ごとの padding 指定を使用するのとまったく同じ結果になります。

# --instructions--

時計回りの表記を使用して、`.blue-box` クラスの `padding` を上側と左側は `40px`、下側と右側は `20px` に設定してください。

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

`blue-box` クラスのパディングの設定には時計回りの表記を使用してください。

```js
assert(
  /\.blue-box\s*{[\s\S]*padding[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(
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
    padding: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
