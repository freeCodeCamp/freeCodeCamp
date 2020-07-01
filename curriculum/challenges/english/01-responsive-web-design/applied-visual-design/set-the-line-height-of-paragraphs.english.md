---
id: 587d781d367417b2b2512ac5
title: Set the line-height of Paragraphs
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/crVWdcv'
forumTopicId: 301070
---

## Description
<section id='description'>
CSS offers the <code>line-height</code> property to change the height of each line in a block of text. As the name suggests, it changes the amount of vertical space that each line of text gets.
</section>

## Instructions
<section id='instructions'>
Add a <code>line-height</code> property to the <code>p</code> tag and set it to 25px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the <code>line-height</code> of the <code>p</code> tag to 25 pixels.
    testString: assert($('p').css('line-height') == '25px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 16px;

  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  p {
    font-size: 16px;
    line-height: 25px;
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

</section>
