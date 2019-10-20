---
id: 587d781c367417b2b2512abf
title: Decrease the Opacity of an Element
challengeType: 0
videoUrl: ''
localeTitle: Disminuir la opacidad de un elemento
---

## Description
<section id="description"> La propiedad de <code>opacity</code> en CSS se usa para ajustar la opacidad, o por el contrario, la transparencia de un elemento. <blockquote> Un valor de 1 es opaco, que no es transparente en absoluto. <br> Un valor de 0.5 es medio transparente. <br> Un valor de 0 es completamente transparente. </blockquote> El valor dado se aplicará a todo el elemento, ya sea una imagen con alguna transparencia, o los colores de primer plano y de fondo para un bloque de texto. </section>

## Instructions
<section id="instructions"> Establezca la <code>opacity</code> de las etiquetas de anclaje en 0.7 utilizando la clase de <code>links</code> para seleccionarlas. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe establecer la propiedad de <code>opacity</code> a 0.7 en las etiquetas de anclaje seleccionando la clase de <code>links</code> .
    testString: 'assert.approximately(parseFloat($(".links").css("opacity")), 0.7, 0.1, "Your code should set the <code>opacity</code> property to 0.7 on the anchor tags by selecting the class of <code>links</code>.");'

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
