---
id: 5a90376038fddaf9a66b5d3c
title: justify-items を使用して全てのアイテムを水平に配置する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

CSS グリッドの全てのアイテムを同じ配置にしたい場合があります。 以前に学んだプロパティを使用して個別に整列させることもできますし、グリッドコンテナーに `justify-items` を使用することで、一括で水平方向に揃えることもできます。 このプロパティは、前の 2 つのチャレンジで学んだものと同じ値を全て利用することができます。違いはグリッド内の**全ての**項目を目的の位置に移動させることです。

# --instructions--

このプロパティを使用して、すべてのアイテムを水平方向に中央揃えにしてください。

# --hints--

`container` クラスは `center` の値を持つ `justify-items` プロパティを持つ必要があります。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
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
    /* Only change code below this line */


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
<style>.container {justify-items: center;}</style>
```
