---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cZmWeA4'
---

## Description
<section id='description'>
The last two challenges used the <code>flex-direction</code> property set to row. This property can also create a column by vertically stacking the children of a flex container.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>flex-direction</code> to the <code>#box-container</code> element, and give it a value of column.
</section>

## Tests
<section id='tests'>

```yml
- text: 'The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.'
  testString: 'assert($("#box-container").css("flex-direction") == "column", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
