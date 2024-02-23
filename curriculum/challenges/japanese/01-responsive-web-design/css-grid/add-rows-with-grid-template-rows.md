---
id: 5a9036e138fddaf9a66b5d33
title: grid-template-rows で行を追加する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

前回のチャレンジで作成したグリッドは、行数を自動的に設定します。 手動で行を調整するには、前回のチャレンジで `grid-template-columns` を使用したのと同じ方法で `grid-template-rows` プロパティを使用します。

# --instructions--

グリッドにそれぞれ高さ `50px` の行を 2 行追加してください。

# --hints--

`container` クラスは 2 つの `50px` の値を持つ `grid-template-rows`プロパティを持つ必要があります。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi
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
    grid-template-columns: 100px 100px 100px;
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
<style>.container {grid-template-rows: 50px 50px;}</style>
```
