---
id: 587d7791367417b2b2512ab4
title: Adjust the Width of an Element Using the width Property
challengeType: 0
videoUrl: ''
localeTitle: Ajustar el ancho de un elemento usando la propiedad width
---

## Description
<section id="description"> Puede especificar el ancho de un elemento utilizando la propiedad <code>width</code> en CSS. Los valores se pueden dar en unidades de longitud relativa (como em), unidades de longitud absoluta (como px) o como un porcentaje de su elemento principal que contiene. Aquí hay un ejemplo que cambia el ancho de una imagen a 220px: <blockquote> img { <br> ancho: 220px; <br> } </blockquote></section>

## Instructions
<section id="instructions"> Agregue una propiedad de <code>width</code> a toda la tarjeta y establézcala en un valor absoluto de 245px. Usa la clase <code>fullCard</code> para seleccionar el elemento. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe cambiar la propiedad de <code>width</code> de la tarjeta a 245 píxeles usando el selector de clase <code>fullCard</code> .
    testString: 'assert(code.match(/.fullCard\s*{[\s\S][^}]*\n*^\s*width\s*:\s*245px\s*;/gm), "Your code should change the <code>width</code> property of the card to 245 pixels by using the <code>fullCard</code> class selector.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
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
