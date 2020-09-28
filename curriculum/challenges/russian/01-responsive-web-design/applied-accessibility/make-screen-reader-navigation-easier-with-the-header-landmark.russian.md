---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: https://scrimba.com/c/cB76vtv
forumTopicId: 301023
localeTitle: Сделать экранную навигацию проще с заголовком Landmark
---

## Description
<section id='description'>
Следующий элемент HTML5, который добавляет смысловое значение и улучшает доступность, является тегом <code>header</code> . Он используется для обертывания вводной информации или навигационных ссылок для своего родительского тега и хорошо работает вокруг контента, который повторяется вверху на нескольких страницах. <code>header</code> разделяет встроенную функцию ориентира, которую вы видели с <code>main</code> , позволяя вспомогательным технологиям быстро перейти к этому контенту. <strong>Заметка</strong> <br> <code>header</code> предназначен для использования в теге <code>body</code> вашего HTML-документа. Это отличается от <code>head</code> элемента, который содержит заголовок страницы, мета - информации и т.д.
</section>

## Instructions
<section id='instructions'>
Camper Cat пишет отличные статьи о тренировках ниндзя и хочет добавить страницу на свой сайт. Измените верхний <code>div</code> который в настоящее время содержит <code>h1</code> для тега <code>header</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>header</code> tag.
    testString: assert($('header').length == 1);
  - text: Your <code>header</code> tags should wrap around the <code>h1</code>.
    testString: assert($('header').children('h1').length == 1);
  - text: Your code should not have any <code>div</code> tags.
    testString: assert($('div').length == 0);
  - text: Make sure your <code>header</code> element has a closing tag.
    testString: assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>

  <div>
    <h1>Training with Camper Cat</h1>
  </div>


  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<body>

  <header>
    <h1>Training with Camper Cat</h1>
  </header>


  <main>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
</body>
```

</section>
