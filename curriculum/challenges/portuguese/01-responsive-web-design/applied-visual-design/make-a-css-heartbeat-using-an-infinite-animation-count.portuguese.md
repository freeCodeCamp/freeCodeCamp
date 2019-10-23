---
id: 587d78a8367417b2b2512ae4
title: Make a CSS Heartbeat using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: Faça um Heartbeat CSS usando uma Contagem de Animação Infinita
---

## Description
<section id="description"> Aqui está mais um exemplo de animação contínua com a propriedade <code>animation-iteration-count</code> que usa o coração que você projetou em um desafio anterior. A animação de um segundo de duração da pulsação consiste em duas partes animadas. Os elementos de <code>heart</code> (incluindo <code>:before</code> e <code>:after</code> peças) são animados para alterar o tamanho usando a propriedade <code>transform</code> , e o <code>div</code> fundo é animado para alterar sua cor usando a propriedade <code>background</code> . </section>

## Instructions
<section id="instructions"> Mantenha o coração batendo adicionando a propriedade <code>animation-iteration-count</code> para as classes <code>back</code> e <code>heart</code> e definindo o valor como infinito. O <code>heart:before</code> e <code>heart:after</code> seletores não precisarem de nenhuma propriedade de animação. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A propriedade <code>animation-iteration-count</code> da classe <code>heart</code> deve ter um valor infinito.
    testString: 'assert($(".heart").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property for the <code>heart</code> class should have a value of infinite.");'
  - text: A propriedade <code>animation-iteration-count</code> para a classe <code>back</code> deve ter um valor infinito.
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
