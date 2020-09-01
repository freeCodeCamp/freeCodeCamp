---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvNAG'
forumTopicId: 301116
---

## Description
<section id='description'>
The <code>order</code> property is used to tell CSS the order of how flex items appear in the flex container. By default, items will appear in the same order they come in the source HTML. The property takes numbers as values, and negative numbers can be used.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>order</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>2</code> and give <code>#box-2</code> a value of <code>1</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>order</code> property set to a value of <code>2</code>.
    testString: assert($('#box-1').css('order') == '2');
  - text: The <code>#box-2</code> element should have the <code>order</code> property set to a value of <code>1</code>.
    testString: assert($('#box-2').css('order') == '1');

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

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
  }
  #box-1 {
    background-color: dodgerblue;
    order: 2;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    order: 1;
    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
