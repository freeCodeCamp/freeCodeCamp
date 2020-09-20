---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/ca2qVtv'
forumTopicId: 301118
---

## Description
<section id='description'>
<code>grid-gap</code> is a shorthand property for <code>grid-row-gap</code> and <code>grid-column-gap</code> from the previous two challenges that's more convenient to use. If <code>grid-gap</code> has one value, it will create a gap between all rows and columns. However, if there are two values, it will use the first one to set the gap between the rows and the second value for the columns.
</section>

## Instructions
<section id='instructions'>
Use <code>grid-gap</code> to introduce a <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-gap</code> property that introduces <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .d1{background:LightSkyBlue;}
  .d2{background:LightSalmon;}
  .d3{background:PaleTurquoise;}
  .d4{background:LightPink;}
  .d5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* Only change code below this line */

    
    /* Only change code above this line */
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

</div>



</section>

## Solution
<section id='solution'>


```html
<style>.container {grid-gap: 10px 20px;}</style>
```

</section>
