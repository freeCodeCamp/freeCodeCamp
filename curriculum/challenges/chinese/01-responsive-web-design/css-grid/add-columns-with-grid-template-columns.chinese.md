---
id: 5a9036d038fddaf9a66b5d32
title: Add Columns with grid-template-columns
challengeType: 0
videoUrl: ''
localeTitle: 使用grid-template-columns添加列
---

## Description
<section id="description">简单地创建一个网格元素并不会让你走得太远。您还需要定义网格的结构。要向网格添加一些列，请在网格容器上使用<code>grid-template-columns</code>属性，如下所示： <blockquote> 。容器 { <br>显示：网格; <br> grid-template-columns：50px 50px; <br> } </blockquote>这将为您的网格提供两列，每列50px宽。给<code>grid-template-columns</code>属性的参数数量表示<code>grid-template-columns</code>数，每个参数的值表示每列的宽度。 </section>

## Instructions
<section id="instructions">为网格容器提供三列，每列<code>100px</code>宽。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有一个<code>grid-template-columns</code>属性，其中三个单元为<code>100px</code> 。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*grid-template-columns\s*?:\s*?100px\s*?100px\s*?100px\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>grid-template-columns</code> property with three units of <code>100px</code>.");'

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
// solution required
```
</section>
