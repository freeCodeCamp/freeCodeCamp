---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cd3PBfr'
---

## Description
<section id='description'>
So far, all the properties in the challenges apply to the flex container (the parent of the flex items). However, there are several useful properties for the flex items.
The first is the <code>flex-shrink</code> property. When it's used, it allows an item to shrink if the flex container is too small. Items shrink when the width of the parent container is smaller than the combined widths of all the flex items within it.
The <code>flex-shrink</code> property takes numbers as values. The higher the number, the more it will shrink compared to the other items in the container. For example, if one item has a <code>flex-shrink</code> value of 1 and the other has a <code>flex-shrink</code> value of 3, the one with the value of 3 will shrink three times as much as the other.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>flex-shrink</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of 1 and <code>#box-2</code> a value of 2.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.'
    testString: 'assert($("#box-1").css("flex-shrink") == "1", "The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.");'
  - text: 'The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.'
    testString: 'assert($("#box-2").css("flex-shrink") == "2", "The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.");'

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
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

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
