---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cM94aHk'
forumTopicId: 301046
---

## Description
<section id='description'>
When elements are positioned to overlap (i.e. using <code>position: absolute | relative | fixed | sticky</code>), the element coming later in the HTML markup will, by default, appear on the top of the other elements. However, the <code>z-index</code> property can specify the order of how elements are stacked on top of one another. It must be an integer (i.e. a whole number and not a decimal), and higher values for the <code>z-index</code> property of an element move it higher in the stack than those with lower values.
</section>

## Instructions
<section id='instructions'>
Add a <code>z-index</code> property to the element with the class name of <code>first</code> (the red rectangle) and set it to a value of 2 so it covers the other element (blue rectangle).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with class <code>first</code> should have a <code>z-index</code> value of 2.
    testString: assert($('.first').css('z-index') == '2');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;
    z-index: 2;
  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>
<div class="first"></div>
<div class="second"></div>
```

</section>
