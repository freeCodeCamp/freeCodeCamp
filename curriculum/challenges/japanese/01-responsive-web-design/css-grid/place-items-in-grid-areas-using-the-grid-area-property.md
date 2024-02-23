---
id: 5a94fe1369fb03452672e45d
title: grid-area プロパティを使用してグリッドエリアに項目を配置する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

前回のチャレンジで示したように、グリッドコンテナー用のエリアテンプレートを作成した後、名前を参照してカスタムエリアにアイテムを配置することができます。 これを行うためには、アイテムの `grid-area` プロパティを使用します。

```css
.item1 {
  grid-area: header;
}
```

これにより、`item1` クラスを `header` という名前のエリアに移動させることができます。 この場合、行全体が `header` エリアと名付けられているため、アイテムは一番上の行全体を使用します。

# --instructions--

`grid-area` プロパティを使用して、`footer` 領域に `item5` クラスの要素を配置してください。

# --hints--

`item5` クラスは `footer` の値を持つ `grid-area` プロパティを持つ必要があります。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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

# --solutions--

```html
<style>.item5 {grid-area: footer;}</style>
```
