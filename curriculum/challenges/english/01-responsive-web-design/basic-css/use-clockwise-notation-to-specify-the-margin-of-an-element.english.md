---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cnpybAd'
forumTopicId: 18345
---

## Description
<section id='description'>
Let's try this again, but with <code>margin</code> this time.
Instead of specifying an element's <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, and <code>margin-left</code> properties individually, you can specify them all in one line, like this:
<code>margin: 10px 20px 10px 20px;</code>
These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.
</section>

## Instructions
<section id='instructions'>
Use Clockwise Notation to give the element with the <code>blue-box</code> class a margin of <code>40px</code> on its top and left side, but only <code>20px</code> on its bottom and right side.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.
    testString: assert($(".blue-box").css("margin-top") === "40px");
  - text: Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.
    testString: assert($(".blue-box").css("margin-right") === "20px");
  - text: Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.
    testString: assert($(".blue-box").css("margin-bottom") === "20px");
  - text: Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.
    testString: assert($(".blue-box").css("margin-left") === "40px");
  - text: You should use the clockwise notation to set the margin of <code>blue-box</code> class.
    testString: const removeCssComments = str => str.replace(/\/\*[\s\S]+?\*\//g, '');assert(/\.blue-box\s*{[\s\S]*margin[\s]*:\s*\d+px\s+\d+px\s+\d+px\s+\d+px(;\s*[^}]+\s*}|;?\s*})/.test(removeCssComments($('style').text())));

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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    margin: 40px 20px 20px 40px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```

</section>
