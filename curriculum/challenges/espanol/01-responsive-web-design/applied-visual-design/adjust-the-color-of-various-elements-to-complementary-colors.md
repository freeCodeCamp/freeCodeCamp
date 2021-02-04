---
id: 587d78a4367417b2b2512ad3
title: Adjustar los colores de varios elementos para colores complementarios
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

En el desafío de colores complementarios vimos que al colocar dos colores opuestos del círculo cromático, parecen más vivos. Sin embargo, el contraste visual fuerte puede ser molesto si se utiliza en un sitio web y algunos veces pueden hacer que el texto sea difícil de leer si está dentro de un complementary-color background. En la práctica, usualmente se usa uno de los colores como dominante y los complementarios se usan para atraer atención visual a cierto contenido dentro de la página.

# --instructions--

Está página utilizará una sombra de cerceta (`#09A7A1`) como color dominante y el complementario naranja (`#FF790E`) para resaltar los botones de inicio de sesión. Cambia el `background-color` del `header` y `footer` de negro a cerceta. Después, cambia `h2` texto `color` también a cerceta. Por último, pon naranja el `background-color` del `button`.

# --hints--

El elemento `header` debe tener un `background-color` de #09A7A1.

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

El elemento `footer` debe tener un `background-color` de #09A7A1.

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

El elemento `h2` debe tener un `color` de #09A7A1.

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

El elemento `button` debe tener un `background-color` de #FF790E.

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
