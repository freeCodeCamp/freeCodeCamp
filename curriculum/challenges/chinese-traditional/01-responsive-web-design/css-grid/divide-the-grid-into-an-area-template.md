---
id: 5a94fe0569fb03452672e45c
title: 將網格劃分爲區域模板
challengeType: 0
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

你可以將網格中的一些單元格組合成一個<dfn>區域（area）</dfn>，併爲該區域指定一個自定義名稱。 可以通過給容器加上 `grid-template-areas` 來實現：

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "advert footer footer";
```

上面的代碼將網格單元格分成四個區域：`header`、`advert`、`content` 和 `footer`。 每個單詞代表一個單元格，每對引號代表一行。

# --instructions--

更改模板，使 `footer` 區域跨越整個底部行。 定義區域現在不會有任何可視效果。 稍後，你將使用一個區域來查看它的工作方式。

# --hints--

class 爲 `container` 的元素應具有 `grid-template-areas` 屬性，和示例類似，但是 `footer` 區域跨越整個底部行。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
    grid-template-areas:
    /* Only change code below this line */
      "header header header"
      "advert content content"
      "advert footer footer";
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
