---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: https://scrimba.com/c/cGJDRha
forumTopicId: 18252
localeTitle: Переопределить объявления классов со встроенными стилями
---

## Description
<section id='description'>
Таким образом, мы доказали, что объявления id переопределяют объявления классов, независимо от того, где они объявлены в вашем элементе <code>style</code> CSS. Существуют и другие способы переопределения CSS. Вы помните встроенные стили?
</section>

## Instructions
<section id='instructions'>
Используйте <code>inline style</code> чтобы сделать наш элемент <code>h1</code> белым. Помните, что в стилях строк выглядит так: <code>&lt;h1 style=&quot;color: green;&quot;&gt;</code> Оставьте классы <code>blue-text</code> и <code>pink-text</code> на вашем элементе <code>h1</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the class <code>pink-text</code>.
    testString: assert($("h1").hasClass("pink-text"));
  - text: Your <code>h1</code> element should have the class <code>blue-text</code>.
    testString: assert($("h1").hasClass("blue-text"));
  - text: Your <code>h1</code> element should have the id of <code>orange-text</code>.
    testString: assert($("h1").attr("id") === "orange-text");
  - text: Give your <code>h1</code> element an inline style.
    testString: assert(document.querySelector('h1[style]'));
  - text: Your <code>h1</code> element should be white.
    testString: assert($("h1").css("color") === "rgb(255, 255, 255)");

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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>
```

</section>
