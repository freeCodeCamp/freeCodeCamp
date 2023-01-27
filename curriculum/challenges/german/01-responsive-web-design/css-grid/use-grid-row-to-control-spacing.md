---
id: 5a90373638fddaf9a66b5d39
title: Verwende grid-row um Abstände zu kontrollieren
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c9WBLU4'
forumTopicId: 301137
dashedName: use-grid-row-to-control-spacing
---

# --description--

Natürlich kannst du auch mehrere Zeilen verwenden, genauso wie du es mit Spalten machen kannst. Du legst die horizontalen Linien fest, an denen ein Element beginnen und enden soll, indem du die Eigenschaft `grid-row` für ein Rasterelement verwendest.

# --instructions--

Lass das Element mit der Klasse `item5` die letzten beiden Zeilen verwenden.

# --hints--

Die Klasse `item5` sollte eine Eigenschaft `grid-row` besitzen.

```js
assert(
  __helpers.removeWhiteSpace($('style').text()).match(/\.item5{.*grid-row:.*}/g)
);
```

Die Klasse `item5` sollte eine Eigenschaft `grid-row` besitzen, die dazu führt, dass sie die letzten beiden Zeilen des Grids verwendet.

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
