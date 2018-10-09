---
id: 587d781b367417b2b2512aba
title: Use the s Tag to Strikethrough Text
localeTitle: Use la etiqueta s para tachar el texto
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'>
Para tachar el texto, que es cuando una línea horizontal corta los caracteres, puede usar la etiqueta <code>s</code> . Muestra que una sección de texto ya no es válida. Con la etiqueta <code>s</code> , el navegador aplica el CSS de <code>text-decoration: line-through;</code> al elemento.
</section>

## Instructions
<section id='instructions'>
Envuelva la etiqueta <code>s</code> alrededor de &quot;Google&quot; dentro de la etiqueta <code>h4</code> y luego agregue la palabra Alfabeto a su lado, que no debería tener el formato tachado.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El código debería añadir una <code>s</code> etiqueta para el marcado.
    testString: 'assert($("s").length == 1, "Your code should add one <code>s</code> tag to the markup.");'
  - text: La etiqueta <code>s</code> debe envolver el texto de Google en la etiqueta <code>h4</code> . No debe contener la palabra Alfabeto.
    testString: 'assert($("s").text().match(/Google/gi) && !$("s").text().match(/Alphabet/gi), "A <code>s</code> tag should wrap around the Google text in the <code>h4</code> tag. It should not contain the word Alphabet.");'
  - text: 'Incluya la palabra Alfabeto en la etiqueta <code>h4</code> , sin tachar el formato.'
    testString: 'assert($("h4").html().match(/Alphabet/gi), "Include the word Alphabet in the <code>h4</code> tag, without strikethrough formatting.");'

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
      <h4>Google</h4>
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
