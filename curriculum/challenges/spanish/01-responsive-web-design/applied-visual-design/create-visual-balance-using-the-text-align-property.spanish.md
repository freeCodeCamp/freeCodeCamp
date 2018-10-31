---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: ''
localeTitle: Crear balance visual usando la propiedad text-align
---

## Description
<section id="description"> Esta sección del currículo se enfoca en el Diseño Visual Aplicado. El primer grupo de desafíos se basa en el diseño de la tarjeta dada para mostrar una serie de principios básicos. El texto es a menudo una gran parte del contenido web. CSS tiene varias opciones para alinearlo con la propiedad <code>text-align</code> . <code>text-align: justify;</code> hace que todas las líneas de texto, excepto la última línea, se encuentren con los bordes izquierdo y derecho del cuadro de línea. <code>text-align: center;</code> Centra el texto <code>text-align: right;</code> alinea a la derecha el texto y alinea el texto <code>text-align: left;</code> (el valor predeterminado) alinea a la izquierda el texto. </section>

## Instructions
<section id="instructions"> Alinee el texto de la etiqueta <code>h4</code> , que dice &quot;Google&quot;, al centro. Luego justifique la etiqueta de párrafo que contiene información sobre cómo se fundó Google. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe usar la propiedad text-align en la etiqueta <code>h4</code> para establecerla en el centro.
    testString: 'assert($("h4").css("text-align") == "center", "Your code should use the text-align property on the <code>h4</code> tag to set it to center.");'
  - text: Su código debe usar la propiedad text-align en la etiqueta <code>p</code> para configurarlo para justificar.
    testString: 'assert($("p").css("text-align") == "justify", "Your code should use the text-align property on the <code>p</code> tag to set it to justify.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
