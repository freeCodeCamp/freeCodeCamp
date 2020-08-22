---
id: 587d781c367417b2b2512ac4
title: Set the font-size of Paragraph Text
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/cVJ36Cr'
forumTopicId: 301068
---

## Description
<section id='description'>
The <code>font-size</code> property in CSS is not limited to headings, it can be applied to any element containing text.
</section>

## Instructions
<section id='instructions'>
Change the value of the <code>font-size</code> property for the paragraph to 16px to make it more visible.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>p</code> tag should have a <code>font-size</code> of 16 pixels.
    testString: assert($('p').css('font-size') == '16px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  p {
    font-size: 10px;
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
  }
</style>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</p>
```

</section>
