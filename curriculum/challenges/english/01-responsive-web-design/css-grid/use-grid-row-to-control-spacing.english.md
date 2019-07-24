---
id: 5a90373638fddaf9a66b5d39
title: Use grid-row to Control Spacing
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c9WBLU4'
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
  - text: <code>item5</code> class should have a <code>grid-row</code> property that has the value of <code>2 / 4</code>.
    testString: assert(code.match(/.item5\s*?{[\s\S]*grid-row\s*?:\s*?2\s*?\/\s*?4\s*?;[\s\S]*}/gi));

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
    /* add your code below this line */


    /* add your code above this line */
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


```js
var code = ".item5 {grid-row: 2 / 4;}"
```

</section>
