---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: Animar múltiples elementos a tasas variables
---

## Description
<section id="description"> En el desafío anterior, cambiaste las tasas de animación para dos elementos animados similares al modificar sus reglas de <code>@keyframes</code> . Puede lograr el mismo objetivo manipulando la <code>animation-duration</code> de la <code>animation-duration</code> de varios elementos. En la animación que se ejecuta en el editor de código, hay tres &quot;estrellas&quot; en el cielo que brillan al mismo ritmo en un bucle continuo. Para hacerlos brillar a diferentes velocidades, puede establecer la propiedad de <code>animation-duration</code> la <code>animation-duration</code> en diferentes valores para cada elemento. </section>

## Instructions
<section id="instructions"> Establezca la <code>animation-duration</code> de la <code>animation-duration</code> de los elementos con las clases <code>star-1</code> , <code>star-2</code> y <code>star-3</code> en 1s, 0.9s y 1.1s, respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La propiedad de <code>animation-duration</code> para la estrella con clase <code>star-1</code> debe permanecer en 1s.
    testString: 'assert($(".star-1").css("animation-duration") == "1s", "The <code>animation-duration</code> property for the star with class <code>star-1</code> should remain at 1s.");'
  - text: La propiedad de <code>animation-duration</code> para la estrella con clase <code>star-2</code> debe ser 0.9s.
    testString: 'assert($(".star-2").css("animation-duration") == "0.9s", "The <code>animation-duration</code> property for the star with class <code>star-2</code> should be 0.9s.");'
  - text: La propiedad de <code>animation-duration</code> para la estrella con clase <code>star-3</code> debe ser 1.1s.
    testString: 'assert($(".star-3").css("animation-duration") == "1.1s", "The <code>animation-duration</code> property for the star with class <code>star-3</code> should be 1.1s.");'

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
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
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
<div class="star-3 stars"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
