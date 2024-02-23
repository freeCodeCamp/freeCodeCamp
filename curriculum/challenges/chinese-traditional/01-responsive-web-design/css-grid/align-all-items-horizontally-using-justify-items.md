---
id: 5a90376038fddaf9a66b5d3c
title: 使用 justify-items 水平對齊所有項目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpECn'
forumTopicId: 301120
dashedName: align-all-items-horizontally-using-justify-items
---

# --description--

有時你想讓 CSS 網格中的網格項共享對齊方式。 你可以像之前學習的那樣分別設置它們的對齊方式，也可以對網格容器使用 `justify-items` 使它們一次性沿水平軸對齊。 這個屬性能接受我們在之前兩個挑戰中學到的所有值作爲屬性值，但與之前不同的是，它會將網格中 **所有** 的網格項按所設置的方式對齊。

# --instructions--

請使用這個屬性設置所有網格項水平居中。

# --hints--

class 爲 `container` 的元素應具有 `justify-items` 屬性且屬性值應爲 `center`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi
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
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* Only change code below this line */


    /* Only change code above this line */
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
<style>.container {justify-items: center;}</style>
```
