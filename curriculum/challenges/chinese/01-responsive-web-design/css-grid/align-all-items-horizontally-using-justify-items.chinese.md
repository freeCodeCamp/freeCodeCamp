---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0
videoUrl: ''
localeTitle: 使用对齐项目水平对齐所有项目
---

## Description
<section id="description">有时您希望CSS Grid中的所有项目共享相同的对齐方式。您可以使用以前学过的属性并单独对齐它们，也可以使用网格容器上的<code>justify-items</code>将它们全部水平<code>justify-items</code> 。此属性可以接受您在前两个挑战中学到的所有相同值，不同之处在于它会将网格中的<b>所有</b>项目移动到所需的对齐方式。 </section>

## Instructions
<section id="instructions">使用此属性可以水平居中所有项目。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>container</code>类应该有一个具有<code>center</code>值的<code>justify-items</code>属性。
    testString: 'assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>justify-items</code> property that has the value of <code>center</code>.");'

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
    /* add your code below this line */


    /* add your code above this line */
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
