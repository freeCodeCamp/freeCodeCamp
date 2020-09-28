---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: Ajustar el margen de un elemento
---

## Descripción
<section id="description"> El <code>margin</code> un elemento controla la cantidad de espacio entre el <code>border</code> un elemento y los elementos circundantes. Aquí, podemos ver que el cuadro azul y el cuadro rojo están anidados dentro del cuadro amarillo. Tenga en cuenta que el cuadro rojo tiene un <code>margin</code> más <code>margin</code> que el cuadro azul, lo que hace que parezca más pequeño. Cuando aumente el <code>margin</code> del cuadro azul, aumentará la distancia entre su borde y los elementos circundantes. </section>

## Instrucciones
<section id="instructions"> Cambie el <code>margin</code> del cuadro azul para que coincida con el del cuadro rojo. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>blue-box</code> debe dar elementos de 20 <code>20px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>margin</code>.");'

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
    padding: 20px;
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
