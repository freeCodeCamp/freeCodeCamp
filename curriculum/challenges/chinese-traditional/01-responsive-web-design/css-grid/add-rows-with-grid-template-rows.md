---
id: 5a9036e138fddaf9a66b5d33
title: 使用 grid-template-rows 添加多行
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

在上個挑戰中，你創建的網格會自動設置行數。 要手動調整行，請使用 `grid-template-rows` 屬性，就像在上一個挑戰中使用 `grid-template-columns` 屬性一樣。

# --instructions--

請給網格添加兩行，使每行高度均爲 `50px`。

# --hints--

類爲 `container` 的元素應具有 `grid-template-rows` 屬性，且該屬性的兩個屬性值均爲 `50px`。

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
