---
id: 5a9036e138fddaf9a66b5d33
title: Add Rows with grid-template-rows
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cbp9Pua'
forumTopicId: 301119
---

## Description
<section id='description'>
The grid you created in the last challenge will set the number of rows automatically. To adjust the rows manually, use the <code>grid-template-rows</code> property in the same way you used <code>grid-template-columns</code> in previous challenge.
</section>

## Instructions
<section id='instructions'>
Add two rows to the grid that are <code>50px</code> tall each.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-rows</code> property with two units of <code>50px</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-template-rows\s*?:\s*?50px\s*?50px\s*?;[\s\S]*}/gi));

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
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 100px 100px 100px;
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
<style>.container {grid-template-rows: 50px 50px;}</style>
```

</section>
