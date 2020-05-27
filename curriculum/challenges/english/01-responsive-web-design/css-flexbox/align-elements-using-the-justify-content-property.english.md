---
id: 587d78ac367417b2b2512af6
title: Align Elements Using the justify-content Property
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
---

## Description
<section id='description'>
Sometimes the flex items within a flex container do not fill all the space in the container. It is common to want to tell CSS how to align and space out the flex items a certain way. Fortunately, the <code>justify-content</code> property has several options to do this. But first, there is some important terminology to understand before reviewing those options.
<a href="https://www.w3.org/TR/css-flexbox-1/images/flex-direction-terms.svg" target="_blank">Here is a useful image showing a row to illustrate the concepts below.</a>
Recall that setting a flex container as a row places the flex items side-by-side from left-to-right. A flex container set as a column places the flex items in a vertical stack from top-to-bottom. For each, the direction the flex items are arranged is called the <strong>main axis</strong>. For a row, this is a horizontal line that cuts through each item. And for a column, the main axis is a vertical line through the items.
There are several options for how to space the flex items along the line that is the main axis. One of the most commonly used is <code>justify-content: center;</code>, which aligns all the flex items to the center inside the flex container. Others options include:

<ul><li><code>flex-start</code>: aligns items to the start of the flex container. For a row, this pushes the items to the left of the container. For a column, this pushes the items to the top of the container. This is the default alignment if no <code>justify-content</code> is specified.</li><li><code>flex-end</code>: aligns items to the end of the flex container. For a row, this pushes the items to the right of the container. For a column, this pushes the items to the bottom of the container.</li><li><code>space-between</code>: aligns items to the center of the main axis, with extra space placed between the items. The first and last items are pushed to the very edge of the flex container. For example, in a row the first item is against the left side of the container, the last item is against the right side of the container, then the remaining space is distributed evenly among the other items.</li><li><code>space-around</code>: similar to <code>space-between</code> but the first and last items are not locked to the edges of the container, the space is distributed around all the items with a half space on either end of the flex container.</li><li><code>space-evenly</code>: Distributes space evenly between the flex items with a full space at either end of the flex container</li></ul>
</section>

## Instructions
<section id='instructions'>
An example helps show this property in action. Add the CSS property <code>justify-content</code> to the <code>#box-container</code> element, and give it a value of <code>center</code>.
<strong>Bonus</strong><br>Try the other options for the <code>justify-content</code> property in the code editor to see their differences. But note that a value of <code>center</code> is the only one that will pass this challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>#box-container</code> element should have a <code>justify-content</code> property set to a value of <code>center</code>.
    testString: assert($('#box-container').css('justify-content') == 'center');

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
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
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
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

</section>
