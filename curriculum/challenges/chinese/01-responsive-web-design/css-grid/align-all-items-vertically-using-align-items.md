---
id: 5a94fdf869fb03452672e45b
title: 使用 align-items 垂直对齐所有项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ckzPeUv'
forumTopicId: 301121
dashedName: align-all-items-vertically-using-align-items
---

# --description--

对网格容器使用 `align-items` 属性可以让网格中所有的网格项沿竖直方向对齐。

# --instructions--

请使用这个属性将所有网格项移动到单元格的末尾。

# --hints--

class 为 `container` 的元素应具有 `align-items` 属性且属性值应为 `end`。

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
