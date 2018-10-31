---
id: bad87fee1348bd9aedf08756
title: Prioritize One Style Over Another
challengeType: 0
videoUrl: ''
localeTitle: Приоритет одного стиля над другим
---

## Description
<section id="description"> Иногда ваши HTML-элементы получат несколько стилей, которые конфликтуют друг с другом. Например, ваш элемент <code>h1</code> не может быть одновременно зеленым и розовым. Давайте посмотрим, что произойдет, когда мы создадим класс, который делает текст розовым, а затем примените его к элементу. Будет ли наш класс <em>переопределять</em> <code>color: green;</code> элемента <code>body</code> <code>color: green;</code> Свойство CSS? </section>

## Instructions
<section id="instructions"> Создайте класс CSS, называемый <code>pink-text</code> который дает элементу цвет розовый. Дайте вашему элементу <code>h1</code> класс <code>pink-text</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>h1</code> должен иметь класс <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: Ваш <code>&lt;style&gt;</code> должен иметь класс CSS с <code>pink-text</code> который изменяет <code>color</code> .
    testString: 'assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*.+\s*;\s*\}/g), "Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class that changes the <code>color</code>.");'
  - text: Ваш элемент <code>h1</code> должен быть розовым.
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

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
</style>
<h1>Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
