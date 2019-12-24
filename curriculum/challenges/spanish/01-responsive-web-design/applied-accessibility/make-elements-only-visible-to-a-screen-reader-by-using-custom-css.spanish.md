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
    <h2>El Programa de Entrenamiento para Principantes de Tres Semanas del Maestro Camper Cat</h2>
    <figure>
      <!-- Gráfico de barras de entrenamiento semanal-->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Desglose semanal del tiempo de entrenamiento en sigilo, combate y armas.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Horas de entrenamiento en sigilo, combate y armas</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Sigilo y Agilidad</th>
          <th scope="col">Combate</th>
          <th scope="col">Armas</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Semana Uno</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Semana Dos</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Semana Tres</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Entrenamiento Sigilo &amp; Agilidad</h2>
    <article><h3>Trepa el follaje rápidamente usando la técnica del árbol recubridor mínimo (Minimum Spanning Tree)</h3></article>
    <article><h3>Ningún entrenamiento es NP-completo sin parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Entrenamiento de Combate</h2>
    <article><h3>Despacha múltiples enemigos con tácticas multi-hilo</h3></article>
    <article><h3>Adiós, mundo: 5 maneras comprobadas de aniquilar a tu oponente</h3></article>
  </section>
  <section id="weapons">
    <h2>Entrenamiento de Armas</h2>
    <article><h3>Espadas: la mejor herramienta para literalmente dividir y triunfar</h3></article>
    <article><h3>Breadth-first (amplitud) o depth-first (profundidad) en entrenamiento multi-arma?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solución requerida
```

</section>
