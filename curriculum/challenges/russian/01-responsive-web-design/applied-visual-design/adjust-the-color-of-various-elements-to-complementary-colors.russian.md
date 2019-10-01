---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: https://scrimba.com/c/cWmPpud
forumTopicId: 301033
localeTitle: Отрегулируйте цвет различных элементов для дополнительных цветов
---

## Description
<section id='description'>
Задача «Дополнительные цвета» показала, что противоположные цвета на цветовом круге могут сделать друг друга более сочными, когда они расположены бок о бок. Однако сильный визуальный контраст может быть слишком резким, если он чрезмерно используется на веб-сайте и иногда может сделать текст более трудным для чтения, если он размещен на фоне дополнительного цвета. На практике один из цветов обычно доминирует, а дополнительный используется для привлечения внимания к определенному контенту на странице.
</section>

## Instructions
<section id='instructions'>
Эта страница будет использовать сине-зеленый оттенок ( <code>#09A7A1</code> ) в качестве доминирующего цвета, а дополняющий его оранжевый ( <code>#FF790E</code> ) для визуального выделения кнопок sign-up. Измените <code>background-color</code> обоих элементов  <code>header</code> и <code>footer</code> с черного на сине-зеленый. Затем также измените <code>color</code> текста <code>h2</code> на сине-зеленый. Наконец, измените <code>background-color</code> <code>button</code> на оранжевый цвет.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The <code>header</code> element should have a <code>background-color</code> of #09A7A1.'
    testString: assert($('header').css('background-color') == 'rgb(9, 167, 161)');
  - text: 'The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.'
    testString: assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
  - text: 'The <code>h2</code> element should have a <code>color</code> of #09A7A1.'
    testString: assert($('h2').css('color') == 'rgb(9, 167, 161)');
  - text: 'The <code>button</code> element should have a <code>background-color</code> of #FF790E.'
    testString: assert($('button').css('background-color') == 'rgb(255, 121, 14)');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>

```

</div>

</section>

## Solution
<section id='solution'>

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: #09A7A1;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09A7A1;
  }
  button {
    background-color: #FF790E;
  }
  footer {
    background-color: #09A7A1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer to execute flexible commands, like <code>fetch Pringles</code>.</p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will have you chopping carrots in O(log n) time before you know it.</p>
    <button>Sign Up</button>
  </article>
</main>
<br>
<footer>&copy; 2018 FCC Kitchen</footer>
```

</section>
