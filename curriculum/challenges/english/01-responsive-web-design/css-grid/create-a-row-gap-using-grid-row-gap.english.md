---
id: 5a9036ee38fddaf9a66b5d36
title: Create a Row Gap using grid-row-gap
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/cPbJ2Cv'
forumTopicId: 301125
---

## Description
<section id='description'>
You can add a gap in between the rows of a grid using <code>grid-row-gap</code> in the same way that you added a gap in between columns in the previous challenge.
</section>

## Instructions
<section id='instructions'>
Create a gap for the rows that is <code>5px</code> tall.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-row-gap</code> property that has the value of <code>5px</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi));

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


```js
var code = ".container {grid-row-gap: 5px;}"
```

</section>
