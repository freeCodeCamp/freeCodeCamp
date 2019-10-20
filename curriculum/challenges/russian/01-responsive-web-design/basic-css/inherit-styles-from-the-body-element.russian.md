---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: https://scrimba.com/c/c9bmdtR
forumTopicId: 18204
localeTitle: Наследовать стили из элемента тела
---

## Description
<section id='description'>
Теперь мы доказали, что каждая HTML-страница имеет элемент <code>body</code> , а ее элемент <code>body</code> также может быть связан с CSS. Помните, вы можете стилизовать свой элемент <code>body</code> же, как любой другой элемент HTML, и все ваши другие элементы наследуют стили вашего <code>body</code> .
</section>

## Instructions
<section id='instructions'>
Во-первых, создайте элемент <code>h1</code> с текстом <code>Hello World</code> Затем дадим все элементы на вашей странице цвета <code>green</code> , добавив <code>color: green;</code> к объявлению стиля вашего <code>body</code> . Наконец, придайте вашему <code>body</code> элемент семейства шрифтов <code>monospace</code> , добавив <code>font-family: monospace;</code> к объявлению стиля вашего <code>body</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create an <code>h1</code> element.
    testString: assert(($("h1").length > 0));
  - text: Your <code>h1</code> element should have the text <code>Hello World</code>.
    testString: assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)));
  - text: Make sure your <code>h1</code> element has a closing tag.
    testString: assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length);
  - text: Give your <code>body</code> element the <code>color</code> property of <code>green</code>.
    testString: assert(($("body").css("color") === "rgb(0, 128, 0)"));
  - text: Give your <code>body</code> element the <code>font-family</code> property of <code>monospace</code>.
    testString: assert(($("body").css("font-family").match(/monospace/i)));
  - text: Your <code>h1</code> element should inherit the font <code>monospace</code> from your <code>body</code> element.
    testString: assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)));
  - text: Your <code>h1</code> element should inherit the color green from your <code>body</code> element.
    testString: assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"));

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
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>
```

</section>
