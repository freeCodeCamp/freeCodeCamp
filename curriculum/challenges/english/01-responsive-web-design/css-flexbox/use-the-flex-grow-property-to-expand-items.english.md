---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVaDAv/c2p78cg'
forumTopicId: 301111
---

## Description
<section id='description'>
The opposite of <code>flex-shrink</code> is the <code>flex-grow</code> property. Recall that <code>flex-shrink</code> controls the size of the items when the container shrinks. The <code>flex-grow</code> property controls the size of items when the parent container expands.
Using a similar example from the last challenge, if one item has a <code>flex-grow</code> value of <code>1</code> and the other has a <code>flex-grow</code> value of <code>3</code>, the one with the value of <code>3</code> will grow three times as much as the other.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>flex-grow</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>1</code> and <code>#box-2</code> a value of <code>2</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of <code>1</code>.
    testString: assert($('#box-1').css('flex-grow') == '1');
  - text: The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of <code>2</code>.
    testString: assert($('#box-2').css('flex-grow') == '2');

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

  }

  #box-2 {
    background-color: orangered;
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

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }

  #box-1 {
    background-color: dodgerblue;
    height: 200px;
    flex-grow: 1;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-grow: 2;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
