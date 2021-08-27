---
id: 5a94fe5469fb03452672e461
title: 使用 auto-fill 創建彈性佈局
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cmzdycW'
forumTopicId: 301126
dashedName: create-flexible-layouts-using-auto-fill
---

# --description--

repeat 方法帶有一個名爲<dfn>自動填充（auto-fill）</dfn>的功能。 它的功能是根據容器的大小，儘可能多地放入指定大小的行或列。 你可以通過結合 `auto-fill` 和 `minmax` 來更靈活地佈局。

```css
repeat(auto-fill, minmax(60px, 1fr));
```

上面的代碼效果是這樣：首先，列的寬度會隨容器大小改變。其次，只要容器寬度不足以插入一個寬爲 60px 的列，當前行的所有列就都會一直拉伸。請自己調整寬度，動手試一下就不難理解了。 **注意：** 如果容器寬度不足以將所有網格項放在同一行，餘下的網格項將會移至新的一行。

# --instructions--

在第一個網格中，請使用 `auto-fill` 和 `repeat` 來填充網格。 其中列寬的最小值爲 `60px`，最大值爲 `1fr`。 你可以調整最右側的預覽區大小，查看自動填充的效果。

# --hints--

class 爲 `container` 的元素應具有 `grid-template-columns` 屬性，且屬性值應使用 `repeat` 和 `auto-fill`，以便將最小寬度爲 `60px`、最大寬度爲 `1fr` 的列填充至網格。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?repeat\s*?\(\s*?auto-fill\s*?,\s*?minmax\s*?\(\s*?60px\s*?,\s*?1fr\s*?\)\s*?\)\s*?;[\s\S]*}/gi
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
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(3, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```

# --solutions--

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: LightGray;
    display: grid;
    /* Only change code below this line */

    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));

    /* Only change code above this line */
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }

  .container2 {
    font-size: 40px;
    min-height: 100px;
    width: 100%;
    background: Silver;
    display: grid;
    grid-template-columns: repeat(3, minmax(60px, 1fr));
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
<div class="container2">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>
```
