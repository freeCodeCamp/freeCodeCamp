---
id: 587d78a9367417b2b2512ae8
title: Descubre como funcionan las curvas de Bezier
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

El último desafío introdujo la propiedad `animation-timing-function` y algunas palabras clave que cambian la velocidad de una animación a lo largo de su duración. CSS ofrece una opción distinta a las palabras clave que proporciona un control aún más fino sobre cómo se desarrolla la animación, a través del uso de curvas Bezier.

En las animaciones CSS, las curvas Bezier se utilizan con la función `cubic-bezier`. La forma de la curva representa cómo se desarrolla la animación. La curva vive en un sistema de coordenadas de 1 a 1. El eje X de este sistema de coordenadas es la duración de la animación (piénsa en una escala de tiempo), y el eje Y es el cambio en la animación.

La función `cubic-bezier` consta de cuatro puntos principales que se encuentran en esta cuadrícula de 1 por 1: `p0`, `p1`, `p2` y `p3`. `p0` y `p3` están configurados para ti: son los puntos inicial y final que siempre se encuentran respectivamente en el origen (0, 0) y (1, 1). Establece los valores x e y para los otros dos puntos, y donde los coloca en la cuadrícula determina la forma de la curva para la animación que debe seguir. Esto se hace en CSS declarando los valores x e y de los puntos "anchor" `p1` y `p2` de la siguiente forma:`(x1, y1, x2, y2)`. Juntando todo, aquí hay un ejemplo de una curva de Bezier en codigo CSS:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

En el ejemplo anterior, los valores x e y son equivalentes para cada punto (x1 = 0.25 = y1 y x2 = 0.75 = y2), que si recuerdas la clase de geometría, da como resultado una línea que se extiende desde el origen hasta el punto (1, 1). Esta animación es un cambio lineal de un elemento durante la duración de una animación, y es lo mismo que usar la palabra clave `linear`. En otras palabras, cambia a una velocidad constante.

# --instructions--

Para el elemento con el id de `ball1`, cambia el valor de la propiedad `animation-timing-function` de `linear` a su valor de función `cubic-bezier` equivalente. Utiliza los valores de puntos dados en el ejemplo anterior.

# --hints--

El valor de la propiedad `animation-timing-function` para el elemento con el id `ball1` debe ser la función lineal `cubic-bezier` equivalente.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

El valor de la propiedad `animation-timing-function` para el elemento con el id `ball2` no debe cambiar.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

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

# --solutions--

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
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
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
