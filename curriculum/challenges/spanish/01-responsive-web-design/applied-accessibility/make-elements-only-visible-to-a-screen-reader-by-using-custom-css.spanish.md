---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: ''
localeTitle: Haga que los elementos solo sean visibles para un lector de pantalla utilizando CSS personalizado
---

## Description
<section id="description"> ¿Has notado que todos los desafíos de accesibilidad aplicados hasta ahora no han usado ningún CSS? Esto es para mostrar la importancia de un esquema de documento lógico y el uso de etiquetas semánticamente significativas alrededor de su contenido antes de introducir el aspecto de diseño visual. Sin embargo, la magia de CSS también puede mejorar la accesibilidad en su página cuando desea ocultar visualmente el contenido destinado solo para lectores de pantalla. Esto sucede cuando la información está en un formato visual (como un gráfico), pero los usuarios de lectores de pantalla necesitan una presentación alternativa (como una tabla) para acceder a los datos. CSS se utiliza para colocar los elementos de solo lectura de pantalla fuera del área visual de la ventana del navegador. Aquí hay un ejemplo de las reglas CSS que logran esto: <blockquote> .sr-only { <br> position: absolute; <br> left: -10000px; <br> width: 1px; <br> height: 1px; <br> top: auto; <br> overflow: hidden; <br> } </blockquote> <strong>Nota</strong> <br> Los siguientes enfoques de CSS NO harán lo mismo: <ul><li> <code>display: none;</code> o <code>visibility: hidden;</code> oculta el contenido para todos, incluidos los usuarios de lectores de pantalla </li><li> Valores cero para tamaños de píxeles, tales como <code>width: 0px; height: 0px;</code> elimina ese elemento del flujo de tu documento, lo que significa que los lectores de pantalla lo ignorarán </li></ul></section>

## Instructions
<section id="instructions"> Camper Cat creó un gráfico de barras apiladas realmente genial para su página de entrenamiento y puso los datos en una tabla para sus usuarios con discapacidades visuales. La tabla ya tiene una clase <code>sr-only</code> , pero las reglas de CSS aún no están completas. Asigne a la <code>position</code> un valor absoluto, el valor <code>left</code> a -10000px, y el <code>width</code> y el <code>height</code> ambos valores de 1px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe establecer la propiedad de <code>position</code> de la clase <code>sr-only</code> en un valor absoluto.
    testString: 'assert($(".sr-only").css("position") == "absolute", "Your code should set the <code>position</code> property of the <code>sr-only</code> class to a value of absolute.");'
  - text: Su código debe establecer la propiedad <code>left</code> de la clase <code>sr-only</code> a un valor de -10000px.
    testString: 'assert($(".sr-only").css("left") == "-10000px", "Your code should set the <code>left</code> property of the <code>sr-only</code> class to a value of -10000px.");'
  - text: Su código debe establecer la propiedad de <code>width</code> de la clase <code>sr-only</code> en un valor de 1 píxel.
    testString: 'assert(code.match(/width:\s*?1px/gi), "Your code should set the <code>width</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'
  - text: Su código debe establecer la propiedad de <code>height</code> de la clase <code>sr-only</code> en un valor de 1 píxel.
    testString: 'assert(code.match(/height:\s*?1px/gi), "Your code should set the <code>height</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'

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

```js
// solution required
```
</section>
