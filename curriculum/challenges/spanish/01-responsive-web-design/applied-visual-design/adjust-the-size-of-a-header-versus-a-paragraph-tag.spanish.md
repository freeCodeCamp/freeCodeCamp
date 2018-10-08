---
id: 587d781b367417b2b2512abd
title: Adjust the Size of a Header Versus a Paragraph Tag
localeTitle: Ajustar el tamaño de un encabezado frente a una etiqueta de párrafo
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
El tamaño de fuente de las etiquetas de encabezado ( <code>h1</code> a <code>h6</code> ) generalmente debe ser mayor que el tamaño de fuente de las etiquetas de párrafo. Esto hace que sea más fácil para el usuario entender visualmente el diseño y el nivel de importancia de todo en la página. Utiliza la propiedad de <code>font-size</code> para ajustar el tamaño del texto en un elemento. 
</section>

## Instructions
<section id='instructions'> 
Para hacer que el encabezado sea significativamente más grande que el párrafo, cambie el <code>font-size</code> de <code>font-size</code> de la etiqueta <code>h4</code> a 27 píxeles. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar una propiedad de <code>font-size</code> al conjunto de elementos <code>h4</code> a 27 píxeles.
    testString: 'assert($("h4").css("font-size") == "27px", "Your code should add a <code>font-size</code> property to the <code>h4</code> element set to 27 pixels.");'

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
