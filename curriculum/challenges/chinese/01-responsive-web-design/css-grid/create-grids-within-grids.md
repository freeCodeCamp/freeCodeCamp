---
id: 5a94fe8569fb03452672e464
title: 在网格中创建网格
challengeType: 0
forumTopicId: 301128
dashedName: create-grids-within-grids
---

# --description--

将元素转换为网格只会影响其子元素（即直接后代元素，英文为 direct descendants。意思是一个元素的所有后代元素中，父级元素为该元素的所有元素）。 因此，如果我们把某个子元素设置为网格，就会得到一个嵌套的网格。

例如，如果我们设置 class 为 `item3` 的元素的 `display` 和 `grid-template-columns` 属性，就会得到一个嵌套的网格。

# --instructions--

请设置 `display` 和 `grid-template-columns`，使类为 `item3` 元素转换为有两列且宽度为 `auto` 和 `1fr` 的网格。

# --hints--

class 为 `item3` 的元素应具有 `grid-template-columns` 属性且属性值应为 `auto` 和 `1fr`。

```js
assert(
  code.match(
    /.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi
  )
);
```

class 为 `item3` 的元素应具有 `display` 属性且属性值应为 `grid`。

```js
assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* Only change code below this line */


    /* Only change code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>.item3 {grid-template-columns: auto 1fr; display: grid;}</style>
```
