---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: Animar vários elementos a taxas variáveis
---

## Description
<section id="description"> No desafio anterior, você alterou as taxas de animação para dois elementos animados semelhantes, alterando suas regras <code>@keyframes</code> . Você pode atingir o mesmo objetivo manipulando a <code>animation-duration</code> da <code>animation-duration</code> de vários elementos. Na animação em execução no editor de código, há três &quot;estrelas&quot; no céu que piscam na mesma taxa em um loop contínuo. Para fazê-los brilhar em taxas diferentes, você pode definir a propriedade de <code>animation-duration</code> da <code>animation-duration</code> com valores diferentes para cada elemento. </section>

## Instructions
<section id="instructions"> Defina a <code>animation-duration</code> da <code>animation-duration</code> dos elementos com as classes <code>star-1</code> , <code>star-2</code> e <code>star-3</code> a 1s, 0.9s e 1.1s, respectivamente. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A propriedade de <code>animation-duration</code> para a estrela com classe <code>star-1</code> deve permanecer em 1s.
    testString: 'assert($(".star-1").css("animation-duration") == "1s", "The <code>animation-duration</code> property for the star with class <code>star-1</code> should remain at 1s.");'
  - text: 'A propriedade de <code>animation-duration</code> para a estrela com classe de <code>star-2</code> deve ser 0,9s.'
    testString: 'assert($(".star-2").css("animation-duration") == "0.9s", "The <code>animation-duration</code> property for the star with class <code>star-2</code> should be 0.9s.");'
  - text: A propriedade de <code>animation-duration</code> para a estrela com classe <code>star-3</code> deve ser 1.1s.
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
