---
id: 5a94fe2669fb03452672e45e
title: 使用 grid-area 创建区域模板
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
forumTopicId: 301135
dashedName: use-grid-area-without-creating-an-areas-template
---

# --description--

我们在上一次挑战中学到的 `grid-area` 属性还有另一种使用方式。 如果网格中没有定义区域模板，你也可以像这样为它添加一个模板：

```css
item1 { grid-area: 1/1/2/4; }
```

这里使用了你之前学习的网格线编号来定义网格项的区域。 上例中数字代表这些值：

```css
grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;
```

因此，示例中的网格项将占用第 1 条水平网格线（起始）和第 2 条水平网格线（终止）之间的行，及第 1 条垂直网格线（起始）和第 4 条垂直网格线（终止）之间的列。

# --instructions--

请用 `grid-area` 属性将 class 为 `item5` 的元素放置在第 3 条和第 4 条水平网格线，以及第 1 条和第 4 条垂直网格线之间的区域内。

# --hints--

class 为 `item5` 的元素应具有 `grid-area` 属性，且位于水平第三和第四条线、垂直第一和第四条线之间的区域。

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
