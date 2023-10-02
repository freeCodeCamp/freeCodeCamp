---
id: 5a90373638fddaf9a66b5d39
title: 使用 grid-row 來控制空間大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c9WBLU4'
forumTopicId: 301137
dashedName: use-grid-row-to-control-spacing
---

# --description--

和設置一個網格項佔用多列類似，你也可以設置它佔用多行。 你可以使用 `grid-row` 屬性來定義一個網格項開始和結束的水平線。

# --instructions--

請讓 class 爲 `item5` 的元素佔用最後兩行。

# --hints--

class 爲 `item5` 的元素應具有 `grid-row` 屬性。

```js
assert(
  __helpers.removeWhiteSpace($('style').text()).match(/\.item5{.*grid-row:.*}/g)
);
```

class 爲 `item5` 的元素應具有 `grid-row` 屬性，其屬性值應將元素設置爲佔用網格的最後兩行。

```js
const rowStart = getComputedStyle($('.item5')[0]).gridRowStart;
const rowEnd = getComputedStyle($('.item5')[0]).gridRowEnd;
const result = rowStart.toString() + rowEnd.toString();
const correctResults = [
  '24',
  '2-1',
  '2span 2',
  '2span2',
  'span 2-1',
  '-12',
  'span 2span 2',
  'span 2auto',
  'autospan 2'
];
assert(correctResults.includes(result));
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
    grid-column: 2 / 4;
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

  .item5 {
    background: PaleGreen;
    grid-column: 2 / 4;
    grid-row: 2 / 4;
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
