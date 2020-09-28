---
id: 587d78ab367417b2b2512af0
title: 'Use display: flex to Position Two Boxes'
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cgz3QS7'
forumTopicId: 301105
---

## Description
<section id='description'>
This section uses alternating challenge styles to show how to use CSS to position elements in a flexible way. First, a challenge will explain theory, then a practical challenge using a simple tweet component will apply the flexbox concept.
Placing the CSS property <code>display: flex;</code> on an element allows you to use other flex properties to build a responsive page.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>display</code> to <code>#box-container</code> and set its value to <code>flex</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>#box-container</code> should have the <code>display</code> property set to a value of <code>flex</code>.
    testString: assert($('#box-container').css('display') == 'flex');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
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
    height: 500px;
    display: flex;
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
