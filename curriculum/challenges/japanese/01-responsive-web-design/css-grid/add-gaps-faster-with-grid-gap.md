---
id: 5a9036ee38fddaf9a66b5d37
title: grid-gap で隙間をすばやく追加する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` は `grid-row-gap` と `grid-column-gap` の一括指定プロパティで、これまでの 2 つのチャレンジで使ったものがより便利になります。 `grid-gap` が値を 1 つ持つ場合、すべての行と列の間に隙間が作成されます。 ただし、値が 2 つある場合は、1 つ目の値で行の隙間を設定し、2 番目の値で列の隙間を設定します。

# --instructions--

`grid-gap` を使用して、行間に `10px` の隙間を、列間に `20px` の隙間を作成してください。

# --hints--

`container` クラスは、`grid-gap` プロパティを持ち、行間に `10px` の隙間、列間に `20px` の隙間を作成する必要があります。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */


    /* Only change code above this line */
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
<style>.container {grid-gap: 10px 20px;}</style>
```
