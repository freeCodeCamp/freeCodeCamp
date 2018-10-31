---
id: 587d781c367417b2b2512ac0
title: Use the text-transform Property to Make Text Uppercase
challengeType: 0
videoUrl: ''
localeTitle: Utilice la propiedad de transformación de texto para hacer mayúsculas de texto
---

## Description
<section id="description"> La propiedad de <code>text-transform</code> en CSS se usa para cambiar la apariencia del texto. Es una forma conveniente de asegurarse de que el texto de una página web se muestre de forma coherente, sin tener que cambiar el contenido de texto de los elementos HTML reales. La siguiente tabla muestra cómo los diferentes valores de <code>text-transform</code> cambian el texto de ejemplo &quot;Transformarme&quot;. <table class="table table-striped"><thead><tr><th> Valor </th><th> Resultado </th></tr></thead><tbody><tr><td> <code>lowercase</code> </td> <td> &quot;transformame&quot; </td></tr><tr><td> <code>uppercase</code> </td> <td> &quot;Transfórmame&quot; </td></tr><tr><td> <code>capitalize</code> </td> <td> &quot;Transformame&quot; </td></tr><tr><td> <code>initial</code> </td> <td> Usa el valor por defecto </td></tr><tr><td> <code>inherit</code> </td> <td> Use el valor de <code>text-transform</code> del elemento padre </td></tr><tr><td> <code>none</code> </td> <td> <strong>Predeterminado:</strong> usar el texto original </td></tr></tbody></table></section>

## Instructions
<section id="instructions"> Transforme el texto del <code>h4</code> para que esté en mayúsculas utilizando la propiedad de <code>text-transform</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El texto <code>h4</code> debe estar en mayúsculas.
    testString: 'assert($("h4").css("text-transform") === "uppercase", "The <code>h4</code> text should be uppercase.");'
  - text: El texto original del h4 no debe ser cambiado.
    testString: 'assert(($("h4").text() !== $("h4").text().toUpperCase()), "The original text of the h4 should not be changed.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;
    background-color: rgba(45, 45, 45, 0.1);
    padding: 10px;
    font-size: 27px;

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
    opacity: 0.7;
  }
  #thumbnail {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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
<div class="fullCard" id="thumbnail">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
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
