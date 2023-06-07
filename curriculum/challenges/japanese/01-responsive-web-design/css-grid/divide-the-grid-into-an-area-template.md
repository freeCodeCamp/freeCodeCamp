---
id: 5a94fe0569fb03452672e45c
title: グリッドをエリアテンプレートに分割する
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

グリッドのセルを<dfn>エリア (area)</dfn> にまとめてグループ化し、そのエリアにカスタム名を付けることができます。 次のようにコンテナーで `grid-template-areas` を使用してください:

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

上記のコードは、グリッドのセルを `header`, `advert`, `content`, `footer` の 4 つのエリアにグループ化します。 すべての単語はセルを表し、引用符のすべてのペアは行を表します。

# --instructions--

テンプレートを変更して、 `footer` エリアが一番下の行全体に広がるようにしてください。 現時点ではエリアを定義しても視覚的な効果はありません。 後から、このエリアがどのように働くのかを、アイテムにエリアを使用させることで確認します。

# --hints--

`container` クラスは、例のような `grid-template-areas` プロパティを持つ必要がありますが、`footer` エリアは下の行全体に広がるようにしてください。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "advert footer footer";
    /* Only change code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;

    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
