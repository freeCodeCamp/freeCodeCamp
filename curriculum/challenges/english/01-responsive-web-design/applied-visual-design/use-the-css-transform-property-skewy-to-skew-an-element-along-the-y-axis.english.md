---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
isHidden: false
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
---

## Description
<section id='description'>
Given that the <code>skewX()</code> function skews the selected element along the X-axis by a given degree, it is no surprise that the <code>skewY()</code> property skews an element along the Y (vertical) axis.
</section>

## Instructions
<section id='instructions'>
Skew the element with the id of <code>top</code> -10 degrees along the Y-axis by using the <code>transform</code> property.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with id <code>top</code> should be skewed by -10 degrees along its Y-axis.
    testString: assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;

  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

</div>



</section>

## Solution
<section id='solution'>


```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```

</section>
