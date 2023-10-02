---
id: 5a94fe7769fb03452672e463
title: 使用媒體查詢創建響應式佈局
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cMbqeHk'
forumTopicId: 301138
dashedName: use-media-queries-to-create-responsive-layouts
---

# --description--

將 CSS 網格與使用媒體查詢結合使用，如使用媒體查詢重新排列網格區域、更改網格尺寸以及重新排列網格項位置，我們可以讓製作出的網站更具響應性。

在右側的預覽區中，當網頁可視區域的寬不小於 300px 時，列數從 1 變爲 2。 並且，廣告（advertisement）區域會完全佔據左列。

# --instructions--

當網頁可視區域的寬不小於 `400px` 時，請讓 header 區域完全佔據最頂行，footer 區域完全佔據最底行。

# --hints--

當網頁可視區域的寬度爲 `400px` 或以上時，class 爲 `container` 的元素應具有 `grid-template-areas` 屬性，其屬性值能夠使 footer 和 header 區域分別佔據頂行和底行，advert 和 content 區域分別佔據中間行的左列和右列。

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(
      /@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
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
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
      /* Only change code below this line */
        "advert header"
        "advert content"
        "advert footer";
      /* Only change code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```

# --solutions--

```html
<style>
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
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      grid-template-areas:
        "header header"
        "advert content"
        "footer footer";
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
</div>
```
