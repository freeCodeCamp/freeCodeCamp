---
id: 5a9036ee38fddaf9a66b5d37
title: 使用 grid-gap 爲網格添加間距
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
dashedName: add-gaps-faster-with-grid-gap
---

# --description--

`grid-gap` 屬性是前兩個挑戰中出現的 `grid-row-gap` 和 `grid-column-gap` 的簡寫屬性，它更方便使用。 如果 `grid-gap` 只有一個值，那麼這個值表示行與行之間、列與列之間的間距均爲這個值。 如果有兩個值，那麼第一個值表示行間距，第二個值表示列間距。

# --instructions--

請使用 `grid-gap` 屬性設置行間距爲 `10px`、列間距爲 `20px`。

# --hints--

`container` class 應該有一個 `grid-gap` 屬性，在行之間設置 `10px` 的間距，在列之間設置 `20px` 的間距。

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
