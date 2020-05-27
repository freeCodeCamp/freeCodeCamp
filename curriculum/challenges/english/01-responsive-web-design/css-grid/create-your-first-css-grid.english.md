---
id: 5a858944d96184f06fd60d61
title: Create Your First CSS Grid
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/cqwREC4'
forumTopicId: 301129
---

## Description
<section id='description'>
Turn any HTML element into a grid container by setting its <code>display</code> property to <code>grid</code>. This gives you the ability to use all the other properties associated with CSS Grid.
<strong>Note:</strong> In CSS Grid, the parent element is referred to as the <dfn>container</dfn> and its children are called <dfn>items</dfn>.
</section>

## Instructions
<section id='instructions'>
Change the display of the div with the <code>container</code> class to <code>grid</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>display</code> property with a value of <code>grid</code>.
    testString: assert(code.match(/.container\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));

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
var code = ".container {display: grid;}"
```

</section>
