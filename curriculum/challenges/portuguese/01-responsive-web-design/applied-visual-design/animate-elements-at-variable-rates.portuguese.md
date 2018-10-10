---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: Elementos animados em taxas variáveis
---

## Description
<section id="description"> Há várias maneiras de alterar as taxas de animação de elementos animados de maneira semelhante. Até agora, isso foi alcançado aplicando uma propriedade de <code>animation-iteration-count</code> e definindo regras <code>@keyframes</code> . Para ilustrar, a animação à direita consiste em duas &quot;estrelas&quot;, cada uma diminuindo de tamanho e opacidade na marca de 20% na regra <code>@keyframes</code> , que cria a animação de brilho. Você pode alterar a regra <code>@keyframes</code> de um dos elementos para que as estrelas brilhem em taxas diferentes. </section>

## Instructions
<section id="instructions"> Altere a taxa de animação do elemento com o nome da classe de <code>star-1</code> alterando sua regra <code>@keyframes</code> para 50%. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A regra <code>@keyframes</code> para a classe <code>star-1</code> deve ser de 50%.
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
