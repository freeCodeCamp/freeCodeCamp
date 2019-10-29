---
id: bad87fee1348bd9aedf08823
title: Add a Negative Margin to an Element
challengeType: 0
videoUrl: ''
localeTitle: Adicione uma margem negativa a um elemento
---

## Descrição
<section id="description"> A propriedade <code>margin</code> de um elemento controla a quantidade de espaço entre a borda(<code>border</code>) do elemento e os elementos adjacentes. Se você definir a propriedade <code>margin</code> de um elemento como um valor negativo, o elemento ficará maior. </section>

## Instruções
<section id="instructions"> Tente definir <code>margin</code> para um valor negativo como o da caixa vermelha. Altere <code>margin</code> da caixa azul para <code>-15px</code>, para preencher toda a largura horizontal da caixa amarela em torno dela. </section>

## Testes
<section id='tests'>

```yml
tests:
  - text: Sua classe <code>blue-box</code> deve fornecer elementos de <code>-15px</code> de <code>margin</code> .
    testString: 'assert($(".blue-box").css("margin-top") === "-15px", "Your <code>blue-box</code> class should give elements <code>-15px</code> of <code>margin</code>.");'

```

</section>

## Desafio
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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>

```

</div>



</section>

## Solução
<section id='solution'>

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
    margin: -15px;
  }

  .blue-box {
    background-color: blue;
    color: #fff;
    padding: 20px;
    margin: 20px;
    margin-top: -15px;
  }
</style>

<div class="box yellow-box">
  <h5 class="box red-box">padding</h5>
  <h5 class="box blue-box">padding</h5>
</div>
```
</section>
