---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVaDAv/cBEkbfJ'
forumTopicId: 301110
---

## Description
<section id='description'>
Adding <code>display: flex</code> to an element turns it into a flex container. This makes it possible to align any children of that element into rows or columns. You do this by adding the <code>flex-direction</code> property to the parent item and setting it to row or column. Creating a row will align the children horizontally, and creating a column will align the children vertically.
Other options for <code>flex-direction</code> are <code>row-reverse</code> and <code>column-reverse</code>.
<strong>Note:</strong> The default value for the <code>flex-direction</code> property is <code>row</code>.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>flex-direction</code> to the <code>#box-container</code> element, and give it a value of <code>row-reverse</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.
    testString: assert($('#box-container').css('flex-direction') == 'row-reverse');

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

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
    flex-direction: row-reverse;
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

</section>
