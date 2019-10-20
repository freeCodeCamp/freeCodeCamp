---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: https://scrimba.com/c/cGJMqtE
forumTopicId: 301015
localeTitle: Улучшите читаемость диаграммы
---

## Description
<section id='description'>
HTML5 представил элемент <code>figure</code> вместе со связанной <code>figcaption</code>. Используемые вместе эти элементы обертывают визуальное представление (например, изображение, диаграмму или схему) вместе с его заголовком. Это дает двукратное повышение доступности как с семантической группировкой связанного контента, так и с предоставлением текстовой альтернативы, которая объясняет эту <code>figure</code>. Для визуализации данных, таких как диаграммы, заголовок можно использовать, чтобы кратко отметить тенденции или выводы для пользователей с нарушениями зрения. Другая проблема заключается в том, как переносить табличную версию данных диаграммы за пределы экрана (с использованием CSS) для пользователей с экрана. Вот пример - обратите внимание, что <code>figcaption</code> идет внутри <code>figure</code> тегов и может быть объединен с другими элементами: <blockquote> &lt;Цифра&gt; <br> &lt;img src = &quot;roundhouseDestruction.jpeg&quot; alt = &quot;Фотография Кэмпер Кота, выполняющего удар с разворота&quot;&gt; <br> &lt;br&gt; <br> &lt;Figcaption&gt; <br> Мастер Кэмпер Кот демонстрирует правильный удар с разворота. <br> &lt;/ Figcaption&gt; <br> &lt;/ Цифра&gt; <br></blockquote>
</section>

## Instructions
<section id='instructions'>
Кэмпер Кот тяжело работает, создавая сложную гистограмму, показывающую количество времени в неделю, затраченное на обучение в хитрости, сражении и оружии. Помогите ему лучше структурировать свою страницу, изменив тег <code>div</code> который он использовал для тега <code>figure</code>, и тэг <code>p</code> который окружает подпись к тегу <code>figcaption</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>figure</code> tag.
    testString: assert($('figure').length == 1);
  - text: Your code should have one <code>figcaption</code> tag.
    testString: assert($('figcaption').length == 1);
  - text: Your code should not have any <code>div</code> tags.
    testString: assert($('div').length == 0);
  - text: Your code should not have any <code>p</code> tags.
    testString: assert($('p').length == 0);
  - text: The <code>figcaption</code> should be a child of the <code>figure</code> tag.
    testString: assert($('figure').children('figcaption').length == 1);
  - text: Make sure your <code>figure</code> element has a closing tag.
    testString: assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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
  <main>
    <section>

      <!-- Add your code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Add your code above this line -->

    </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>

</section>

## Solution
<section id='solution'>

```html
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
  <main>
    <section>

      <!-- Add your code below this line -->
      <figure>
        <!-- Stacked bar chart will go here -->
        <br>
        <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
      </figure>
      <!-- Add your code above this line -->

    </section>
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
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
