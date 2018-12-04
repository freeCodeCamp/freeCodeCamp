---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
guideUrl: 'https://spanish.freecodecamp.org/guide/certificates/adjust-the-padding-of-an-element'
videoUrl: ''
localeTitle: Ajustar el relleno de un elemento
---

## Descripción
<section id="description"> Ahora vamos a guardar nuestra aplicación Cat Photo por un tiempo y aprender más sobre el estilo de HTML. Es posible que ya hayas notado esto, pero todos los elementos HTML son esencialmente pequeños rectángulos. Tres propiedades importantes controlan el espacio que rodea a cada elemento HTML: <code>padding</code> , <code>margin</code> y <code>border</code> . El <code>padding</code> un elemento controla la cantidad de espacio entre el contenido del elemento y su <code>border</code> . Aquí, podemos ver que el cuadro azul y el cuadro rojo están anidados dentro del cuadro amarillo. Tenga en cuenta que el cuadro rojo tiene más <code>padding</code> que el cuadro azul. Cuando aumente el <code>padding</code> del cuadro azul, aumentará la distancia ( <code>padding</code> ) entre el texto y el borde que lo rodea. </section>

## Instrucciones
<section id="instructions"> Cambie el <code>padding</code> de su caja azul para que coincida con el de su caja roja. </section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: Su clase de <code>blue-box</code> debe dar elementos de <code>padding</code> <code>20px</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.");'

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
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
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
