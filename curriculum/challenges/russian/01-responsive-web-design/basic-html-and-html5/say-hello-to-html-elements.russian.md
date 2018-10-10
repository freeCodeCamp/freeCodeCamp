---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: ''
localeTitle: Произнести Hello to HTML Elements
---

## Description
<section id="description"> Добро пожаловать в проблемы с кодированием HTML-кода freeCodeCamp. Постепенно вы будете проходить через веб-разработку. Во-первых, вы начнете с создания простой веб-страницы с использованием HTML. Вы можете редактировать <code>code</code> в <code>code editor</code> , который встроен в эту веб-страницу. Вы видите код в редакторе кода, который говорит <code>&lt;h1&gt;Hello&lt;/h1&gt;</code> ? Это <code>element</code> HTML. Большинство элементов HTML имеют <code>opening tag</code> и <code>closing tag</code> . Теги открытия выглядят следующим образом: <code>&lt;h1&gt;</code> Закрывающие теги выглядят следующим образом: <code>&lt;/h1&gt;</code> Единственная разница между тегами открытия и закрытия - это прямая косая черта после открывающей скобки закрывающего тега. У каждой задачи есть тесты, которые вы можете запустить в любое время, нажав кнопку «Запустить тесты». Когда вы пройдете все тесты, вам будет предложено отправить ваше решение и перейти к следующему заданию на кодирование. </section>

## Instructions
<section id="instructions"> Чтобы пройти тест по этой проблеме, измените текст своего элемента <code>h1</code> , чтобы сказать «Hello World». </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш элемент <code>h1</code> должен иметь текст «Hello World».
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
