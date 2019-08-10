---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/cEDWPs6'
forumTopicId: 301048
---

## Description
<section id='description'>
By manipulating different selectors and properties, you can make interesting shapes. One of the easier ones to try is a crescent moon shape. For this challenge you need to work with the <code>box-shadow</code> property that sets the shadow of an element, along with the <code>border-radius</code> property that controls the roundness of the element's corners.
You will create a round, transparent object with a crisp shadow that is slightly offset to the side - the shadow is actually going to be the moon shape you see.
In order to create a round object, the <code>border-radius</code> property should be set to a value of 50%.
You may recall from an earlier challenge that the <code>box-shadow</code> property takes values for <code>offset-x</code>, <code>offset-y</code>, <code>blur-radius</code>, <code>spread-radius</code> and a color value in that order. The <code>blur-radius</code> and <code>spread-radius</code> values are optional.
</section>

## Instructions
<section id='instructions'>
Manipulate the square element in the editor to create the moon shape. First, change the <code>background-color</code> to transparent, then set the <code>border-radius</code> property to 50% to make the circular shape. Finally, change the <code>box-shadow</code> property to set the <code>offset-x</code> to 25px, the <code>offset-y</code> to 10px, <code>blur-radius</code> to 0, <code>spread-radius</code> to 0, and color to blue.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the <code>background-color</code> property should be set to <code>transparent</code>.
    testString: assert(code.match(/background-color:\s*?transparent;/gi));
  - text: The value of the <code>border-radius</code> property should be set to <code>50%</code>.
    testString: assert(code.match(/border-radius:\s*?50%;/gi));
  - text: The value of the <code>box-shadow</code> property should be set to 25px for <code>offset-x</code>, 10px for <code>offset-y</code>, 0 for <code>blur-radius</code>, 0 for <code>spread-radius</code>, and finally blue for the color.
    testString: assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 0px;
    box-shadow: 25px 10px 10px 10px green;
  }

</style>
<div class="center"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  .center {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background-color: transparent;
    border-radius: 50%;
    box-shadow: 25px 10px 0 0 blue;
  }
</style>
<div class="center"></div>

```

</section>
