---
id: 5a90375238fddaf9a66b5d3b
title: 使用 align-self 垂直对齐项目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzd4fz'
forumTopicId: 301123
dashedName: align-an-item-vertically-using-align-self
---

# --description--

正如能设置网格项沿水平方向的对齐方式一样，我们也可以设置网格项沿竖直方向的对齐方式。 为此，我们可以对网格项使用 `align-self` 属性来实现。 在上一个挑战中适用于 `justify-self` 属性的属性值同样也可用于这个属性。

# --instructions--

请使用值 `end` 来让 class 为 `item3` 的网格项沿底端对齐。

# --hints--

class 为 `item3` 的元素应具有 `align-self` 属性且属性值应为 `end`。

```js
assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* Only change code below this line */


    /* Only change code above this line */
  }

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
<style>.item3 {align-self: end;}</style>
```
