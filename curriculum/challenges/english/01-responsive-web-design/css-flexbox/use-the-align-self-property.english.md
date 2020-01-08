---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/cMbvzfv'
forumTopicId: 301107
---

## Description
<section id='description'>
The final property for flex items is <code>align-self</code>. This property allows you to adjust each item's alignment individually, instead of setting them all at once. This is useful since other common adjustment techniques using the CSS properties <code>float</code>, <code>clear</code>, and <code>vertical-align</code> do not work on flex items.
<code>align-self</code> accepts the same values as <code>align-items</code> and will override any value set by the <code>align-items</code> property.
</section>

## Instructions
<section id='instructions'>
Add the CSS property <code>align-self</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>center</code> and give <code>#box-2</code> a value of <code>flex-end</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have the <code>align-self</code> property set to a value of <code>center</code>.
    testString: assert($('#box-1').css('align-self') == 'center');
  - text: The <code>#box-2</code> element should have the <code>align-self</code> property set to a value of <code>flex-end</code>.
    testString: assert($('#box-2').css('align-self') == 'flex-end');

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
    align-self: center;
    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;
    align-self: flex-end;
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
