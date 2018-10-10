---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: Animar elementos continuamente usando uma contagem de animação infinita
---

## Description
<section id="description"> Os desafios anteriores cobriam como usar algumas das propriedades de animação e a regra <code>@keyframes</code> . Outra propriedade de animação é a <code>animation-iteration-count</code> , que permite controlar quantas vezes você deseja percorrer a animação. Aqui está um exemplo: <code>animation-iteration-count: 3;</code> Nesse caso, a animação será interrompida após a execução 3 vezes, mas é possível fazer a animação ser executada continuamente definindo esse valor como infinito. </section>

## Instructions
<section id="instructions"> Para manter a bola quicando à direita em um loop contínuo, altere a propriedade <code>animation-iteration-count</code> para infinita. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A propriedade <code>animation-iteration-count</code> deve ter um valor infinito.
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
