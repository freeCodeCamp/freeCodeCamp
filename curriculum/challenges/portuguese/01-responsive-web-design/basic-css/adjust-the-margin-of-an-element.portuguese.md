---
id: bad87fee1348bd9aedf08822
title: Adjust the Margin of an Element
challengeType: 0
videoUrl: ''
localeTitle: Ajustar a margem de um elemento
---

## Description
<section id="description"> A <code>margin</code> um elemento controla a quantidade de espaço entre a <code>border</code> um elemento e os elementos adjacentes. Aqui, podemos ver que a caixa azul e a caixa vermelha estão aninhadas dentro da caixa amarela. Note que a caixa vermelha tem uma <code>margin</code> maior que a caixa azul, fazendo parecer menor. Quando você aumenta a <code>margin</code> da caixa azul, ela aumenta a distância entre a borda e os elementos adjacentes. </section>

## Instructions
<section id="instructions"> Altere a <code>margin</code> da caixa azul para corresponder à da caixa vermelha. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua classe de <code>blue-box</code> deve dar elementos de <code>20px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "20px", "Your <code>blue-box</code> class should give elements <code>20px</code> of <code>margin</code>.");'

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
    margin: 20px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 10px;
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
