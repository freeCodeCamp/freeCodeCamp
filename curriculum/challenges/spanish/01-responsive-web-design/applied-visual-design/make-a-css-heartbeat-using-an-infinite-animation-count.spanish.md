---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: Haz un Heartbeat CSS usando un conteo de animaciones infinitas
---

## Description
<section id="description"> Aquí hay otro ejemplo de animación continua con la propiedad de <code>animation-iteration-count</code> que usa el corazón que diseñó en un desafío anterior. La animación de un segundo de latido del corazón consta de dos piezas animadas. Los elementos del <code>heart</code> (que incluyen <code>:before</code> y <code>:after</code> piezas) se animan para cambiar el tamaño con la propiedad de <code>transform</code> , y la <code>div</code> fondo se anima para cambiar su color con la propiedad de <code>background</code> . </section>

## Instructions
<section id="instructions"> Mantenga el latido del corazón agregando la propiedad de <code>animation-iteration-count</code> tanto para la clase de <code>back</code> como para la clase del <code>heart</code> y establezca el valor en infinito. El <code>heart:before</code> y <code>heart:after</code> selectores <code>heart:after</code> no necesitan propiedades de animación. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La propiedad de <code>animation-iteration-count</code> para la clase de <code>heart</code> debe tener un valor infinito.
    testString: 'assert($(".heart").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>heart</code> class should have a value of infinite.");'
  - text: La propiedad <code>animation-iteration-count</code> para la clase <code>back</code> debe tener un valor infinito.
    testString: 'assert($(".back").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>back</code> class should have a value of infinite.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    animation-name: backdiv;
    animation-duration: 1s;

  }

  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;

  }
  .heart:after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart:before {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }

  @keyframes backdiv {
    50% {
      background: #ffe6f2;
    }
  }

  @keyframes beat {
    0% {
      transform: scale(1) rotate(-45deg);
    }
    50% {
      transform: scale(0.6) rotate(-45deg);
    }
  }

</style>
<div class="back"></div>
<div class="heart"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
