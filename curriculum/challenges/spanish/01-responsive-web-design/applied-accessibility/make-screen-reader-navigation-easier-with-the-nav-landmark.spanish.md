---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: ''
localeTitle: Facilita la navegación por el lector de pantalla con el navegador Landmark
---

## Description
<section id="description"> El elemento de <code>nav</code> es otro elemento de HTML5 con la función de marca incorporada para facilitar la navegación del lector de pantalla. Esta etiqueta está diseñada para envolver alrededor de los enlaces de navegación principales en su página. Si hay enlaces repetidos al sitio en la parte inferior de la página, no es necesario marcarlos también con una etiqueta de <code>nav</code> . Usar un <code>footer</code> (cubierto en el siguiente desafío) es suficiente. </section>

## Instructions
<section id="instructions"> Camper Cat incluyó enlaces de navegación en la parte superior de su página de entrenamiento, pero los envolvió en un <code>div</code> . Cambie el <code>div</code> a una etiqueta de <code>nav</code> para mejorar la accesibilidad en su página. </section>

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
        <h1>Entrenamiento con Camper Cat</h1>
    <div>
      <ul>
         <li><a href="#stealth">Sigilo &amp; Agilidad</a></li>
        <li><a href="#combat">Combate</a></li>
        <li><a href="#weapons">Armas</a></li>
      </ul>
    </div>

  </header>
  <main>
    <section id="stealth">
      <h2>Entrenamiento de Agilidad y Sigilo</h2>
      <article><h3>Escale el follaje rápidamente usando un enfoque de árbol de expansión mínimo</h3></article>
      <article><h3>Ningún entrenamiento está completo sin parkour.</h3></article>
    </section>
    <section id="combat">
      <h2>Entrenamiento de Combate</h2>
      <article><h3>Despacha enemigos múltiples con tácticas multiproceso</h3></article>
      <article><h3>Adiós mundo: 5 maneras probadas de noquear a un oponente</h3></article>
    </section>
    <section id="weapons">
      <h2>Entrenamiento de Armas</h2>
      <article><h3>Espadas: la mejor herramienta para dividir y conquistar literalmente</h3></article>
      <article><h3>¿Amplitud o profundidad primero en entrenamiento de armas múltiples?</h3></article>
    </section>
  </main>
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
