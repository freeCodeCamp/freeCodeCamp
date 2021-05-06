---
id: 5a90374338fddaf9a66b5d3a
title: 使用 justify-self 水平對齊項目
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
dashedName: align-an-item-horizontally-using-justify-self
---

# --description--

在 CSS 網格中，每個網格項的內容分別位於被稱爲<dfn>單元格（cell）</dfn>的框內。 你可以使用網格項的 `justify-self` 屬性，設置其內容的位置在單元格內沿水平軸的對齊方式。 默認情況下，這個屬性的值是 `stretch`，這將使內容佔滿整個單元格的寬度。 該 CSS 網格屬性也可以使用其他的值：

`start`：使內容在單元格左側對齊，

`center`：使內容在單元格居中對齊，

`end`：使內容在單元格右側對齊，

# --instructions--

請使用 `justify-self` 屬性讓 class 爲 `item2` 的網格項居中。

# --hints--

class 爲 `item2` 的元素應具有 `justify-self` 屬性且屬性值應爲 `center`。

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
