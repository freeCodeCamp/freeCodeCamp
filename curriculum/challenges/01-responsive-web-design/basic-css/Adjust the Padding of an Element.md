---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
guideUrl: 'https://guide.freecodecamp.org/certificates/adjust-the-padding-of-an-element'
videoUrl: 'https://scrimba.com/c/cED8ZC2'
---

## Description
<section id='description'>
Now let's put our Cat Photo App away for a little while and learn more about styling HTML.
You may have already noticed this, but all HTML elements are essentially little rectangles.
Three important properties control the space that surrounds each HTML element: <code>padding</code>, <code>margin</code>, and <code>border</code>.
An element's <code>padding</code> controls the amount of space between the element's content and its <code>border</code>.
Here, we can see that the blue box and the red box are nested within the yellow box. Note that the red box has more <code>padding</code> than the blue box.
When you increase the blue box's <code>padding</code>, it will increase the distance(<code>padding</code>) between the text and the border around it.
</section>

## Instructions
<section id='instructions'>
Change the <code>padding</code> of your blue box to match that of your red box.
</section>

## Tests
<section id='tests'>

```yml
- text: Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.
  testString: 'assert($(".blue-box").css("padding-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.");'

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
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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

```js
// solution required
```
</section>
