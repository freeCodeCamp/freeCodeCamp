---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: https://scrimba.com/c/cJ8QGkhJ
forumTopicId: 301020
localeTitle: Сделать элементы доступными только для чтения с экрана с помощью пользовательского CSS
---

## Description
<section id='description'>
Вы заметили, что все прикладные проблемы доступности до сих пор не использовали CSS? Это должно показать важность контура логического документа и использовать семантически значимые теги вокруг вашего контента, прежде чем вводить визуальный дизайн. Однако магия CSS также может улучшить доступность вашей страницы, когда вы хотите визуально скрывать контент, предназначенный только для чтения с экрана. Это происходит, когда информация находится в визуальном формате (например, диаграмме), но пользователям экрана чтения требуется альтернативная презентация (например, таблица) для доступа к данным. CSS используется для размещения элементов экрана только для чтения с визуальной области окна браузера. Вот пример правил CSS, которые это делают: <blockquote> .sr-only { <br> позиция: абсолютная; <br> left: -10000px; <br> ширина: 1px; <br> высота: 1шт; <br> top: auto; <br> переполнение: скрыто; <br> } </blockquote> <strong>Заметка</strong> <br> Следующие подходы CSS НЕ будут делать то же самое: <ul><li> <code>display: none;</code> или <code>visibility: hidden;</code> скрывает контент для всех, включая пользователей с экрана </li><li> Нулевые значения для размеров пикселей, такие как <code>width: 0px; height: 0px;</code> удаляет этот элемент из потока вашего документа, то есть читатели экрана будут игнорировать его </li></ul>
</section>

## Instructions
<section id='instructions'>
Camper Cat создал действительно классную стеклянную гистограмму для своей учебной страницы и помещал данные в таблицу для своих слабовидящих пользователей. В таблице уже есть класс <code>sr-only</code> , но правила CSS еще не заполнены. Дайте <code>position</code> абсолютное значение, <code>left</code> значение a -10000px, а также <code>width</code> и <code>height</code> как значения 1px.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should set the <code>position</code> property of the <code>sr-only</code> class to a value of absolute.
    testString: assert($('.sr-only').css('position') == 'absolute');
  - text: Your code should set the <code>left</code> property of the <code>sr-only</code> class to a value of -10000px.
    testString: assert($('.sr-only').css('left') == '-10000px');
  - text: Your code should set the <code>width</code> property of the <code>sr-only</code> class to a value of 1 pixel.
    testString: assert(code.match(/width:\s*?1px/gi));
  - text: Your code should set the <code>height</code> property of the <code>sr-only</code> class to a value of 1 pixel.
    testString: assert(code.match(/height:\s*?1px/gi));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training-->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<head>
  <style>
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training-->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
