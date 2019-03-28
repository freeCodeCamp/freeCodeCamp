---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: ''
localeTitle: Agregar un margen negativo a un elemento
---

## Descripción
<section id="description"> El margen <code>margin</code> es una propiedad que controla la cantidad de espacio entre el <code>border</code> de un elemento y los elementos alrededor. Si establece el <code>margin</code> en un valor negativo, el elemento aumentará de tamaño. </section>

## Instrucciones
<section id="instructions"> Intente establecer el <code>margin</code> en un valor negativo como el del cuadro rojo. Cambie el <code>margin</code> del cuadro azul a <code>-15px</code> , para que llene todo el ancho horizontal del cuadro amarillo que lo rodea. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Tu clase de <code>blue-box</code> debe dar elementos <code>-15px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "-15px", "Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.");'

```

</section>

## Desafio
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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>


## Solición

<section id='solution'>

```js
// solution required
```
</section>
