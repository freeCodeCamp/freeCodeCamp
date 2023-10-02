---
id: 5a858944d96184f06fd60d61
title: 最初の CSS グリッドを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

`display` プロパティを `grid` に設定することで、任意の HTML 要素をグリッドコンテナーに変換します。 これにより、CSS グリッドに関連する他のすべてのプロパティを使用することができます。

**注:** CSS グリッドでは、親要素を <dfn>container</dfn>、子要素を <dfn>items</dfn> と呼びます。

# --instructions--

`container` クラスの div の display プロパティを `grid` に変更してください。

# --hints--

`container` クラスは `grid` の値を持つ `display` プロパティを持つ必要があります。

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
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
<style>.container {display: grid;}</style>
```
