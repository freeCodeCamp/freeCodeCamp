---
id: bd7123c8c441eddfaeb5bdef
title: Say Hello to HTML Elements
challengeType: 0
videoUrl: https://scrimba.com/p/pVMPUv/cE8Gpt2
forumTopicId: 18276
localeTitle: Скажи Hello элементам HTML
---

## Description
<section id='description'>
Добро пожаловать в курс по HTML от freeCodeCamp. Мы проведем вас через веб-разработку шаг за шагом. Сначала вы начнете с создания простой веб-страницы с использованием HTML. Вы можете редактировать <code>code</code>(код) в <code>code editor</code>(редакторе кода), который встроен в эту веб-страницу. Вы видите <code>&lt;h1&gt;Hello&lt;/h1&gt;</code> в редакторе кода? Это <code>element</code>(элемент) HTML. Большинство элементов HTML имеют <code>opening tag</code>(начальный тег) и <code>closing tag</code>(конечный тег). Начальные теги выглядят следующим образом: <code>&lt;h1&gt;</code> Конечные же теги выглядят так: <code>&lt;/h1&gt;</code> Единственная разница между начальными и конечными тегами - это слеш вправо после открывающей скобки конечного тега. У каждого упражнения есть тесты, которые вы можете запустить в любое время, нажав кнопку «Запустить тесты». Когда вы пройдете все тесты, вам будет предложено отправить ваше решение и перейти к следующему заданию.
</section>

## Instructions
<section id='instructions'>
Чтобы пройти тест по этому заданию, измените текст своего элемента <code>h1</code> на «Hello World».
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the text "Hello World".
    testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()));

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

```html
<h1>Hello World</h1>
```

</section>
