---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: https://scrimba.com/c/c2MZ2uB
forumTopicId: 301075
localeTitle: Используйте свойство CSS Transform Property skewY для искажения элемента по оси Y
---

## Description
<section id='description'>
Учитывая, что <code>skewX()</code> выделенный элемент вдоль оси X на заданную степень, неудивительно, что <code>skewY()</code> элемент вдоль оси Y (по вертикали).
</section>

## Instructions
<section id='instructions'>
Перекосите элемент с идентификатором <code>top</code> -10 градусов по оси Y, используя свойство <code>transform</code> .
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
