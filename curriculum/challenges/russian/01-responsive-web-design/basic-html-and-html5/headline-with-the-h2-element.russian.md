---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cE8Gqf3
forumTopicId: 18196
localeTitle: Заголовок с элементом h2
---

## Description
<section id='description'>
В течение следующих нескольких уроков мы по частям построим HTML5 веб-приложение с картинками котят. Элемент <code>h2</code>, который вы добавите на этом шаге, добавит заголовок второго уровня на веб-страницу. Этот элемент сообщает браузеру информацию о структуре вашего веб-сайта. Элементы <code>h1</code> часто используются для основных заголовков, а элементы <code>h2</code> обычно используются для подзаголовков. Существуют также элементы <code>h3</code> , <code>h4</code> , <code>h5</code> и <code>h6</code> для обозначения разных уровней подзаголовков.
</section>

## Instructions
<section id='instructions'>
Добавьте тег <code>h2</code> с текстом «CatPhotoApp», чтобы создать второй <code>element</code>(элемент) HTML под <code>element</code>(элементом) <code>h1</code> с текстом «Hello World» .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Create an <code>h2</code> element.
    testString: assert(($("h2").length > 0));
  - text: Make sure your <code>h2</code> element has a closing tag.
    testString: assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length);
  - text: Your <code>h2</code> element should have the text "CatPhotoApp".
    testString: assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()));
  - text: Your <code>h1</code> element should have the text "Hello World".
    testString: assert.isTrue((/hello(\s)+world/gi).test($("h1").text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

```

</div>

</section>

## Solution
