---
id: 5a94fe1369fb03452672e45d
title: 使用 grid-area 屬性將項目放置在網格區域中
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cRrqmtV'
forumTopicId: 301132
dashedName: place-items-in-grid-areas-using-the-grid-area-property
---

# --description--

像上一個挑戰那樣，在爲網格添加區域模板後，可以通過引用你所定義的區域的名稱，將元素放入相應的區域。 爲此，你需要對網格項使用 `grid-area`：

```css
.item1 {
  grid-area: header;
}
```

這樣，class 爲 `item1` 的網格項就被放到了 `header` 區域裏。 在這種情況下，該項目將使用整個頂行，因爲該整行被命名爲 `header` 區域。

# --instructions--

請使用 `grid-area` 屬性，把 class 爲 `item5` 的元素放到 `footer` 區域。

# --hints--

class 爲 `item5` 的元素應具有 `grid-area` 屬性且屬性值應爲 `footer`。

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
