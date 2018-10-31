---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: ''
localeTitle: Заголовок с элементом h2
---

## Description
<section id="description"> В течение следующих нескольких уроков мы построим веб-приложение для HTML-кодов HTML5 по частям. Элемент <code>h2</code> вы добавите на этом шаге, добавит заголовок уровня 2 на веб-страницу. Этот элемент сообщает браузеру о структуре вашего веб-сайта. Элементы <code>h1</code> часто используются для основных заголовков, а элементы <code>h2</code> обычно используются для подзаголовков. Существуют также элементы <code>h3</code> , <code>h4</code> , <code>h5</code> и <code>h6</code> для обозначения разных уровней подзаголовков. </section>

## Instructions
<section id="instructions"> Добавьте тег <code>h2</code> который говорит «CatPhotoApp», чтобы создать второй <code>element</code> HTML под <code>element</code> «Hello World» <code>h1</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Создайте элемент <code>h2</code> .
    testString: 'assert(($("h2").length > 0), "Create an <code>h2</code> element.");'
  - text: 'Убедитесь, что ваш элемент <code>h2</code> имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, "Make sure your <code>h2</code> element has a closing tag.");'
  - text: Ваш элемент <code>h2</code> должен иметь текст «CatPhotoApp».
    testString: 'assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), "Your <code>h2</code> element should have the text "CatPhotoApp".");'
  - text: Ваш элемент <code>h1</code> должен иметь текст «Hello World».
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

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
<section id='solution'>

```js
// solution required
```
</section>
