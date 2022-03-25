---
id: 5a94fe1369fb03452672e45d
title: 使用 grid-area 属性将项目放置在网格区域中
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

像上一个挑战那样，在为网格添加区域模板后，可以通过引用你所定义的区域的名称，将元素放入相应的区域。 为此，你需要对网格项使用 `grid-area`：

```css
.item1 {
  grid-area: header;
}
```

这样，class 为 `item1` 的网格项就被放到了 `header` 区域里。 在这种情况下，该项目将使用整个顶行，因为该整行被命名为 `header` 区域。

# --instructions--

请使用 `grid-area` 属性，把 class 为 `item5` 的元素放到 `footer` 区域。

# --hints--

class 为 `item5` 的元素应具有 `grid-area` 属性且属性值应为 `footer`。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi)
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
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
<style>.item5 {grid-area: footer;}</style>
```
