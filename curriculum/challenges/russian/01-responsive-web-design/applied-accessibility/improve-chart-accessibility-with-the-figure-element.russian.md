---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: ''
localeTitle: Улучшите читаемость диаграммы
---

## Description
<section id="description"> HTML5 представил элемент <code>figure</code> , связанный с  <code>figcaption</code>. Вместе эти элементы связывают визуальное представление информации  (например, изображение, диаграмму или диаграмму) с заголовком. Использование этих тегов дает двукратное повышение доступности информации. Например, для визуализации данных можно использовать диаграммы. В заголовок диаграммы можно вынести основные идеи или выводы, чтобы упростить понимание контента для пользователей с нарушениями зрения и для пользователей аудиоинтерфейсов (читалок с экрана). Например, обратите внимание, что <code>figcaption</code> находится внутри тегов <code>figure</code> и может быть объединен с другими элементами: <blockquote> &lt;Цифра&gt; <br> &lt;img src = &quot;roundhouseDestruction.jpeg&quot; alt = &quot; Изображение Camper Cat, который выполняет боевой прием &quot;&gt; <br> &lt;br&gt; <br> &lt;Figcaption&gt; <br> Camper Cat  демонстрирует правильное выполнение нокаута. <br> &lt;/ Figcaption&gt; <br> &lt;/ Цифра&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat создает сложную гистограмму, которая показывает сколько времени в неделю он проводит под прикрытием, в сражениях и на тренировках. Помогите ему лучше структурировать свою страницу, изменив тег <code>div</code>, который он использовал для тега <code>figure</code> , и тэг <code>p</code> который создает обрамление для подписи к тегу <code>figcaption</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваш код должен иметь один <code>figure</code> тег.
    testString: 'assert($("figure").length == 1, "Your code should have one <code>figure</code> tag.");'
  - text: В вашем коде должен быть один тег <code>figcaption</code> .
    testString: 'assert($("figcaption").length == 1, "Your code should have one <code>figcaption</code> tag.");'
  - text: У вашего кода не должно быть никаких тегов <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Ваш код не должен иметь каких-либо <code>p</code> тегов.
    testString: 'assert($("p").length == 0, "Your code should not have any <code>p</code> tags.");'
  - text: <code>figcaption</code> должен быть дочерним элементом тега <code>figure</code> .
    testString: 'assert($("figure").children("figcaption").length == 1, "The <code>figcaption</code> should be a child of the <code>figure</code> tag.");'
  - text: 'Убедитесь, что ваш <code>figure</code> элемент имеет закрывающий тег.'
    testString: 'assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length, "Make sure your <code>figure</code> element has a closing tag.");'

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

      <!-- Добавьте ваш код под этой строкой -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Добавьте ваш код над этой строкой -->

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

## Solution (Решение)
<section id='solution'>

```js
// ваше решение должно быть здесь
```
</section>
