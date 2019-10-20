---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: https://scrimba.com/c/czVwWSv
forumTopicId: 301024
localeTitle: Сделать навигацию с помощью экрана лучше с помощью навигационной системы Landmark
---

## Description
<section id='description'>
Элемент <code>nav</code> - это еще один элемент HTML5 со встроенной функцией ориентира для удобной навигации на экране. Этот тег предназначен для обхода основных ссылок навигации на вашей странице. Если в нижней части страницы повторяются ссылки на сайты, нет необходимости разметки тегов с помощью тега <code>nav</code> . Использование <code>footer</code> (в следующей задаче) достаточно.
</section>

## Instructions
<section id='instructions'>
Camper Cat включил навигационные ссылки в верхней части своей учебной страницы, но завернул их в <code>div</code> . Измените <code>div</code> на тег <code>nav</code> чтобы улучшить доступность на его странице.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>nav</code> tag.
    testString: assert($('nav').length == 1);
  - text: Your <code>nav</code> tags should wrap around the <code>ul</code> and its list items.
    testString: assert($('nav').children('ul').length == 1);
  - text: Your code should not have any <code>div</code> tags.
    testString: assert($('div').length == 0);
  - text: Make sure your <code>nav</code> element has a closing tag.
    testString: assert(code.match(/<\/nav>/g) && code.match(/<\/nav>/g).length === code.match(/<nav>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>

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

</div>

</section>

## Solution
<section id='solution'>

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>

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
