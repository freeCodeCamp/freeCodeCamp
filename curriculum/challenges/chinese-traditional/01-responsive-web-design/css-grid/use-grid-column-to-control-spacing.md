---
id: 5a90372638fddaf9a66b5d38
title: 使用 grid-column 來控制空間大小
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cnzkDSr'
forumTopicId: 301136
dashedName: use-grid-column-to-control-spacing
---

# --description--

到目前爲止，所有的討論都是圍繞網格容器的。 `grid-column` 屬性是我們要討論的，第一個用於網格項本身的屬性。

網格中，假想的水平線和垂直線被稱爲<dfn>線（lines）</dfn>。 這些線在網格的左上角從 1 開始編號，垂直線向右、水平線向下累加計數。

這是一個 3x3 網格的線條：

<div style='position:relative;margin:auto;background:Gainsboro;display:block;margin-top:100px;margin-bottom:50px;width:200px;height:200px;'><p style='left:25%;top:-30%;font-size:130%;position:absolute;color:RoyalBlue;'>列線</p><p style='left:0%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>1</p><p style='left:30%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>2</p><p style='left:63%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>3</p><p style='left:95%;top:-15%;font-size:130%;position:absolute;color:RoyalBlue;'>4</p><p style='left:-40%;top:45%;font-size:130%;transform:rotateZ(-90deg);position:absolute;'>行線</p><p style='left:-10%;top:-10%;font-size:130%;position:absolute;'>1</p><p style='left:-10%;top:21%;font-size:130%;position:absolute;'>2</p><p style='left:-10%;top:53%;font-size:130%;position:absolute;'>3</p><p style='left:-10%;top:85%;font-size:130%;position:absolute;'>4</p><div style='left:0%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:31%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:63%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:95%;top:0%;width:5%;height:100%;background:RoyalBlue;position:absolute;'></div><div style='left:0%;top:0%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:31%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:63%;width:100%;height:5%;background:black;position:absolute;'></div><div style='left:0%;top:95%;width:100%;height:5%;background:black;position:absolute;'></div></div>

要設置一個網格項佔據幾列，你可以使用 `grid-column` 屬性加上網格線條的編號來定義網格項開始和結束的位置。

示例如下：

```css
grid-column: 1 / 3;
```

這會讓網格項從左側第一條線開始到第三條線結束，佔用兩列。

# --instructions--

請讓 class 爲 `item5` 的網格項佔用網格的最後兩列。

# --hints--

class 爲 `item5` 的元素應具有 `grid-column` 屬性。

```js
assert(
  __helpers
    .removeWhiteSpace($('style').text())
    .match(/\.item5{.*grid-column:.*}/g)
);
```

class 爲 `item5` 的元素應具有 `grid-column` 屬性，其屬性值應將元素設置爲佔用網格的最後兩列。

```js
const colStart = getComputedStyle($('.item5')[0]).gridColumnStart;
const colEnd = getComputedStyle($('.item5')[0]).gridColumnEnd;
const result = colStart.toString() + colEnd.toString();
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
