---
id: 5a90374338fddaf9a66b5d3a
title: 使用 justify-self 水平对齐项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

在 CSS 网格中，每个网格项的内容分别位于被称为<dfn>单元格（cell）</dfn>的框内。 你可以使用网格项的 `justify-self` 属性，设置其内容的位置在单元格内沿水平轴的对齐方式。 默认情况下，这个属性的值是 `stretch`，这将使内容占满整个单元格的宽度。 该 CSS 网格属性也可以使用其他的值：

`start`：使内容在单元格左侧对齐，

`center`：使内容在单元格居中对齐，

`end`：使内容在单元格右侧对齐，

# --instructions--

请使用 `justify-self` 属性让 class 为 `item2` 的网格项居中。

# --hints--

class 为 `item2` 的元素应具有 `justify-self` 属性且属性值应为 `center`。

```js
assert(
  code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi)
);
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item2 {justify-self: center;}</style>
```
