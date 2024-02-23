---
id: 587d781b367417b2b2512abc
title: テキストの background-color プロパティを調整する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDqwA6'
forumTopicId: 301032
dashedName: adjust-the-background-color-property-of-text
---

# --description--

前面のテキストを読みやすくするには、全体的な背景やテキストの色を調整する代わりに、強調したいテキストを持つ要素に `background-color` を追加することもできます。 このチャレンジでは `hex` (16進数) コードや通常の `rgb()` ではなく、`rgba()` を使います。

<blockquote>rgba は以下の略です:<br>  r = red<br>  g = green<br>  b = blue<br>  a = alpha/不透明度のレベル</blockquote>

RGB 値は 0～255 の範囲の値を取ることができます。 アルファ値は、完全に不透明である 1 から、完全に透明な 0 までの範囲の値を取ることができます。 `rgba()` を使うと不透明度を調整できるため、このチャレンジでの使い方に最適です。 背景を完全にブロックしなくても良いということです。

このチャレンジでは `background-color: rgba(45, 45, 45, 0.1)` を使用します。 不透明度が 0.1 と低いので、ほぼ透明な濃い灰色になります。

# --instructions--

テキストをより目立たせるために、`h4` 要素の `background-color` を与えられた `rgba()` の値に設定してください。

更に `h4` について、`height` プロパティを削除し、10px の `padding` を追加してください。

# --hints--

`h4` 要素に `background-color` プロパティを追加し `rgba(45, 45, 45, 0.1)` に設定してください。

```js
assert(
  /(background-color|background):rgba\(45,45,45,0?\.1\)(;?}|;)/gi.test(
    code.replace(/\s/g, '')
  )
);
```

`h4` 要素に `padding` プロパティを追加し、10 ピクセルに設定してください。

```js
assert(
  $('h4').css('padding-top') == '10px' &&
    $('h4').css('padding-right') == '10px' &&
    $('h4').css('padding-bottom') == '10px' &&
    $('h4').css('padding-left') == '10px'
);
```

`h4` 要素の `height` プロパティを削除する必要があります。

```js
assert(!($('h4').css('height') == '25px'));
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {
    text-align: center;
    height: 25px;


  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

# --solutions--

```html
<style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1);
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
