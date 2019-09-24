---
id: 587d78a6367417b2b2512adb
title: Use the CSS Transform Property skewX to Skew an Element Along the X-Axis
challengeType: 0
videoUrl: https://scrimba.com/c/cyLP8Sr
forumTopicId: 301074
localeTitle: Используйте свойство преобразования CSS Transform для искажения элемента по оси X
---

## Description
<section id='description'>
Следующей функцией свойства <code>transform</code> является <code>skewX()</code> , которая искажает выбранный элемент вдоль его оси X (горизонтальной) на заданную степень. Следующий код перекосит элемент абзаца на -32 градуса по оси X. <blockquote> п { <br> transform: skewX (-32deg); <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Перекосите элемент с <code>bottom</code> на 24 градуса по оси X, используя свойство <code>transform</code> .
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
