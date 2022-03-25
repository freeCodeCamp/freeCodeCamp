---
id: 5a9036ee38fddaf9a66b5d34
title: 使用 CSS 網格單位來更改列和行的大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cvE8phd'
forumTopicId: 301134
dashedName: use-css-grid-units-to-change-the-size-of-columns-and-rows
---

# --description--

在 CSS 網格中，可以使用絕對單位（如 `px`）或相對單位（如 `em`）來定義行或列的大小。 下面的單位也可以使用：

`fr`：設置列或行佔剩餘空間的比例，

`auto`：設置列寬或行高自動等於它的內容的寬度或高度，

`%`：將列或行調整爲它的容器寬度或高度的百分比，

以下代碼爲右側預覽區中的效果：

```css
grid-template-columns: auto 50px 10% 2fr 1fr;
```

這段代碼添加了五個列。 第一列的寬與它的內容寬度相等；第二列寬 50px；第三列寬是它容器的 10%；最後兩列，將剩餘的寬度平均分成三份，第四列佔兩份，第五列佔一份。

# --instructions--

生成一個包含三列的網格，每列寬度分別爲：1fr、100px、2fr。

# --hints--

`container` 類應該有一個 `grid-template-columns` 屬性，該屬性具有以下寬度的三列：`1fr`、`100px` 和 `2fr`。

```js
assert(
  code.match(
    /.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?1fr\s*?100px\s*?2fr\s*?;[\s\S]*}/gi
  )
);
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

    grid-template-columns: auto 50px 10% 2fr 1fr;

    /* Only change code above this line */
    grid-template-rows: 50px 50px;
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
<style>.container {grid-template-columns: 1fr 100px 2fr;}</style>
```
