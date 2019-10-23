---
id: 5a90375238fddaf9a66b5d3b
title: Align an Item Vertically using align-self
challengeType: 0
videoUrl: ''
localeTitle: 使用align-self垂直对齐项目
---

## Description
<section id="description">正如您可以水平对齐项目一样，也可以垂直对齐项目。为此，您可以在项目上使用<code>align-self</code>属性。此属性接受来自上一次挑战的所有与<code>justify-self</code>相同的值。 </section>

## Instructions
<section id="instructions">对齐项目与类<code>item3</code>在垂直<code>end</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code>类应该有一个<code>align-self</code>属性，其值为<code>end</code> 。
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*align-self\s*?:\s*?end\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>align-self</code> property that has the value of <code>end</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}

  .item3 {
    background: PaleTurquoise;
    /* add your code below this line */


    /* add your code above this line */
  }

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

```js
// solution required
```
</section>
