---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/cJbpKHq'
forumTopicId: 301122
---

## Description
<section id='description'>
In CSS Grid, the content of each item is located in a box which is referred to as a <dfn>cell</dfn>. You can align the content's position within its cell horizontally using the <code>justify-self</code> property on a grid item. By default, this property has a value of <code>stretch</code>, which will make the content fill the whole width of the cell. This CSS Grid property accepts other values as well:
<code>start</code>: aligns the content at the left of the cell,
<code>center</code>: aligns the content in the center of the cell,
<code>end</code>: aligns the content at the right of the cell.
</section>

## Instructions
<section id='instructions'>
Use the <code>justify-self</code> property to center the item with the class <code>item2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.
    testString: assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background: LightSkyBlue;}

  .item2 {
    background: LightSalmon;
    /* Only change code below this line */

    
    /* Only change code above this line */
  }

  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

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
<style>.item2 {justify-self: center;}</style>
```

</section>
