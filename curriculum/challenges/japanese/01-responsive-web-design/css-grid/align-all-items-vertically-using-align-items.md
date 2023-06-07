---
id: 5a94fdf869fb03452672e45b
title: align-items を使用して全てのアイテムを垂直に配置する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ckzPeUv'
forumTopicId: 301121
dashedName: align-all-items-vertically-using-align-items
---

# --description--

グリッドコンテナーに `align-items` プロパティを使用すると、グリッド内のすべてのアイテムが垂直方向に整列します。

# --instructions--

これを使用して、全てのアイテムを各セルの下端に移動させてください。

# --hints--

`container` クラスは `end` の値を持つ `align-items` プロパティを持つ必要があります。

```js
assert(
  code.match(/.container\s*?{[\s\S]*align-items\s*?:\s*?end\s*?;[\s\S]*}/gi)
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
<style>.container {align-items: end;}</style>
```
