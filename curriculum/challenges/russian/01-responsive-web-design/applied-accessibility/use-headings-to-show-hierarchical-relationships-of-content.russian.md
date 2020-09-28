---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: https://scrimba.com/c/cqVEktm
forumTopicId: 301026
localeTitle: Использовать заголовки для отображения иерархических отношений содержимого
---

## Description
<section id='description'>
Заголовки (элементы от <code>h1</code> до <code>h6</code> ) являются основными тегами, которые помогают сформировать структуру и заголовки вашего контента. Программы экранного доступа (скринридеры) могут быть настроены только на чтение заголовков на странице, так пользователь получит краткое содержание страницы. Поэтому важно, чтобы теги-заголовки в разметке имели семантическое значение и отношение друг к другу, а не просто использовались на основе размера заголовка. <em>Семантическое значение</em> – это когда тег, в который вы обернули содержимое, указывает на тип информации внутри него. Если бы вы писали статью с введением, основной частью и заключением, то не имело бы смысла поместить заключение в виде подраздела к основной части вашей статьи. Это должен быть отдельный раздел. Точно так же теги заголовков на веб-странице должны идти в определенном порядке и отражать иерархию вашего контента. Заголовки с равным (или более высоким) рангом озаглавливают новые разделы, заголовки с меньшим рангом являются их подразделами. Например, страница с элементом <code>h2</code> под которым идут несколько подразделов с элементом <code>h4</code> будет сбивать с толку пользователя, который использует программу экранного доступа (скринридер). С шестью вариантами заголовков заманчиво выбирать тег, только потому, что он лучше выглядит в браузере, но для изменения размеров заголовков вы можете использоваться CSS. И последнее, на каждой странице всегда должен быть один (и только один) элемент <code>h1</code>, который является главным заголовком для всего вашего контента. Этот и другие заголовки частично используются поисковыми системами, чтобы понять, что находится на странице.
</section>

## Instructions
<section id='instructions'>
Camper Cat хочет, чтобы страница на его сайте была посвящена тому, как стать ниндзя. Помогите ему исправить заголовки так, чтобы его разметка придавала семантический смысл содержанию и показывала правильные отношения между родительскими и дочерними элементами его разделов. Измените все теги <code>h5</code> на соответствующий уровень заголовка, чтобы указать, что они являются подразделами <code>h2</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have 6 <code>h3</code> tags.
    testString: assert($("h3").length === 6);
  - text: Your code should have 6 <code>h3</code> closing tags.
    testString: assert((code.match(/\/h3/g) || []).length===6);
  - text: Your code should not have any <code>h5</code> tags.
    testString: assert($("h5").length === 0);
  - text: Your code should not have any <code>h5</code> closing tags.
    testString: assert(/\/h5/.test(code)===false);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```

</section>
