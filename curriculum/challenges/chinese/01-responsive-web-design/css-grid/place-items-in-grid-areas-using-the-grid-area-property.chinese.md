---
id: 5a94fe1369fb03452672e45d
title: Place Items in Grid Areas Using the grid-area Property
challengeType: 0
videoUrl: ''
localeTitle: 使用网格区域属性在网格区域中放置项目
---

## Description
<section id="description">为网格容器创建区域模板后，如上一个挑战所示，您可以通过引用您提供的名称将项目放入自定义区域。为此，您可以在项目上使用<code>grid-area</code>属性，如下所示： <blockquote> .item1 {grid-area：header; } </blockquote>这使网格知道您希望<code>item1</code>类进入名为<code>header</code>的区域。在这种情况下，该项将使用整个顶行，因为整行被命名为标题区域。 </section>

## Instructions
<section id="instructions">使用<code>grid-area</code>属性将具有<code>item5</code>类的元素放置在<code>footer</code>区域中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item5</code>类应该有一个<code>grid-area</code>属性，其值为<code>footer</code> 。
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?footer\s*?;[\s\S]*}/gi), "<code>item5</code> class should have a <code>grid-area</code> property that has the value of <code>footer</code>.");'

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
    grid-template-areas:
      "header header header"
      "advert content content"
      "footer footer footer";
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
