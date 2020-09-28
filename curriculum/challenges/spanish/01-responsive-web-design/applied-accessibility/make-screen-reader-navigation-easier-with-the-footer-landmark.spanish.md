---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: ''
localeTitle: Facilita la navegación por el lector de pantalla con el pie de página
---

## Description
<section id="description"> Al igual que el <code>header</code> y el <code>nav</code> , el elemento de <code>footer</code> tiene incorporado un punto de referencia que permite que los dispositivos de asistencia naveguen rápidamente hacia él. Se utiliza principalmente para contener información de derechos de autor o enlaces a documentos relacionados que generalmente se encuentran en la parte inferior de una página. </section>

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
    <h1>Entrenamiento</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Sigilo & Agilidad</a></li>
        <li><a href="#combat">Combate</a></li>
        <li><a href="#weapons">Armas</a></li>
      </ul>
    </nav>
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
      <article><h3>¿Amplitud o profundidad en entrenamiento de armas múltiples?</h3></article>
    </section>
  </main>


  <div>© 2018 Camper Cat</div>


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
