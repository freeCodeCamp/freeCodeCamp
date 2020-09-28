---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
---

## Description
<section id='description'>
The next function of the <code>transform</code> property is <code>skewX()</code>, which skews the selected element along its X (horizontal) axis by a given degree.
The following code skews the paragraph element by -32 degrees along the X-axis.

```css
p {
  transform: skewX(-32deg);
}
```

</section>

## Instructions
<section id='instructions'>
Skew the element with the id of <code>bottom</code> by 24 degrees along the X-axis by using the <code>transform</code> property.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The element with id <code>bottom</code> should be skewed by 24 degrees along its X-axis.
    testString: assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));

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
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

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
    margin:  50px auto;
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

</section>
