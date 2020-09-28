---
id: 587d78ae367417b2b2512afd
title: Use the flex-basis Property to Set the Initial Size of an Item
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c3d9nCa'
forumTopicId: 301108
---

## Description
<section id='description'>
The <code>flex-basis</code> property specifies the initial size of the item before CSS makes adjustments with <code>flex-shrink</code> or <code>flex-grow</code>.
The units used by the <code>flex-basis</code> property are the same as other size properties (<code>px</code>, <code>em</code>, <code>%</code>, etc.). The value <code>auto</code> sizes items based on the content.
</section>

## Instructions
<section id='instructions'>
Set the initial size of the boxes using <code>flex-basis</code>. Add the CSS property <code>flex-basis</code> to both <code>#box-1</code> and <code>#box-2</code>. Give <code>#box-1</code> a value of <code>10em</code> and <code>#box-2</code> a value of <code>20em</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-1</code> element should have a <code>flex-basis</code> property.
    testString: assert($('#box-1').css('flex-basis') != 'auto');
  - text: The <code>#box-1</code> element should have a <code>flex-basis</code> value of <code>10em</code>.
    testString: assert(code.match(/#box-1\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?10em;/g));
  - text: The <code>#box-2</code> element should have the <code>flex-basis</code> property.
    testString: assert($('#box-2').css('flex-basis') != 'auto');
  - text: The <code>#box-2</code> element should have a <code>flex-basis</code> value of <code>20em</code>.
    testString: assert(code.match(/#box-2\s*?{\s*?.*?\s*?.*?\s*?flex-basis:\s*?20em;/g));

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
    flex-basis: 10em;
  }

  #box-2 {
    background-color: orangered;
    height: 200px;
    flex-basis: 20em;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
