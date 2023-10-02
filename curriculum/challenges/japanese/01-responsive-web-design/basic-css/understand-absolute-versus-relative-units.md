---
id: bad82fee1322bd9aedf08721
title: 絶対単位と相対単位を理解する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cN66JSL'
forumTopicId: 301089
dashedName: understand-absolute-versus-relative-units
---

# --description--

ここまでのいくつかのチャレンジでは、要素のマージンやパディングを設定するのにピクセル (`px`) を使いました。 ピクセルは長さの単位の一種で、ブラウザにアイテムのサイズやスペースを指示します。 `px` の他にも CSS で使用できる長さの単位は数多くあります。

長さの単位の主な 2 つの分類は絶対単位と相対単位です。 絶対単位は物理的な長さの単位に対応します。 例えば、`in` や `mm` はそれぞれインチとミリメートルを表します。 絶対単位はおおよそ画面上の実際の長さですが、画面の解像度によっていくらかの違いがあります。

`em` や `rem` などの相対単位は、他の長さの値に比例します。 例えば、`em` は要素のフォントのサイズに基づきます。 em を `font-size` プロパティ自体を設定するために使用する場合は、親要素の `font-size` に対して相対的になります。

**注:** ビューポートのサイズと対応する相対単位もいくつかあります。 これらはレスポンシブウェブデザイン原則のセクションで説明します。

# --instructions--

`red-box` クラスを持つ要素に `padding` プロパティを追加し、`1.5em` に設定してください。

# --hints--

`red-box` クラスが `padding` プロパティを持つようにしてください。

```js
assert(
  $('.red-box').css('padding-top') != '0px' &&
    $('.red-box').css('padding-right') != '0px' &&
    $('.red-box').css('padding-bottom') != '0px' &&
    $('.red-box').css('padding-left') != '0px'
);
```

`red-box` クラスは、要素に 1.5em の `padding` を与える必要があります。

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
