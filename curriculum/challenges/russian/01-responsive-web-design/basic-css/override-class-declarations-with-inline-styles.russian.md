---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: ''
localeTitle: Переопределить объявления классов со встроенными стилями
---

## Description
<section id="description"> Таким образом, мы доказали, что объявления id переопределяют объявления классов, независимо от того, где они объявлены в вашем элементе <code>style</code> CSS. Существуют и другие способы переопределения CSS. Вы помните встроенные стили? </section>

## Instructions
<section id="instructions"> Используйте <code>inline style</code> чтобы сделать наш элемент <code>h1</code> белым. Помните, что в стилях строк выглядит так: <code>&lt;h1 style=&quot;color: green;&quot;&gt;</code> Оставьте классы <code>blue-text</code> и <code>pink-text</code> на вашем элементе <code>h1</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>h1</code> должен иметь класс <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Ваш элемент <code>h1</code> должен иметь <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: Ваш элемент <code>h1</code> должен иметь идентификатор <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: Дайте вашему элементу <code>h1</code> встроенный стиль.
    testString: 'assert(document.querySelector("h1[style]"), "Give your <code>h1</code> element an inline style.");'
  - text: Ваш элемент <code>h1</code> должен быть белым.
    testString: 'assert($("h1").css("color") === "rgb(255, 255, 255)", "Your <code>h1</code> element should be white.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
