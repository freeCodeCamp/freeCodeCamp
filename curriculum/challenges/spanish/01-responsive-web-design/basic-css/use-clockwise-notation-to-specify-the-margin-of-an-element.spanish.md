---
id: bad87fee1348bd9afdf08726
title: Use Clockwise Notation to Specify the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: Usar la notación de las agujas del reloj para especificar el margen de un elemento
---

## Descripción
<section id="description"> Intentemos esto de nuevo, pero con <code>margin</code> esta vez. En lugar de especificar individualmente las propiedades <code>margin-top</code> , <code>margin-right</code> , <code>margin-bottom</code> y <code>margin-left</code> un elemento, puede especificarlas todas en una línea, como esta: <code>margin: 10px 20px 10px 20px;</code> Estos cuatro valores funcionan como un reloj: arriba, derecha, abajo, izquierda, y producirán exactamente el mismo resultado que utilizando las instrucciones de margen específicas para cada lado. </section>

## Instrucciones
<section id="instructions"> Use la <code>Clockwise Notation</code> para dar al elemento con la clase de <code>blue-box</code> un margen de <code>40px</code> en su lado superior e izquierdo, pero solo <code>20px</code> en su lado inferior y derecho. </section>

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
    padding: 20px 40px 20px 40px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    margin: 20px 40px 20px 40px;
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
