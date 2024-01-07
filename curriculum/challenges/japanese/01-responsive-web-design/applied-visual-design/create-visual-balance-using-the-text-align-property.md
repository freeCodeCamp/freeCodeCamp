---
id: 587d7791367417b2b2512ab3
title: text-align プロパティで見た目のバランスを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c3b4EAp'
forumTopicId: 301053
dashedName: create-visual-balance-using-the-text-align-property
---

# --description--

本カリキュラムのこのセクションでは、ビジュアルデザインの応用に焦点を当てます。 最初のいくつかのチャレンジでは、例として与えられたカードのレイアウトを見ながらいくつかの原則を説明します。

テキストは多くの場合、ウェブコンテンツの大部分を占めます。 CSS には、テキストをどのように整列させるかによって `text-align` プロパティにいくつかのオプションがあります。

`text-align: justify;` は、各行が等しい幅になるようにテキストの語間を開けます。

`text-align: center;` は、テキストを中央揃えにします。

`text-align: right;` は、テキストを右揃えにします。

そして `text-align: left;` (デフォルト) は、テキストを左揃えにします。

# --instructions--

`h4` タグのテキスト "Google" を中央揃えにしてください。 次に、Google の設立についての情報が書かれた段落タグを両端揃え (justify) にしてください。

# --hints--

`h4` タグの text-align プロパティを使用し、`center` に設定してください。

```js
assert($('h4').css('text-align') == 'center');
```

`p` タグの text-align プロパティを使用し、`justify` に設定してください。

```js
assert($('p').css('text-align') == 'justify');
```

# --seed--

## --seed-contents--

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
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
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```
