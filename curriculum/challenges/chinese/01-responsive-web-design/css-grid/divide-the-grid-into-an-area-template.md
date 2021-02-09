---
id: 5a94fe0569fb03452672e45c
title: 将网格划分为区域模板
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cLLpGAy'
forumTopicId: 301130
dashedName: divide-the-grid-into-an-area-template
---

# --description--

你可以将网格中的一些单元格组合成一个<dfn>区域（area）</dfn>，并为该区域指定一个自定义名称。 可以通过给容器加上 `grid-template-areas` 来实现：

```css
grid-template-areas:
  "header header header"
  "advert content content"
  "footer footer footer";
```

上面的代码将顶部三个单元格合并成一个名为 `header` 的区域，将底部三个单元格合并为一个名为 `footer` 的区域，并在中间行创建了两个区域：`advert` 和 `content`。 **注意：**在代码中，每个单词代表一个网格单元格，每对引号代表一行。 除了自定义标签，你还能使用句点（`.`）来表示一个空单元格。

# --instructions--

请放置区域模板，让名为 `advert` 的区域变成空单元格。

# --hints--

class 为 `container` 的元素应具有 `grid-template-areas` 属性，在其属性值中，应使用 `.` 代替 `advert`。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?header\s*?"\s*?"\s*?.\s*?content\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
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
      "footer footer footer";
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
      ". content content"
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
