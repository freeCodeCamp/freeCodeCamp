---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: ''
localeTitle: Facilita la navegación por el lector de pantalla con el pie de página
---

## Description
<section id="description"> Al igual que el <code>header</code> y la <code>nav</code> , el elemento de <code>footer</code> tiene una característica de hito incorporada que permite que los dispositivos de asistencia naveguen rápidamente hacia él. Se utiliza principalmente para contener información de derechos de autor o enlaces a documentos relacionados que generalmente se encuentran en la parte inferior de una página. </section>

## Instructions
<section id="instructions"> La página de entrenamiento de Camper Cat está progresando bien. Cambie el <code>div</code> que usó para ajustar su información de copyright en la parte inferior de la página a un elemento de <code>footer</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una etiqueta de <code>footer</code> .
    testString: 'assert($("footer").length == 1, "Your code should have one <code>footer</code> tag.");'
  - text: Su código no debe tener ninguna etiqueta <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Su código debe tener una etiqueta de <code>footer</code> apertura y cierre.
    testString: 'assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g), "Your code should have an opening and closing <code>footer</code> tag.");'

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


  <div>&copy; 2018 Camper Cat</div>


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
