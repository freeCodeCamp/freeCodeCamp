---
id: 587d781a367417b2b2512ab8
title: Use the u Tag to Underline Text
localeTitle: Use la etiqueta u para subrayar el texto
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
Para subrayar el texto, puede utilizar la etiqueta <code>u</code> . Esto se usa a menudo para indicar que una sección del texto es importante, o algo para recordar. Con la etiqueta <code>u</code> , el navegador aplica el CSS de <code>text-decoration: underline;</code> al elemento. 
</section>

## Instructions
<section id='instructions'> 
Envuelva la etiqueta <code>u</code> únicamente alrededor del texto &quot;Estudiantes de doctorado&quot;. 
<strong>Nota</strong> <br> Intente evitar usar la etiqueta <code>u</code> cuando podría confundirse con un enlace. Las etiquetas de anclaje también tienen un formato subrayado predeterminado. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar una etiqueta <code>u</code> a la marca.
    testString: 'assert($("u").length === 1, "Your code should add a <code>u</code> tag to the markup.");'
  - text: La etiqueta <code>u</code> debe envolver el texto &quot;Estudiantes de doctorado&quot;.
    testString: 'assert($("u").text() === "Ph.D. students", "The <code>u</code> tag should wrap around the text "Ph.D. students".");'

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
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at <strong>Stanford University</strong>.</p>
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
