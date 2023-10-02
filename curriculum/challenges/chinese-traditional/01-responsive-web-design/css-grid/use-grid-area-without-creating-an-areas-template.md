---
id: 5a94fe2669fb03452672e45e
title: 使用 grid-area 創建區域模板
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

我們在上一次挑戰中學到的 `grid-area` 屬性還有另一種使用方式。 如果網格中沒有定義區域模板，你也可以像這樣爲它添加一個模板：

```css
item1 { grid-area: 1/1/2/4; }
```

這裏使用了你之前學習的網格線編號來定義網格項的區域。 上例中數字代表這些值：

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

因此，示例中的網格項將佔用第 1 條水平網格線（起始）和第 2 條水平網格線（終止）之間的行，及第 1 條垂直網格線（起始）和第 4 條垂直網格線（終止）之間的列。

# --instructions--

請用 `grid-area` 屬性將 class 爲 `item5` 的元素放置在第 3 條和第 4 條水平網格線，以及第 1 條和第 4 條垂直網格線之間的區域內。

# --hints--

class 爲 `item5` 的元素應具有 `grid-area` 屬性，且位於水平第三和第四條線、垂直第一和第四條線之間的區域。

```js
assert(
  code.match(
    /.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi
  )
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

  .item5 {
    background: PaleGreen;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
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
<style>.item5 {grid-area: 3/1/4/4;}</style>
```
