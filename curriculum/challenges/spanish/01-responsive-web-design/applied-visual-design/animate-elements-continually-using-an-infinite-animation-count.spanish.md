---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: Animar elementos continuamente utilizando un recuento de animaciones infinitas
---

## Description
<section id="description"> Los desafíos anteriores cubrían cómo usar algunas de las propiedades de animación y la regla <code>@keyframes</code> . Otra propiedad de la <code>animation-iteration-count</code> es la <code>animation-iteration-count</code> , que le permite controlar cuántas veces le gustaría recorrer la animación. Aquí hay un ejemplo: <code>animation-iteration-count: 3;</code> En este caso, la animación se detendrá después de ejecutarse 3 veces, pero es posible hacer que la animación se ejecute continuamente estableciendo ese valor en infinito. </section>

## Instructions
<section id="instructions"> Para mantener la bola rebotando a la derecha en un bucle continuo, cambie la propiedad de <code>animation-iteration-count</code> a infinito. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La propiedad <code>animation-iteration-count</code> debe tener un valor infinito.
    testString: 'assert($("#ball").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property should have a value of infinite.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
