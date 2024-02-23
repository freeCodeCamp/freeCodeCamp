---
id: 5a94fe2669fb03452672e45e
title: エリアテンプレートを作成せずに grid-area を使用する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

前回のチャレンジで学んだ `grid-area` プロパティは、別の方法でも使用できます。 参照できるエリアテンプレートがグリッドにない場合は、 アイテムを配置するためのエリアをその場で作成できます。

```css
item1 { grid-area: 1/1/2/4; }
```

これは、どのエリアにこのアイテムがあるかを定義するために、以前に学んだグリッド線の番号を使用しています。 上の例における数値は以下の値を表しています。

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

そのため、例におけるアイテムは 1 番目から 2 番目の線の間にある行と、1 番目から 4 番目の線の間にある列を消費します。

# --instructions--

`grid-area` プロパティを使って、`item5` クラスの要素を 3 番目から 4 番目の水平線と、1 番目から 4 番目の垂直線の間に配置してください。

# --hints--

`item5` クラスは `grid-area` を持ち、これは 3 番目から 4 番目の水平線と 1 番目から 4 番目の垂直線の間のエリア全体を埋める必要があります。

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
