---
id: 5a9036ee38fddaf9a66b5d34
title: CSS グリッド単位を使用して列と行のサイズを変更する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

CSS グリッドでは `px` や `em` のような絶対単位および相対単位を使用して、行と列のサイズを定義できます。 以下の単位も使用できます:

`fr`: 列または行を利用可能な空間に対する割合で設定します。

`auto`: 列または行をコンテンツの幅や高さに自動的に設定します。

`%`: 列または行をコンテナーのパーセント幅に調整します。

プレビューに表示されている出力を生成するコードは次のとおりです:

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

このスニペットは 5 列を作成します。 1 列目はコンテンツと同じ幅、2 列目は 50px、3 列目はコンテナーの 10％ になります。最後の 2 列については、残りのスペースを 3 分割して、2 つを 4 列目に、1 つを 5 列目に割り当てています。

# --instructions--

幅が 1fr、100px、2fr の 3 列のグリッドを作成してください。

# --hints--

`container` クラスは幅が `1fr`、`100px`、`2fr` の 3 列を生成する `grid-template-columns` プロパティを持つ必要があります。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
  }
</style>

<div class="container">
  <div class="d1">1</div>
  <div class="d2">2</div>
  <div class="d3">3</div>
  <div class="d4">4</div>
  <div class="d5">5</div>
</div>
```

# --solutions--

```html
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
