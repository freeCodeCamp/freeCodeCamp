---
id: 587d78ad367417b2b2512afa
title: Use the flex-wrap Property to Wrap a Row or Column
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVaDAv/cQv9ZtG'
forumTopicId: 301114
---

## Description
<section id='description'>
CSS flexbox has a feature to split a flex item into multiple rows (or columns). By default, a flex container will fit all flex items together. For example, a row will all be on one line.
However, using the <code>flex-wrap</code> property tells CSS to wrap items. This means extra items move into a new row or column. The break point of where the wrapping happens depends on the size of the items and the size of the container.
CSS also has options for the direction of the wrap:
<ul><li><code>nowrap</code>: this is the default setting, and does not wrap items.</li><li><code>wrap</code>: wraps items from left-to-right if they are in a row, or top-to-bottom if they are in a column.</li><li><code>wrap-reverse</code>: wraps items from right-to-left if they are in a row, or bottom-to-top if they are in a column.</li></ul>
</section>

## Instructions
<section id='instructions'>
The current layout has too many boxes for one row. Add the CSS property <code>flex-wrap</code> to the <code>#box-container</code> element, and give it a value of <code>wrap</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have the <code>flex-wrap</code> property set to a value of <code>wrap</code>.
    testString: assert($('#box-container').css('flex-wrap') == 'wrap');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 50%;
  }
  #box-3 {
    background-color: violet;
    width: 25%;
    height: 50%;
  }
  #box-4 {
    background-color: yellow;
    width: 25%;
    height: 50%;
  }
  #box-5 {
    background-color: green;
    width: 25%;
    height: 50%;
  }
  #box-6 {
    background-color: black;
    width: 25%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
  <div id="box-3"></div>
  <div id="box-4"></div>
  <div id="box-5"></div>
  <div id="box-6"></div>
</div>
```

</section>
