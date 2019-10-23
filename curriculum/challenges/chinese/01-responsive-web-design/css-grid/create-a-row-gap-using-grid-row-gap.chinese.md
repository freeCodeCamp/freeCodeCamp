---
id: 5a9036ee38fddaf9a66b5d36
title: Create a Row Gap using grid-row-gap
challengeType: 0
videoUrl: ''
localeTitle: 使用grid-row-gap创建行间隙
---

## Description
<section id="description">您可以使用<code>grid-row-gap</code>在<code>grid-row-gap</code>之间添加间隙，方法与在上一个挑战中的列之间添加间隙的方式相同。 </section>

## Instructions
<section id="instructions">为<code>5px</code>高的行创建间隙。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该具有值为<code>5px</code>的<code>grid-row-gap</code>属性。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-row-gap\s*?:\s*?5px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-row-gap</code> property that has the value of <code>5px</code>.");'

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
