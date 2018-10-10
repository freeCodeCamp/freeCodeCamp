---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: Animar elementos a tasas variables
---

## Description
<section id="description"> Hay una variedad de formas de alterar las tasas de animación de elementos animados similares. Hasta ahora, esto se ha logrado mediante la aplicación de una propiedad de <code>animation-iteration-count</code> y la configuración de reglas de <code>@keyframes</code> . Para ilustrar, la animación de la derecha consta de dos &quot;estrellas&quot; que disminuyen de tamaño y opacidad en la marca del 20% en la regla <code>@keyframes</code> , que crea la animación de <code>@keyframes</code> . Puede cambiar la regla <code>@keyframes</code> para uno de los elementos para que las estrellas parpadeen a diferentes velocidades. </section>

## Instructions
<section id="instructions"> Modifique la tasa de animación del elemento con el nombre de clase de <code>star-1</code> cambiando su regla <code>@keyframes</code> al 50%. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La regla <code>@keyframes</code> para la clase <code>star-1</code> debe ser del 50%.
    testString: 'assert(code.match(/twinkle-1\s*?{\s*?50%/g), "The <code>@keyframes</code> rule for the <code>star-1</code> class should be 50%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
