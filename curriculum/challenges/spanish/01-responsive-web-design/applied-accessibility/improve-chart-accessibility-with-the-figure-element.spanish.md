---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: ''
localeTitle: Mejora la accesibilidad de la carta con la figura Elemento.
---

## Description
<section id="description"> HTML5 introdujo el elemento <code>figure</code> , junto con la <code>figcaption</code> relacionada. Usados ​​juntos, estos elementos envuelven una representación visual (como una imagen, diagrama o gráfico) junto con su título. Esto proporciona un aumento de accesibilidad doble al agrupar semánticamente el contenido relacionado y al proporcionar una alternativa de texto que explica la <code>figure</code> . Para visualizaciones de datos como cuadros, la leyenda se puede usar para observar brevemente las tendencias o conclusiones para usuarios con discapacidades visuales. Otro desafío es cómo mover una versión de tabla de los datos del gráfico fuera de la pantalla (mediante CSS) para los usuarios de lectores de pantalla. Aquí hay un ejemplo: tenga en cuenta que la <code>figcaption</code> va dentro de las etiquetas de la <code>figure</code> y se puede combinar con otros elementos: <blockquote> &lt;figure&gt; <br> &lt;img src = &quot;roundhouseDestruction.jpeg&quot; alt = &quot;Foto de Camper Cat ejecutando una patada circular&quot;&gt; <br> &lt;br&gt; <br> &lt;figcaption&gt; <br> Master Camper Cat demuestra la forma correcta de una patada circular. <br> &lt;/figcaption&gt; <br> &lt;/figure&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat está trabajando duro para crear un gráfico de barras apiladas que muestre la cantidad de tiempo por semana para pasar el entrenamiento en sigilo, combate y armas. Ayúdelo a estructurar mejor su página cambiando la etiqueta <code>div</code> que usó por una etiqueta de <code>figure</code> , y la etiqueta <code>p</code> que rodea el título a una etiqueta de <code>figcaption</code>. </section>

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
    <h1>Entrenamiento</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Sigilo &amp; Agilidad</a></li>
        <li><a href="#combat">Combate</a></li>
        <li><a href="#weapons">Armas</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section>

      <!-- Agrega tu código debajo de esta línea -->
      <div>
        <!-- El gráfico de barras irá aquí -->
        <br>
        <p>Desglose por semana del tiempo destinado a entrenar sigilo, combate y armas.</p>
      </div>
      <!-- Agrega tu código por encima de esta línea -->

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
  </main>
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
