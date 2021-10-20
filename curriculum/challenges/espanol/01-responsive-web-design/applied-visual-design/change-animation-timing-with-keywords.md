---
id: 587d78a8367417b2b2512ae7
title: Cambia la duración de las animaciones con palabras clave
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

En las animaciones CSS, la propiedad `animation-timing-function` controla qué tan rápido un elemento animado cambia sobre la duración total de la animación. Si la animación es un carro moviéndose de un punto A a un punto B en un tiempo establecido (tu `animation-duration`), la `animation-timing-function` dicta cómo el carro acelera y desacelera durante el transcurso en marcha.

Existe un número de palabras clave predefinidas disponibles para las opciones populares. Por ejemplo, el valor por defecto es `ease`, que empieza despacio, acelera en el medio y luego reduce la velocidad de nuevo al final. Otras opciones incluye `ease-out`, que es rápida al inicio y luego reduce la velocidad, `ease-in`, que es lenta al inicio y luego acelera al final, o `linear`, que aplica una velocidad constante a lo largo de la animación.

# --instructions--

Para los elementos con id `ball1` y `ball2`, agrega una propiedad `animation-timing-function` a cada uno y asigna `linear` a `#ball1` y `ease-out` a `#ball2`. Nota la diferencia entre cómo los elementos se mueven durante la animación pero terminan juntos, dado que comparten la misma `animation-duration` de 2 segundos.

# --hints--

El valor de la propiedad `animation-timing-function` para el elemento con el id `ball1` debe ser `linear`.

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

El valor de la propiedad `animation-timing-function` para el elemento con el id `ball2` debe ser `ease-out`.

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

  .balls {
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
    left:27%;

  }
  #ball2 {
    left:56%;

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
  .balls {
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
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
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
