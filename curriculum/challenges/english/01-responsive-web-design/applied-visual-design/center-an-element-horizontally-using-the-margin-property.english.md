---
id: 587d78a3367417b2b2512ad0
title: Center an Element Horizontally Using the margin Property
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
---

## Description
<section id='description'>
Another positioning technique is to center a block element horizontally. One way to do this is to set its <code>margin</code> to a value of auto.
This method works for images, too. Images are inline elements by default, but can be changed to block elements when you set the <code>display</code> property to block.
</section>

## Instructions
<section id='instructions'>
Center the <code>div</code> on the page by adding a <code>margin</code> property with a value of auto.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>div</code> should have a <code>margin</code> set to auto.
    testString: assert(code.match(/margin:\s*?auto;/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```

</section>
