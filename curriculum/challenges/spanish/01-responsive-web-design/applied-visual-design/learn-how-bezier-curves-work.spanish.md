---
id: 587d78a9367417b2b2512ae8
title: Learn How Bezier Curves Work
challengeType: 0
videoUrl: ''
localeTitle: Aprende cómo funcionan las curvas Bezier
---

## Description
<section id="description"> El último desafío presentó la propiedad de la <code>animation-timing-function</code> y algunas palabras clave que cambian la velocidad de una animación a lo largo de su duración. CSS ofrece una opción distinta de las palabras clave que proporciona un control aún más preciso sobre cómo se desarrolla la animación, mediante el uso de curvas de Bezier. En las animaciones CSS, las curvas de Bezier se utilizan con la función <code>cubic-bezier</code> . La forma de la curva representa cómo se desarrolla la animación. La curva vive en un sistema de coordenadas 1 por 1. El eje X de este sistema de coordenadas es la duración de la animación (piense en ello como una escala de tiempo), y el eje Y es el cambio en la animación. La función <code>cubic-bezier</code> consta de cuatro puntos principales que se encuentran en esta cuadrícula de 1 por 1: <code>p0</code> , <code>p1</code> , <code>p2</code> y <code>p3</code> . <code>p0</code> y <code>p3</code> están configurados para usted: son los puntos de inicio y final que siempre están ubicados respectivamente en el origen (0, 0) y (1, 1). Establece los valores de x e y para los otros dos puntos, y donde los coloque en la cuadrícula dicta la forma de la curva para que siga la animación. Esto se hace en CSS declarando los valores x e y de los puntos de &quot;anclaje&quot; <code>p1</code> y <code>p2</code> en la forma: <code>(x1, y1, x2, y2)</code> . Reuniéndolo todo, aquí hay un ejemplo de una curva Bezier en código CSS: <code>animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);</code> En el ejemplo anterior, los valores de x e y son equivalentes para cada punto (x1 = 0.25 = y1 y x2 = 0.75 = y2), que si recuerda de la clase de geometría, da como resultado una línea que se extiende desde el origen hasta el punto (1 , 1). Esta animación es un cambio lineal de un elemento durante la duración de una animación, y es lo mismo que usar la palabra clave <code>linear</code> . En otras palabras, cambia a una velocidad constante. </section>

## Instructions
<section id="instructions"> Para el elemento con el id de <code>ball1</code> , cambie el valor de la propiedad de <code>animation-timing-function</code> de <code>linear</code> a su valor equivalente <code>cubic-bezier</code> función <code>cubic-bezier</code> . Utilice los valores de puntos dados en el ejemplo anterior. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El valor de la propiedad de <code>animation-timing-function</code> para el elemento con id <code>ball1</code> debería ser la función lineal-equivalente de cubic-bezier.
    testString: 'assert($("#ball1").css("animation-timing-function") == "cubic-bezier(0.25, 0.25, 0.75, 0.75)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be the linear-equivalent cubic-bezier function.");'
  - text: El valor de la propiedad de <code>animation-timing-function</code> para el elemento con el id <code>ball2</code> no debe cambiar.
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

@keyframes bounce {
  0% {
    top: 0px;
  }
  100% {
    top: 249px;
  }
}

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
