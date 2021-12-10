---
id: 587d7788367417b2b2512aa2
title: Полегшіть навігацію по екрані за допомогою навігаційного орієнтиру
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

Теґ `nav` - це ще один елемент HTML5 із вбудованою функцією орієнтира, що спрощує навігацію по екрані. Цей теґ призначений для об'єднання основних навігаційних посилань на сторінці.

Якщо в нижній частині сторінки містяться повторювані посилання, не обов'язково також позначати їх теґом `nav`. Достатньо використати теґ `footer` (розглядатиметься в наступному завданні).

# --instructions--

Camper Cat включив навігаційні посилання у верхній частині тренувальної сторінки, але розмістив їх у `div`. Замініть теґ `div` на `nav`, щоб покращити доступність його сторінки.

# --hints--

Ваш код має містити один теґ `nav`.

```js
assert($('nav').length == 1);
```

Ваші теґи `nav` мають обгортати `ul` і елементи його списку.

```js
assert($('nav').children('ul').length == 1);
```

Ваш код не має містити жодних теґів `div`.

```js
assert($('div').length == 0);
```

Елемент `nav` має містити кінцевий теґ.

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
