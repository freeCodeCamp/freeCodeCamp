---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: ''
localeTitle: Haga que la navegación del lector de pantalla sea más fácil con el encabezado
---

## Description
<section id="description"> El siguiente elemento HTML5 que agrega un significado semántico y mejora la accesibilidad es la etiqueta del <code>header</code> . Se usa para envolver información introductoria o enlaces de navegación para su etiqueta principal, y funciona bien con el contenido que se repite en la parte superior de varias páginas. El <code>header</code> comparte la característica de hito incorporada que vio con <code>main</code> , permitiendo que las tecnologías de asistencia naveguen rápidamente hacia ese contenido. <strong>Nota</strong> <br> <code>header</code> está diseñado para su uso en la etiqueta del <code>body</code> de su documento HTML. Esto es diferente al elemento de <code>head</code> , que contiene el título de la página, metainformación, etc. </section>

## Instructions
<section id="instructions"> Camper Cat está escribiendo algunos artículos geniales sobre el entrenamiento de ninja y desea agregar una página para ellos en su sitio. Cambie la <code>div</code> superior que actualmente contiene el <code>h1</code> a una etiqueta de <code>header</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener una etiqueta de <code>header</code> .
    testString: 'assert($("header").length == 1, "Your code should have one <code>header</code> tag.");'
  - text: Sus etiquetas de <code>header</code> deben envolver alrededor de la <code>h1</code> .
    testString: 'assert($("header").children("h1").length == 1, "Your <code>header</code> tags should wrap around the <code>h1</code>.");'
  - text: Su código no debe tener ninguna etiqueta <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Asegúrese de que su elemento de <code>header</code> tenga una etiqueta de cierre.
    testString: 'assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length, "Make sure your <code>header</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>

  <div>
    <h1>Entrenamiento con Camper Cat</h1>
  </div>


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
