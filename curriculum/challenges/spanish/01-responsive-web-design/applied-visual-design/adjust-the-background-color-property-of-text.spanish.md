---
id: 587d781b367417b2b2512abc
title: Adjust the background-color Property of Text
challengeType: 0
videoUrl: ''
localeTitle: Ajustar la propiedad de texto de color de fondo
---

## Description
<section id="description"> En lugar de ajustar el fondo general o el color del texto para que el primer plano sea fácil de leer, se puede agregar un <code>background-color</code> al elemento que contiene el texto que se desea enfatizar. Este desafío utiliza <code>rgba()</code> en lugar de códigos <code>hex</code> o el <code>rgb()</code> habitual. <blockquote> rgba significa: <br> r = red = rojo <br> g = green = verde <br> b = blue = azul <br> a = alfa / nivel de opacidad </blockquote> Los valores RGB pueden variar de 0 a 255. El valor alfa puede variar de 1, que es totalmente opaco o de color sólido, a 0, que es totalmente transparente o claro. <code>rgba()</code> es excelente para usar en este caso, ya que permite ajustar la opacidad. Esto significa que no tienes que cubrir completamente el fondo. Usará <code>background-color: rgba(45, 45, 45, 0.1)</code> para este desafío. Esto produce un color gris oscuro que es casi transparente dado el bajo valor de opacidad de 0.1. </section>

## Instructions
<section id="instructions"> Para hacer que el texto destaque más, ajuste el <code>background-color</code> del elemento <code>h4</code> al valor <code>rgba()</code> dado. También para el elemento <code>h4</code>, elimine la propiedad de <code>height</code> y agregue <code>padding</code> de 10px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Su código debe agregar una propiedad de <code>background-color</code> al conjunto de elementos <code>h4</code> en <code>rgba(45, 45, 45, 0.1)</code> .'
    testString: 'assert(code.match(/background-color:\s*?rgba\(\s*?45\s*?,\s*?45\s*?,\s*?45\s*?,\s*?0?\.1\s*?\)/gi), "Your code should add a <code>background-color</code> property to the <code>h4</code> element set to <code>rgba(45, 45, 45, 0.1)</code>.");'
  - text: Su código debe agregar una propiedad de <code>padding</code> al elemento <code>h4</code> y establecerlo en 10 píxeles.
    testString: 'assert($("h4").css("padding-top") == "10px" && $("h4").css("padding-right") == "10px" && $("h4").css("padding-bottom") == "10px" && $("h4").css("padding-left") == "10px", "Your code should add a <code>padding</code> property to the <code>h4</code> element and set it to 10 pixels.");'
  - text: La propiedad de <code>height</code> en el elemento <code>h4</code> debe ser eliminada.
    testString: 'assert(!($("h4").css("height") == "25px"), "The <code>height</code> property on the <code>h4</code> element should be removed.");'

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
