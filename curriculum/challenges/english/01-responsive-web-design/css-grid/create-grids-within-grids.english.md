---
id: 5a94fe8569fb03452672e464
title: Create Grids within Grids
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pByETK/c6N78Ap'
forumTopicId: 301128
---

## Description
<section id='description'>
Turning an element into a grid only affects the behavior of its direct descendants. So by turning a direct descendant into a grid, you  have a grid within a grid.
For example, by setting the <code>display</code> and <code>grid-template-columns</code> properties of the element with the <code>item3</code> class, you create a grid within your grid.
</section>

## Instructions
<section id='instructions'>
Turn the element with the <code>item3</code> class into a grid with two columns with a width of <code>auto</code> and <code>1fr</code> using <code>display</code> and <code>grid-template-columns</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>item3</code> class should have a <code>grid-template-columns</code> property with <code>auto</code> and <code>1fr</code> as values.
    testString: assert(code.match(/.item3\s*?{[\s\S]*grid-template-columns\s*?:\s*?auto\s*?1fr\s*?;[\s\S]*}/gi));
  - text: <code>item3</code> class should have a <code>display</code> property with the value of <code>grid</code>.
    testString: assert(code.match(/.item3\s*?{[\s\S]*display\s*?:\s*?grid\s*?;[\s\S]*}/gi));

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
    /* Only change code below this line */


    /* Only change code above this line */
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
var code = ".item3 {grid-template-columns: auto 1fr; display: grid;}"
```

</section>
