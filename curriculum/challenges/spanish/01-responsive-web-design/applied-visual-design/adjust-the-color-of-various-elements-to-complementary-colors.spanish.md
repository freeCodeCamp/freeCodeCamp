---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: ''
localeTitle: Ajustar el color de varios elementos a colores complementarios
---

## Description
<section id="description"> El desafío de los colores complementarios demostró que los colores opuestos en la rueda de colores pueden hacer que cada uno parezca más vibrante cuando se colocan uno al lado del otro. Sin embargo, el fuerte contraste visual puede ser discordante si se usa en exceso en un sitio web, y algunas veces puede hacer que el texto sea más difícil de leer si se coloca sobre un fondo de color complementario. En la práctica, uno de los colores suele ser el dominante y su complementario se utiliza para atraer la atención visual a cierto contenido de la página. </section>

## Instructions
<section id="instructions"> Esta página utilizará un tono de verde azulado ( <code>#09A7A1</code> ) como color dominante, y su complementario naranja ( <code>#FF790E</code> ) para resaltar visualmente los botones de registro (Sign Up). Cambie el <code>background-color</code> del <code>header</code> y del <code>footer</code> del negro al color verde azulado. Luego cambie el <code>color</code> del texto del <code>h2</code> al verde azulado(teal) también. Finalmente, cambie el <code>background-color</code> del <code>button</code> al color naranja. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El elemento de <code>header</code> debe tener un <code>background-color</code> de <code>background-color</code> de # 09A7A1.'
    testString: 'assert($("header").css("background-color") == "rgb(9, 167, 161)", "The <code>header</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'El elemento de <code>footer</code> debe tener un <code>background-color</code> de <code>background-color</code> de # 09A7A1.'
    testString: 'assert($("footer").css("background-color") == "rgb(9, 167, 161)", "The <code>footer</code> element should have a <code>background-color</code> of #09A7A1.");'
  - text: 'El elemento <code>h2</code> debe tener un <code>color</code> de # 09A7A1.'
    testString: 'assert($("h2").css("color") == "rgb(9, 167, 161)", "The <code>h2</code> element should have a <code>color</code> of #09A7A1.");'
  - text: 'El elemento de <code>button</code> debe tener un <code>background-color</code> de <code>background-color</code> de # FF790E.'
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
