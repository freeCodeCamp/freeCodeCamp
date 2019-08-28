---
id: 587d781d367417b2b2512ac5
title: Set the line-height of Paragraphs
challengeType: 0
videoUrl: https://scrimba.com/c/crVWdcv
forumTopicId: 301070
localeTitle: Задайте высоту строки абзацев
---

## Description
<section id='description'>
CSS предлагает свойство <code>line-height</code> для изменения высоты каждой строки в блоке текста. Как следует из названия, он изменяет количество вертикального пространства, которое получает каждая строка текста.
</section>

## Instructions
<section id='instructions'>
Добавьте свойство <code>line-height</code> в тег <code>p</code> и установите его на 25 пикселей.
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
