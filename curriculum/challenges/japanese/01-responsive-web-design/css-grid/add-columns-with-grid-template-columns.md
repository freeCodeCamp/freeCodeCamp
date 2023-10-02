---
id: 5a9036d038fddaf9a66b5d32
title: grid-template-columns で列を追加する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

グリッド要素を作成するだけでは、あまり違いはありません。 グリッド構造も定義する必要があります。 グリッドに列を追加するには、下記のようにグリッドコンテナーに `grid-template-columns` プロパティを設定します:

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

これにより、各幅 50px の 2 つの列がグリッドに表示されます。 `grid-template-columns` プロパティに与えられるパラメータの数はグリッド内の列数を示し、各パラメータの値は各列の幅を示します。

# --instructions--

グリッドコンテナーに、各幅 `100px` の列を 3 列作成してください。

# --hints--

`container` クラスは 3 つの `100px` の値を持つ `grid-template-columns` プロパティを持つ必要があります。

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
