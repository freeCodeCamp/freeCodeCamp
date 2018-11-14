---
id: bad87fee1348bd9aedf08824
title: Add Different Padding to Each Side of an Element
challengeType: 0
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/add-different-padding-to-each-side-of-an-element'
videoUrl: ''
localeTitle: Añadir diferente relleno a cada lado de un elemento
---

## Descripción
<section id="description"> A veces querrá personalizar un elemento para que tenga diferentes cantidades de <code>padding</code> en cada uno de sus lados. CSS le permite controlar el <code>padding</code> de los cuatro lados individuales de un elemento con las propiedades <code>padding-top</code> , <code>padding-right</code> , <code>padding-bottom</code> y <code>padding-left</code> . </section>

## Instrucciones
<section id="instructions"> Dale a la caja azul un <code>padding</code> de <code>40px</code> en su lado superior e izquierdo, pero solo <code>20px</code> en su lado inferior y derecho. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>blue-box</code> debe dar a la parte superior de los elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of the elements <code>40px</code> of <code>padding</code>.");'
  - text: Su clase de <code>blue-box</code> debe otorgar el derecho de los elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of the elements <code>20px</code> of <code>padding</code>.");'
  - text: Su clase de <code>blue-box</code> debe dar al fondo de los elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of the elements <code>20px</code> of <code>padding</code>.");'
  - text: Su clase de <code>blue-box</code> debe dar a la izquierda de los elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of the elements <code>40px</code> of <code>padding</code>.");'

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
    padding-top: 40px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 40px;
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
