---
id: 5a9036ee38fddaf9a66b5d35
title: grid-column-gap を使用して列の隙間を作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

これまでに作成したグリッドでは、列はすべて互いにくっついています。 場合によっては、列の間に隙間が必要になります。 列の間に隙間を作るためには、`grid-column-gap` プロパティを次のように使用します:

```css
grid-column-gap: 10px;
```

これはすべての列の間に 10px の空白を作成します。

# --instructions--

グリッドの列に `20px` の隙間を作成してください。

# --hints--

`container` クラスは `20px` の値を持つ `grid-column-gap` プロパティを持つ必要があります。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi
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
<style>.container {grid-column-gap: 20px;}</style>
```
