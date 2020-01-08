---
id: 587d78ad367417b2b2512af8
title: Align Elements Using the align-items Property
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c8aggtk'
forumTopicId: 301101
---

## Description
<section id='description'>
The <code>align-items</code> property is similar to <code>justify-content</code>. Recall that the <code>justify-content</code> property aligned flex items along the main axis. For rows, the main axis is a horizontal line and for columns it is a vertical line.
Flex containers also have a <strong>cross axis</strong> which is the opposite of the main axis. For rows, the cross axis is vertical and for columns, the cross axis is horizontal.
CSS offers the <code>align-items</code> property to align flex items along the cross axis. For a row, it tells CSS how to push the items in the entire row up or down within the container. And for a column, how to push all the items left or right within the container.
The different values available for <code>align-items</code> include:
<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For rows, this aligns items to the top of the container. For columns, this aligns items to the left of the container.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For rows, this aligns items to the bottom of the container. For columns, this aligns items to the right of the container.</li><li><code>center</code>: align items to the center. For rows, this vertically aligns items (equal space above and below the items). For columns, this horizontally aligns them (equal space to the left and right of the items).</li><li><code>stretch</code>: stretch the items to fill the flex container. For example, rows items are stretched to fill the flex container top-to-bottom. This is the default value if no <code>align-items</code> value is specified.</li><li><code>baseline</code>: align items to their baselines. Baseline is a text concept, think of it as the line that the letters sit on.</li></ul>
</section>

## Instructions
<section id='instructions'>
An example helps show this property in action. Add the CSS property <code>align-items</code> to the <code>#box-container</code> element, and give it a value of <code>center</code>.
<strong>Bonus</strong><br>Try the other options for the <code>align-items</code> property in the code editor to see their differences. But note that a value of <code>center</code> is the only one that will pass this challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have an <code>align-items</code> property set to a value of <code>center</code>.
    testString: assert($('#box-container').css('align-items') == 'center');

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
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
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
    height: 500px;
    align-items: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 200px;
    font-size: 24px;
  }

  #box-2 {
    background-color: orangered;
    width: 200px;
    font-size: 18px;
  }
</style>

<div id="box-container">
  <div id="box-1"><p>Hello</p></div>
  <div id="box-2"><p>Goodbye</p></div>
</div>
```

</section>
