---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cB7mwUw'
forumTopicId: 16634
---

## Description
<section id='description'>
Sometimes you will want to customize an element so that it has different amounts of <code>padding</code> on each of its sides.
CSS allows you to control the <code>padding</code> of all four individual sides of an element with the <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, and <code>padding-left</code> properties.
</section>

## Instructions
<section id='instructions'>
Give the blue box a <code>padding</code> of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-top") === "40px");
  - text: Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-right") === "20px");
  - text: Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-bottom") === "20px");
  - text: Your <code>blue-box</code> class should give the left of the elements <code>40px</code> of <code>padding</code>.
    testString: assert($(".blue-box").css("padding-left") === "40px");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
