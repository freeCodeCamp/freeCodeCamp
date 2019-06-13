---
id: bad87fee1248bd9aedf08824
title: Add Different Margins to Each Side of an Element
challengeType: 0
videoUrl: ''
localeTitle: Añadir diferentes márgenes a cada lado de un elemento
---

## Descripción
<section id="description"> A veces querrá personalizar un elemento para que tenga un <code>margin</code> diferente en cada uno de sus lados. CSS le permite controlar el <code>margin</code> de los cuatro lados individuales de un elemento con las propiedades <code>margin-top</code> , <code>margin-right</code> , <code>margin-bottom</code> y <code>margin-left</code> . </section>

## Instrucciones
<section id="instructions"> Dé a la caja azul un <code>margin</code> de <code>40px</code> en su lado superior e izquierdo, pero solo <code>20px</code> en su lado inferior y derecho. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>blue-box</code> debe dar a la parte superior de los elementos <code>40px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>margin</code>.");'
  - text: Su clase de <code>blue-box</code> debe otorgar el derecho de los elementos 20 <code>20px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>margin</code>.");'
  - text: Su clase de <code>blue-box</code> debe dar a la parte inferior de los elementos 20 <code>20px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>margin</code>.");'
  - text: Su clase de <code>blue-box</code> debe dar a la izquierda de los elementos <code>40px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>margin</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin-top: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
