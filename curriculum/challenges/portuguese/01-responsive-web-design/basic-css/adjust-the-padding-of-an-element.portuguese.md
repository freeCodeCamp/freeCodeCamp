---
id: bad88fee1348bd9aedf08825
title: Adjust the Padding of an Element
challengeType: 0
videoUrl: ''
localeTitle: Ajustar o preenchimento de um elemento
---

## Description
<section id="description"> Agora vamos colocar nosso Cat Photo App por um tempo e aprender mais sobre o estilo HTML. Você já deve ter percebido isso, mas todos os elementos HTML são essencialmente pequenos retângulos. Três propriedades importantes controlam o espaço que envolve cada elemento HTML: <code>padding</code> , <code>margin</code> e <code>border</code> . O <code>padding</code> um elemento controla a quantidade de espaço entre o conteúdo do elemento e sua <code>border</code> . Aqui, podemos ver que a caixa azul e a caixa vermelha estão aninhadas dentro da caixa amarela. Observe que a caixa vermelha tem mais <code>padding</code> que a caixa azul. Quando você aumenta o <code>padding</code> da caixa azul, ela aumentará a distância ( <code>padding</code> ) entre o texto e a borda ao redor dele. </section>

## Instructions
<section id="instructions"> Altere o <code>padding</code> de sua caixa azul para corresponder à sua caixa vermelha. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua turma de <code>blue-box</code> deve fornecer elementos de <code>20px</code> de <code>padding</code> .
    testString: 'assert($(".blue-box").css("padding-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>padding</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .injected-text {
    margin-bottom: -25px;
    text-align: center;
  }

  .box {
    border-style: solid;
    border-color: black;
    border-width: 5px;
    text-align: center;
  }

  .yellow-box {
    background-color: yellow;
    padding: 10px;
  }

  .red-box {
    background-color: crimson;
    color: #fff;
    padding: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 10px;
  }
</style>
<h5 class="injected-text">margin</h5>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
