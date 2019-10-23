---
id: 587d78a9367417b2b2512ae9
title: Use a Bezier Curve to Move a Graphic
challengeType: 0
videoUrl: ''
localeTitle: Use una curva Bezier para mover un gráfico
---

## Description
<section id="description"> Un desafío anterior discutió la palabra clave de <code>ease-out</code> que describe un cambio de animación que se acelera primero y luego se ralentiza al final de la animación. A la derecha, se muestra la diferencia entre la palabra clave de <code>ease-out</code> (para el elemento azul) y <code>linear</code> palabra clave <code>linear</code> (para el elemento rojo). Se pueden lograr progresiones de animación similares a la palabra clave de <code>ease-out</code> de uso utilizando una función de curva Bezier cúbica personalizada. En general, el cambio de los puntos de anclaje <code>p1</code> y <code>p2</code> impulsa la creación de diferentes curvas Bezier, que controlan cómo avanza la animación a través del tiempo. Este es un ejemplo de una curva de Bezier que utiliza valores para imitar el estilo de <code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code> : <code>animation-timing-function: cubic-bezier(0, 0, 0.58, 1);</code> Recuerde que todas <code>cubic-bezier</code> funciones de <code>cubic-bezier</code> comienzan con <code>p0</code> en (0, 0) y terminan con <code>p3</code> en (1, 1). En este ejemplo, la curva se mueve más rápido a través del eje Y (comienza en 0, va a <code>p1</code> y el valor de 0, luego va a <code>p2</code> y el valor de 1) que se mueve a través del eje X (0 para comenzar, luego 0 para <code>p1</code> , hasta 0.58 para <code>p2</code> ). Como resultado, el cambio en el elemento animado progresa más rápido que el tiempo de la animación para ese segmento. Hacia el final de la curva, la relación entre el cambio en los valores de x e y se invierte: el valor de y se mueve de 1 a 1 (sin cambio), y los valores de x se mueven de 0.58 a 1, lo que hace que los cambios de animación progresen más lentamente en comparación La duración de la animación. </section>

## Instructions
<section id="instructions"> Para ver el efecto de esta curva de Bezier en acción, cambie la <code>animation-timing-function</code> de <code>animation-timing-function</code> del elemento con id de <code>red</code> a una función de <code>cubic-bezier</code> con x1, y1, x2, y2 valores establecidos respectivamente a 0, 0, 0.58, 1 Esto hará que ambos elementos progresen a través de la animación de manera similar. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El valor de la propiedad <code>animation-timing-function</code> del elemento con el id <code>red</code> debe ser una función de <code>cubic-bezier</code> con x1, y1, x2, y2 valores establecidos respectivamente en 0, 0, 0.58, 1.'
    testString: 'assert($("#red").css("animation-timing-function") == "cubic-bezier(0, 0, 0.58, 1)", "The value of the <code>animation-timing-function</code> property of the element with the id <code>red</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values set respectively to 0, 0, 0.58, 1 .");'
  - text: El elemento con el ID <code>red</code> ya no debería tener la propiedad de <code>animation-timing-function</code> lineal.
    testString: 'assert($("#red").css("animation-timing-function") !== "linear", "The element with the id <code>red</code> should no longer have the <code>animation-timing-function</code> property of linear.");'
  - text: El valor de la propiedad de <code>animation-timing-function</code> para el elemento con el id <code>blue</code> no debe cambiar.
    testString: 'assert($("#blue").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>blue</code> should not change.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls{
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 27%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
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
<div class="balls" id= "red"></div>
<div class="balls" id= "blue"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
