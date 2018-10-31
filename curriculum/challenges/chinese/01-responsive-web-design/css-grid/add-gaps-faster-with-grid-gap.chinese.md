---
id: 5a9036ee38fddaf9a66b5d37
title: Add Gaps Faster with grid-gap
challengeType: 0
videoUrl: ''
localeTitle: 通过网格间隙更快地添加间隙
---

## Description
<section id="description"> <code>grid-gap</code>是<code>grid-row-gap</code>和<code>grid-column-gap</code> <code>grid-gap</code>的简写属性，来自前两个更方便使用的挑战。如果<code>grid-gap</code>有一个值，它将在所有行和列之间创建一个间隙。但是，如果有两个值，它将使用第一个值来设置行之间的间隙和列的第二个值。 </section>

## Instructions
<section id="instructions">使用<code>grid-gap</code>在行之间引入<code>10px</code>间隙，在列之间引入<code>20px</code>间隙。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有一个<code>grid-gap</code>属性，在行之间引入<code>10px</code>间隙，在列之间引入<code>20px</code>间隙。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-gap\s*?:\s*?10px\s+?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-gap</code> property that introduces <code>10px</code> gap between the rows and <code>20px</code> gap between the columns.");'

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
// solution required
```
</section>
