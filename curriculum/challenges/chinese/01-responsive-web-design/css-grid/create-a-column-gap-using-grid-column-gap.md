---
id: 5a9036ee38fddaf9a66b5d35
title: 使用 grid-column-gap 创建多列之间的间距
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cVZ8vfD'
forumTopicId: 301124
dashedName: create-a-column-gap-using-grid-column-gap
---

# --description--

目前为止，在你所创建的网格中，每列都相互紧挨着。 有时候你想要列之间有一个间距。 如果需要在列与列之间添加一些间距，我们可以使用 `grid-column-gap`：

```css
grid-column-gap: 10px;
```

这会为我们创建的所有列之间都添加 10px 的空白间距。

# --instructions--

请为网格中的所有列添加宽度为 `20px` 的间距。

# --hints--

class 为 `container` 的元素应具有 `grid-column-gap` 属性且属性值应为 `20px`。

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
