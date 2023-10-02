---
id: 5a858944d96184f06fd60d61
title: 创建你的第一个 CSS 网格
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
dashedName: create-your-first-css-grid
---

# --description--

通过将属性 `display` 的值设为 `grid`，HTML 元素就可以变为网格容器。 通过前面的操作，你可以对该容器使用与 CSS 网格（CSS Grid）相关的属性。

**注意：** 在 CSS 网格中，父元素称为<dfn>容器（container）</dfn>，它的子元素称为<dfn>项（items）</dfn>。

# --instructions--

请将 class 为 `container` 的 div 的 display 属性值设置为 `grid`。

# --hints--

`container` class 应具有 `display` 属性，属性值应为 `grid`。

```js
assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
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
<style>.container {display: grid;}</style>
```
