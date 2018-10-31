---
id: 587d78a6367417b2b2512adc
title: Use the CSS Transform Property skewY to Skew an Element Along the Y-Axis
challengeType: 0
videoUrl: ''
localeTitle: Используйте свойство CSS Transform Property skewY для искажения элемента по оси Y
---

## Description
<section id="description"> Учитывая, что <code>skewX()</code> выделенный элемент вдоль оси X на заданную степень, неудивительно, что <code>skewY()</code> элемент вдоль оси Y (по вертикали). </section>

## Instructions
<section id="instructions"> Перекосите элемент с идентификатором <code>top</code> -10 градусов по оси Y, используя свойство <code>transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Элемент с <code>top</code> id должен быть перекошен на -10 градусов по оси Y.
    testString: 'assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g), "The element with id <code>top</code> should be skewed by -10 degrees along its Y-axis.");'

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

```js
// solution required
```
</section>
