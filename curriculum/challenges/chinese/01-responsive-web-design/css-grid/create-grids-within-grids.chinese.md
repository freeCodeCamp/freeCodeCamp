---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
videoUrl: ''
localeTitle: 在网格中创建网格
---

## Description
<section id="description">将元素转换为网格只会影响其直接后代的行为。因此，通过将直接后代转换为网格，您在网格中有一个网格。例如，通过使用<code>item3</code>类设置元素的<code>display</code>和<code>grid-template-columns</code>属性，可以在网格中创建网格。 </section>

## Instructions
<section id="instructions">使用<code>item3</code>类将元素转换为网格，其中两列的宽度为<code>auto</code> ， <code>1fr</code>使用<code>display</code>和<code>grid-template-columns</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code>类应该有一个<code>grid-template-columns</code>属性，其中<code>auto</code>和<code>1fr</code>作为值。
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.");'
  - text: <code>item3</code>类应该具有<code>grid</code>值的<code>display</code>属性。
    testString: 'assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi), "<code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "advert header"
      "advert content"
      "advert footer";
  }
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
    /* enter your code below this line */


    /* enter your code above this line */
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .itemOne {
    background: PaleGreen;
  }

  .itemTwo {
    background: BlanchedAlmond;
  }

</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">
    <div class="itemOne">paragraph1</div>
    <div class="itemTwo">paragraph2</div>
  </div>
  <div class="item4">footer</div>
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
