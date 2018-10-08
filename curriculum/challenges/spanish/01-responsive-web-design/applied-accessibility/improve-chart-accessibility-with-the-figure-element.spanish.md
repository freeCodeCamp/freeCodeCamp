---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
localeTitle: Mejora la accesibilidad de la carta con la figura Elemento.
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
HTML5 introdujo el elemento <code>figure</code> , junto con la <code>figcaption</code> relacionada. Usados ​​juntos, estos elementos envuelven una representación visual (como una imagen, diagrama o gráfico) junto con su título. Esto proporciona un aumento de accesibilidad doble al agrupar semánticamente el contenido relacionado y al proporcionar una alternativa de texto que explica la <code>figure</code> . 
Para visualizaciones de datos como cuadros, la leyenda se puede usar para observar brevemente las tendencias o conclusiones para usuarios con discapacidades visuales. Otro desafío es cómo mover una versión de tabla de los datos del gráfico fuera de la pantalla (mediante CSS) para los usuarios de lectores de pantalla. 
Aquí hay un ejemplo: tenga en cuenta que la <code>figcaption</code> va dentro de las etiquetas de <code>figure</code> y se puede combinar con otros elementos: 
<blockquote>&lt;figure&gt;<br>&nbsp;&nbsp;&lt;img src=&quot;roundhouseDestruction.jpeg&quot; alt=&quot;Photo of Camper Cat executing a roundhouse kick&quot;&gt;<br>&nbsp;&nbsp;&lt;br&gt;<br>&nbsp;&nbsp;&lt;figcaption&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;Master Camper Cat demonstrates proper form of a roundhouse kick.<br>&nbsp;&nbsp;&lt;/figcaption&gt;<br>&lt;/figure&gt;<br></blockquote> 
</section>

## Instructions
<section id='instructions'> 
Camper Cat está trabajando duro para crear un gráfico de barras apiladas que muestre la cantidad de tiempo por semana para pasar el entrenamiento en sigilo, combate y armas. Ayúdelo a estructurar mejor su página cambiando la etiqueta <code>div</code> que usó por una etiqueta de <code>figure</code> , y la etiqueta <code>p</code> que rodea el título a una etiqueta de <code>figcaption</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una etiqueta de <code>figure</code> .
    testString: 'assert($("figure").length == 1, "Your code should have one <code>figure</code> tag.");'
  - text: Su código debe tener una etiqueta de <code>figcaption</code> .
    testString: 'assert($("figcaption").length == 1, "Your code should have one <code>figcaption</code> tag.");'
  - text: Su código no debe tener ninguna etiqueta <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Su código no debe tener ninguna etiqueta <code>p</code> .
    testString: 'assert($("p").length == 0, "Your code should not have any <code>p</code> tags.");'
  - text: La <code>figcaption</code> debe ser un hijo de la etiqueta de la <code>figure</code> .
    testString: 'assert($("figure").children("figcaption").length == 1, "The <code>figcaption</code> should be a child of the <code>figure</code> tag.");'
  - text: Asegúrese de que el elemento de su <code>figure</code> tenga una etiqueta de cierre.
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

```js
// solution required
```
</section>
