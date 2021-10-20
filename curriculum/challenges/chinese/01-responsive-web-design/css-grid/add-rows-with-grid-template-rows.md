---
id: 5a9036e138fddaf9a66b5d33
title: 使用 grid-template-rows 添加多行
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
dashedName: add-rows-with-grid-template-rows
---

# --description--

在上个挑战中，你创建的网格会自动设置行数。 要手动调整行，请使用 `grid-template-rows` 属性，就像在上一个挑战中使用 `grid-template-columns` 属性一样。

# --instructions--

请给网格添加两行，使每行高度均为 `50px`。

# --hints--

类为 `container` 的元素应具有 `grid-template-rows` 属性，且该属性的两个属性值均为 `50px`。

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
