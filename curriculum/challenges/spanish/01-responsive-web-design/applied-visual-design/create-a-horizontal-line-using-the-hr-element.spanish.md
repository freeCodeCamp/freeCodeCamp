---
id: 587d781b367417b2b2512abb
title: Create a Horizontal Line Using the hr Element
challengeType: 0
videoUrl: ''
localeTitle: Crear una línea horizontal utilizando el elemento hr
---

## Description
<section id="description"> Puede usar la etiqueta <code>hr</code> para agregar una línea horizontal a través del ancho de su elemento contenedor. Esto se puede usar para definir un cambio en el tema o para separar visualmente grupos de contenido. </section>

## Instructions
<section id="instructions"> Agregue una etiqueta de <code>hr</code> debajo de la <code>h4</code> que contiene el título de la tarjeta. <strong>Nota</strong> <br> En HTML, <code>hr</code> es una etiqueta de cierre automático, y por lo tanto no necesita una etiqueta de cierre separada. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar una etiqueta de <code>hr</code> a la marca.
    testString: 'assert($("hr").length == 1, "Your code should add an <code>hr</code> tag to the markup.");'
  - text: La etiqueta <code>hr</code> debe aparecer entre el título y el párrafo.
    testString: 'assert(code.match(/<\/h4>\s*?<hr(>|\s*?\/>)\s*?<p>/gi), "The <code>hr</code> tag should come between the title and the paragraph.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4><s>Google</s>Alphabet</h4>

      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
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
