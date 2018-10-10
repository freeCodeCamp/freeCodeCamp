---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: Отрегулируйте цвет различных элементов для дополнительных цветов
---

## Description
<section id="description"> Задача «Дополнительные цвета» показала, что противоположные цвета на цветовом круге могут сделать друг друга более яркими, когда они расположены бок о бок. Однако сильный визуальный контраст может быть резким, если он чрезмерно используется на веб-сайте и иногда может сделать текст более трудным для чтения, если он помещен на фоне дополнительного цвета. На практике один из цветов обычно доминирует, а дополнение используется для привлечения внимания к определенному контенту на странице. </section>

## Instructions
<section id="instructions"> Эта страница будет использовать оттенок <code>#09A7A1</code> ( <code>#09A7A1</code> ) в качестве доминирующего цвета, а его оранжевый ( <code>#FF790E</code> ) дополняет визуально выделение кнопок регистрации. Измените <code>background-color</code> как <code>header</code> и <code>footer</code> от черного до цвета teal. Затем измените <code>color</code> текста <code>h2</code> на teal. Наконец, измените <code>background-color</code> <code>button</code> на оранжевый цвет. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Элемент <code>header</code> должен иметь <code>background-color</code> # 09A7A1.'
    testString: 'assert($("header").css("background-color") == "rgb(9, 167, 161)", "The <code>header</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'Элемент нижнего <code>footer</code> должен иметь <code>background-color</code> # 09A7A1.'
    testString: 'assert($("footer").css("background-color") == "rgb(9, 167, 161)", "The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'Элемент <code>h2</code> должен иметь <code>color</code> # 09A7A1.'
    testString: 'assert($("h2").css("color") == "rgb(9, 167, 161)", "The <code>h2</code> element should have a <code>color</code> of #09A7A1.");'
  - text: 'Элемент <code>button</code> должен иметь <code>background-color</code> # FF790E.'
    testString: 'assert($("button").css("background-color") == "rgb(255, 121, 14)", "The <code>button</code> element should have a <code>background-color</code> of #FF790E.");'

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

```js
// solution required
```
</section>
