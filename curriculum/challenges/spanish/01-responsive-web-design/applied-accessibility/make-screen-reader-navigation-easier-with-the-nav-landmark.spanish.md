---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
localeTitle: Facilita la navegación por el lector de pantalla con el navegador Landmark
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El elemento de <code>nav</code> es otro elemento de HTML5 con la función de marca incorporada para facilitar la navegación del lector de pantalla. Esta etiqueta está diseñada para envolver alrededor de los enlaces de navegación principales en su página. 
Si hay enlaces repetidos al sitio en la parte inferior de la página, no es necesario marcar también aquellos con una etiqueta de <code>nav</code> . Usar un <code>footer</code> (cubierto en el siguiente desafío) es suficiente. 
</section>

## Instructions
<section id='instructions'> 
Camper Cat incluyó enlaces de navegación en la parte superior de su página de entrenamiento, pero los envolvió en un <code>div</code> . Cambie el <code>div</code> a una etiqueta de <code>nav</code> para mejorar la accesibilidad en su página. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una etiqueta de <code>nav</code> .
    testString: 'assert($("nav").length == 1, "Your code should have one <code>nav</code> tag.");'
  - text: Sus etiquetas de <code>nav</code> deben envolver alrededor de la <code>ul</code> y sus elementos de lista.
    testString: 'assert($("nav").children("ul").length == 1, "Your <code>nav</code> tags should wrap around the <code>ul</code> and its list items.");'
  - text: Su código no debe tener ninguna etiqueta <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Asegúrese de que su elemento de <code>nav</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/nav>/g) && code.match(/<\/nav>/g).length === code.match(/<nav>/g).length, "Make sure your <code>nav</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>

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
