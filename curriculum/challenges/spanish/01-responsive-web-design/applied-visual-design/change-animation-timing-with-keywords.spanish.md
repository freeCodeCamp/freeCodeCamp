---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: ''
localeTitle: Cambiar el tiempo de animación con palabras clave
---

## Description
<section id="description"> En las animaciones CSS, la propiedad <code>animation-timing-function</code> controla la rapidez con la que un elemento animado cambia a lo largo de la duración de la animación. Si la animación es un automóvil que se mueve del punto A al punto B en un tiempo determinado (la <code>animation-duration</code> su <code>animation-duration</code> ), la <code>animation-timing-function</code> la <code>animation-timing-function</code> dice cómo el automóvil acelera y desacelera en el transcurso del viaje. Hay una serie de palabras clave predefinidas disponibles para las opciones populares. Por ejemplo, el valor predeterminado es la <code>ease</code> , que comienza lento, se acelera en el medio y luego se ralentiza nuevamente al final. Otras opciones incluyen la <code>ease-out</code> , que es rápida al principio y luego se ralentiza, la <code>ease-in</code> , que es lenta al principio, luego se acelera al final, o <code>linear</code> , que aplica una velocidad de animación constante en todo momento. </section>

## Instructions
<section id="instructions"> Para los elementos con el ID de <code>ball1</code> y <code>ball2</code> , añadir una <code>animation-timing-function</code> propiedad para cada uno, y establecer <code>#ball1</code> a <code>linear</code> , y <code>#ball2</code> a <code>ease-out</code> . Observe la diferencia entre cómo se mueven los elementos durante la animación pero terminan juntos, ya que comparten la misma <code>animation-duration</code> de <code>animation-duration</code> de 2 segundos. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: El valor de la propiedad de <code>animation-timing-function</code> para el elemento con el id <code>ball1</code> debe ser lineal.
    testString: 'assert($("#ball1").css("animation-timing-function") == "linear", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.");'
  - text: El valor de la propiedad de <code>animation-timing-function</code> para el elemento con el id <code>ball2</code> debe ser fácil de eliminar.
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
