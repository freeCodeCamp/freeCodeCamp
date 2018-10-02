---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c6N7VhK'
---

## Description
<section id='description'>
The <code>grid-area</code> property you learned in the last challenge can be used in another way. If your grid doesn't have an areas template to reference, you can create an area on the fly for an item to be placed like this:
<blockquote>item1 { grid-area: 1/1/2/4; }</blockquote>
This is using the line numbers you learned about earlier to define where the area for this item will be. The numbers in the example above represent these values:
<blockquote>grid-area: horizontal line to start at / vertical line to start at / horizontal line to end at / vertical line to end at;</blockquote>
So the item in the example will consume the rows between lines 1 and 2, and the columns between lines 1 and 4.
</section>

## Instructions
<section id='instructions'>
Using the <code>grid-area</code> property, place the element with <code>item5</code> class between the third and fourth horizontal lines and between the first and fourth vertical lines.
</section>

## Tests
<section id='tests'>

```yml
- text: <code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>3/1/4/4</code>.
  testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi), ''<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>3/1/4/4</code>.'');'

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
var code = ".item5 {grid-area: 3/1/4/4;}"
```

</section>
