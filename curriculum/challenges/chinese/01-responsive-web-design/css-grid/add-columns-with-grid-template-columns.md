---
id: 5a9036d038fddaf9a66b5d32
title: 使用 grid-template-columns 添加多列
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
forumTopicId: 301117
dashedName: add-columns-with-grid-template-columns
---

# --description--

简单地添加一个网格元素并不会有任何明显的效果。 你还需要明确网格的结构。 在一个网格容器中使用 `grid-template-columns` 属性可以添加一些列，示例如下：

```css
.container {
  display: grid;
  grid-template-columns: 50px 50px;
}
```

上面的代码会在网格容器中添加两列，宽度均为 50px。 `grid-template-columns` 属性值的个数表示网格的列数，每个值表示相应的列宽度。

# --instructions--

请给网格容器设置三个列，每列宽度均为 `100px`。

# --hints--

class 为 `container` 的元素应具有 `grid-template-columns` 属性，该属性应有三个属性值，均为 `100px`。

```js
assert(new __helpers.CSSHelp(document).getStyle('.container')?.gridTemplateColumns === '100px 100px 100px');
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
<style>.container {grid-template-columns: 100px 100px 100px;}</style>
```
