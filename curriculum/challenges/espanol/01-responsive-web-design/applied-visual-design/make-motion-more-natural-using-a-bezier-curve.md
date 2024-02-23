---
id: 587d78a9367417b2b2512aea
title: Haz que el movimiento sea más natural usando una curva de Bezier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

Este desafío anima un elemento para replicar el movimiento de una pelota que se hace rebotes. Los desafíos anteriores cubrirán las curvas cúbicas de Bezier `linear` y `ease-out`, sin embargo, ninguna representa el movimiento de rebotes con precisión. Necesitas personalizar una curva de Bezier para esto.

La función `animation-timing-function` se realiza automáticamente en cada fotograma clave (keyframe) cuando el `animation-iteration-count` se establece en infinito. Dado que hay una regla de fotogramas clave establecida en el medio de la duración de la animación (en `50%`, da como resultado dos progresiones de animación idénticas en el movimiento hacia arriba y hacia abajo de la pelota.

La siguiente curva cúbica de Bezier simula el movimiento de rebotes:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Observa que el valor de y2 es mayor que 1. Aunque la curva cúbica de Bezier se mapea en un sistema de coordenadas 1 por 1, y solo puede aceptar valores x de 0 a 1, el valor y se puede establecer en números mayores que uno. Esto da como resultado un movimiento de rebote que es ideal para simular la pelota rebotando.

# --instructions--

Cambia el valor de la función `animation-timing-function` del elemento con el id de `green` a una función `cubic-bezier` con valores x1, y1, x2, y2 establecidos respectivamente en 0.311, 0.441, 0.444, 1.649.

# --hints--

El valor de la propiedad `animation-timing-function` para el elemento con el id `green` debe ser una función `cubic-bezier` con valores x1, y1, x2, y2 como se especifica.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
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
