---
id: 5a9036ee38fddaf9a66b5d35
title: Create a Column Gap Using grid-column-gap
challengeType: 0
videoUrl: ''
localeTitle: 使用grid-column-gap创建列间隙
---

## Description
<section id="description">到目前为止，在你创建的网格中，列都相互紧密相连。有时您希望列之间存在间隙。要在列之间添加间隙，请使用<code>grid-column-gap</code>属性，如下所示： <blockquote> grid-column-gap：10px; </blockquote>这会在我们所有列之间创建10px的空白空间。 </section>

## Instructions
<section id="instructions">为网格中的列提供<code>20px</code>间隙。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该具有值为<code>20px</code>的<code>grid-column-gap</code>属性。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-column-gap\s*?:\s*?20px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-column-gap</code> property that has the value of <code>20px</code>.");'

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
