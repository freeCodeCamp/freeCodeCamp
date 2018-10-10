---
id: 5a90374338fddaf9a66b5d3a
title: Align an Item Horizontally using justify-self
challengeType: 0
videoUrl: ''
localeTitle: 使用justify-self水平对齐项目
---

## Description
<section id="description">在CSS Grid中，每个项目的内容位于一个称为<dfn>单元格</dfn>的框中。您可以使用网格项上的<code>justify-self</code>属性水平对齐内容在其单元格中的位置。默认情况下，此属性的值为<code>stretch</code> ，这将使内容填充单元格的整个宽度。此CSS Grid属性也接受其他值： <code>start</code> ：对齐单元格左侧的内容， <code>center</code> ：对齐单元格<code>center</code>的内容， <code>end</code> ：对齐单元格右侧的内容。 </section>

## Instructions
<section id="instructions">使用<code>justify-self</code>属性将项目与<code>item2</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item2</code>类应该有一个具有<code>center</code>值的<code>justify-self</code>属性。
    testString: 'assert(code.match(/.item2\s*?{[\s\S]*justify-self\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>item2</code> class should have a <code>justify-self</code> property that has the value of <code>center</code>.");'

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
    /* add your code below this line */


    /* add your code above this line */
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

```js
// solution required
```
</section>
