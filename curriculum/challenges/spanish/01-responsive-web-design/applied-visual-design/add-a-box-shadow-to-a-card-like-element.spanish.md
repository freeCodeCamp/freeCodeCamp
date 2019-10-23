---
id: 587d781b367417b2b2512abe
title: Add a box-shadow to a Card-like Element
challengeType: 0
videoUrl: ''
localeTitle: Agregar un cuadrado de sombra a un elemento tipo tarjeta
---

## Description
<section id="description"> La propiedad <code>box-shadow</code> aplica una o más sombras a un elemento. La propiedad <code>box-shadow</code> toma los valores de <code>offset-x</code> (cuánto empujar la sombra horizontalmente desde el elemento), <code>offset-y</code> (cuánto empujar la sombra verticalmente desde el elemento), <code>blur-radius</code> <code>spread-radius</code> y un valor de color, en ese orden. Los valores de <code>spread-radius</code> <code>blur-radius</code> <code>spread-radius</code> son opcionales. Este es un CSS de ejemplo para crear múltiples sombras con un poco de desenfoque,  en colores negros en su mayoría transparentes: <blockquote> box-shadow: 0 10px 20px rgba (0,0,0,0.19), 0 6px 6px rgba (0,0,0,0.23); </blockquote></section>

## Instructions
<section id="instructions"> El elemento ahora tiene un id de <code>thumbnail</code> . Con este selector, use los valores del CSS del ejemplo anterior para colocar una <code>box-shadow</code> en la tarjeta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe agregar una propiedad de <code>box-shadow</code> para la identificación de la <code>thumbnail</code> .
    testString: 'assert(code.match(/#thumbnail\s*?{\s*?box-shadow/g), "Your code should add a <code>box-shadow</code> property for the <code>thumbnail</code> id.");'
  - text: Deberías usar el CSS dado para el valor de la <code>box-shadow</code> la <code>box-shadow</code> .
    testString: 'assert(code.match(/box-shadow:\s*?0\s+?10px\s+?20px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.19\),\s*?0\s+?6px\s+?6px\s+?rgba\(\s*?0\s*?,\s*?0\s*?,\s*?0\s*?,\s*?0?\.23\)/gi), "You should use the given CSS for the <code>box-shadow</code> value.");'

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
