---
id: 5a90373638fddaf9a66b5d39
title: Use grid-row to Control Spacing
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/c9WBLU4'
forumTopicId: 301137
---

## Description
<section id='description'>
Of course, you can make items consume multiple rows just like you can with columns. You define the horizontal lines you want an item to start and stop at using the <code>grid-row</code> property on a grid item.
</section>

## Instructions
<section id='instructions'>
Make the element with the <code>item5</code> class consume the last two rows.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code> class should have a <code>grid-row</code> property.
    testString: assert($('style').text().replace(/\s/g, '').match(/\.item5{.*grid-row:.*}/g));
  - text: <code>item5</code> class should have a <code>grid-row</code> property which results in it consuming the last two rows of the grid.
    testString: "
      const rowStart = getComputedStyle($('.item5')[0]).gridRowStart;
      const rowEnd = getComputedStyle($('.item5')[0]).gridRowEnd;
      const result = rowStart.toString() + rowEnd.toString();
      const correctResults = ['24', '2-1', '2span 2', '2span2', 'span 2-1', '-12', 'span 2span 2', 'span 2auto', 'autospan 2'];
      assert(correctResults.includes(result));
    "

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>


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

</section>
