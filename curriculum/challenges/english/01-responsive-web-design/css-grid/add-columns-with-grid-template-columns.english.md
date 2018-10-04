---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: 'https://scrimba.com/p/pByETK/c7NzDHv'
---

## Description
<section id='description'>
Simply creating a grid element doesn't get you very far. You need to define the structure of the grid as well. To add some columns to the grid, use the <code>grid-template-columns</code> property on a grid container as demonstrated below:
<blockquote>.container {<br>&nbsp;&nbsp;display: grid;<br>&nbsp;&nbsp;grid-template-columns: 50px 50px;<br>}</blockquote>
This will give your grid two columns that are 50px wide each.
The number of parameters given to the <code>grid-template-columns</code> property indicates the number of columns in the grid, and the value of each parameter indicates the width of each column.
</section>

## Instructions
<section id='instructions'>
Give the grid container three columns that are <code>100px</code> wide each.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi), ''<code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.'');'

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
    /* add your code below this line */
    
    
    /* add your code above this line */
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
var code = ".container {grid-template-columns: 100px 100px 100px;}"
```

</section>
