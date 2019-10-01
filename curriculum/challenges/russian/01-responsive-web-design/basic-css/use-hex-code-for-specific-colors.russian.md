---
id: bad87fee1348bd9aedf08726
title: Use Hex Code for Specific Colors
challengeType: 0
videoUrl: https://scrimba.com/c/c8W9mHM
forumTopicId: 18350
localeTitle: Использовать шестнадцатеричный код для конкретных цветов
---

## Description
<section id='description'>
Знаете ли вы, что существуют другие способы представления цветов в CSS? Один из этих способов называется шестнадцатеричным кодом или <code>hex code</code> для краткости. Обычно мы используем <code>decimals</code> или базовые 10 чисел, которые используют символы от 0 до 9 для каждой цифры. <code>Hexadecimals</code> (или <code>hex</code> ) - это базовые 16 чисел. Это означает, что он использует шестнадцать различных символов. Как десятичные знаки, символы 0-9 представляют значения от нуля до девяти. Затем A, B, C, D, E, F представляют значения от десяти до пятнадцати. В целом, от 0 до F может представлять цифру в <code>hexadecimal</code> форме, что дает нам 16 возможных значений. Здесь вы можете найти более подробную информацию о <a target="_blank" href="https://en.wikipedia.org/wiki/Hexadecimal">шестнадцатеричных числах</a> . В CSS мы можем использовать 6 шестнадцатеричных цифр для представления цветов, по два для красных (R), зеленых (G) и синих (B) компонентов. Например, <code>#000000</code> является черным и также является наименьшим возможным значением. Здесь вы можете найти более подробную информацию о <a target="_blank" href="https://en.wikipedia.org/wiki/RGB_color_model">цветовой системе RGB</a> . <blockquote> body { <br> цвет: # 000000; <br> } </blockquote>
</section>

## Instructions
<section id='instructions'>
Замените слово <code>black</code> в фоновом цвете элемента <code>body</code> с его <code>hex code</code> , <code>#000000</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Give your <code>body</code> element the background-color of black.
    testString: assert($("body").css("background-color") === "rgb(0, 0, 0)");
  - text: Use the <code>hex code</code> for the color black instead of the word <code>black</code>.
    testString: assert(code.match(/body\s*{(([\s\S]*;\s*?)|\s*?)background.*\s*:\s*?#000(000)?((\s*})|(;[\s\S]*?}))/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
  }
</style>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: #000000;
  }
</style>
```

</section>
