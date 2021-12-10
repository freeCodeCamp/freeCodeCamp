---
id: 587d78a4367417b2b2512ad3
title: Змінити колір різних елементів до додаткових кольорів
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

Згідно з завданням про доповняльні кольори, якщо протилежні кольори розташувати на палітрі один біля одного, це зробить їх більш насиченими. Проте, у разі використання на сайті насиченого візуалу, це може викликати роздратування і ускладнювати читання, особливо якщо колір фону доповняльний. На практиці, один із кольорів зазвичай є домінантним, а доповняльний використовується, щоб надати особливої уваги змісту на сторінці.

# --instructions--

Для цієї сторінки буде використано відтінок бірюзового (`#09A7A1`) як домінантний колір, та доповняльний йому - помаранчевий (`#FF790E`), щоб візуально виділити кнопку реєстрації. Змініть колір `background-color` елементів `header` та `footer` з чорного на бірюзовий. Потім змініть також властивість `color` тексту `h2` на бірюзовий. І під кінець, змініть колір `background-color` кнопки `button` на помаранчевий.

# --hints--

Елементу `header` необхідно мати властивість `background-color` із значенням #09A7A1.

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

Елементу `footer` необхідно мати властивість `background-color` із значенням #09A7A1.

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

Елементу `h2` необхідно мати властивість `color` із значенням #09A7A1.

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

Елементу `button` необхідно мати властивість `background-color` із значенням #FF790E.

```js
assert($('button').css('background-color') == 'rgb(255, 121, 14)');
```

# --seed--

## --seed-contents--

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

# --solutions--

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
