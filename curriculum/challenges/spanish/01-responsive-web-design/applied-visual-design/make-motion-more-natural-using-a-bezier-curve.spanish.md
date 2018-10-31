---
id: 587d78a9367417b2b2512aea
title: Make Motion More Natural Using a Bezier Curve
challengeType: 0
videoUrl: ''
localeTitle: Haz el movimiento más natural usando una curva Bezier
---

## Description
<section id="description"> Este desafío anima un elemento para replicar el movimiento de una bola que se hace malabarismo. Los desafíos anteriores cubrieron las curvas Bezier cúbicas <code>linear</code> y de <code>ease-out</code> desahogo, sin embargo, ninguno de ellos describe con precisión el movimiento de los malabares. Necesitas personalizar una curva Bezier para esto. La <code>animation-timing-function</code> automáticamente en cada fotograma clave cuando la cuenta <code>animation-iteration-count</code> se establece en infinito. Dado que hay una regla de fotogramas clave establecida en la mitad de la duración de la animación (al <code>50%</code> ), produce dos progresiones de animación idénticas en el movimiento ascendente y descendente de la bola. La siguiente curva de Bezier cúbica simula un movimiento de malabarismo: <code>cubic-bezier(0.3, 0.4, 0.5, 1.6);</code> Observe que el valor de y2 es mayor que 1. Aunque la curva de Bézier cúbica se asigna en un sistema de coordenadas 1 por 1, y solo puede aceptar valores de x de 1 a 1, el valor de y se puede configurar en números mayores que uno. Esto resulta en un movimiento de rebote que es ideal para simular la bola de malabarismo. </section>

## Instructions
<section id="instructions"> Cambie el valor de la <code>animation-timing-function</code> de <code>animation-timing-function</code> del elemento con el id de <code>green</code> a una función de <code>cubic-bezier</code> con x1, y1, x2, y2 valores establecidos respectivamente en 0.311, 0.441, 0.444, 1.649. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El valor de la propiedad de <code>animation-timing-function</code> para el elemento con el id <code>green</code> debe ser una función de <code>cubic-bezier</code> con los valores de x1, y1, x2, y2 según lo especificado.'
    testString: 'assert($("#green").css("animation-timing-function") == "cubic-bezier(0.311, 0.441, 0.444, 1.649)", "The value of the <code>animation-timing-function</code> property for the element with the id <code>green</code> should be a <code>cubic-bezier</code> function with x1, y1, x2, y2 values as specified.'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
