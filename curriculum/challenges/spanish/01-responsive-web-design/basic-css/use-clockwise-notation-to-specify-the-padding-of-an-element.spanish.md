---
id: bad87fee1348bd9aedf08826
title: Use Clockwise Notation to Specify the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: Use la notación de las agujas del reloj para especificar el relleno de un elemento
---

## Descripción
<section id="description"> En lugar de especificar las propiedades <code>padding-top</code> , <code>padding-right</code> , <code>padding-bottom</code> y <code>padding-left</code> individualmente, puede especificarlas todas en una línea, como esta: <code>padding: 10px 20px 10px 20px;</code> Estos cuatro valores funcionan como un reloj: arriba, derecha, abajo, izquierda, y producirán exactamente el mismo resultado que utilizando las instrucciones de relleno específicas para cada lado. </section>

## Instrucciones
<section id="instructions"> Use la notación de las agujas del reloj para darle a la clase &quot;.blue-box&quot; un <code>padding</code> de <code>40px</code> en su lado superior e izquierdo, pero solo <code>20px</code> en su lado inferior y derecho. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>blue-box</code> debe dar a la parte superior de los elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "40px", "Your <code>blue-box</code> class should give the top of elements <code>40px</code> of <code>padding</code>.");'
  - text: Su clase de <code>blue-box</code> debe otorgar el derecho de los elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-right") === "20px", "Your <code>blue-box</code> class should give the right of elements <code>20px</code> of <code>padding</code>.");'
  - text: Su clase de <code>blue-box</code> debe dar al fondo de los elementos <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-bottom") === "20px", "Your <code>blue-box</code> class should give the bottom of elements <code>20px</code> of <code>padding</code>.");'
  - text: Su clase de <code>blue-box</code> debe dar a la izquierda de los elementos <code>40px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-left") === "40px", "Your <code>blue-box</code> class should give the left of elements <code>40px</code> of <code>padding</code>.");'
  - text: Debe usar la notación en el sentido de las agujas del reloj para configurar el relleno de la clase de <code>blue-box</code> .
    testString: 'assert(!/padding-top|padding-right|padding-bottom|padding-left/.test(code), "You should use the clockwise notation to set the padding of <code>blue-box</code> class.");'

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
    padding: 20px 40px 20px 40px;
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
