---
id: 587d78ad367417b2b2512afb
title: Use the flex-shrink Property to Shrink Items
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade flex-shrink para reduzir os itens
---

## Description
<section id="description"> Até agora, todas as propriedades nos desafios se aplicam ao contêiner flex (pai dos itens flex). No entanto, existem várias propriedades úteis para os itens flex.
A primeira é a propriedade <code>flex-shrink</code> . Quando usado, permite que um item encolha se o contêiner flexível for muito pequeno. Os itens diminuem quando a largura do contêiner pai é menor que as larguras combinadas de todos os itens flexíveis dentro dele.
A propriedade <code>flex-shrink</code> recebe números como valores. Quanto maior o número, mais ele será reduzido em comparação com os outros itens no contêiner. Por exemplo, se um item tiver um valor <code>flex-shrink</code> de 1 e o outro tiver um valor <code>flex-shrink</code> de 3, aquele com o valor de 3 diminuirá três vezes mais do que o outro. </section>

## Instructions
<section id="instructions"> Adicione a propriedade CSS <code>flex-shrink</code> a ambos <code>#box-1</code> e <code>#box-2</code> . Dê a <code>#box-1</code> um valor de 1 e a <code>#box-2</code> um valor de 2. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-1</code> deve ter a propriedade <code>flex-shrink</code> definida com um valor de 1.'
    testString: 'assert($("#box-1").css("flex-shrink") == "1", "The <code>#box-1</code> element should have the <code>flex-shrink</code> property set to a value of 1.");'
  - text: 'O elemento <code>#box-2</code> deve ter a propriedade <code>flex-shrink</code> definida com um valor de 2.'
    testString: 'assert($("#box-2").css("flex-shrink") == "2", "The <code>#box-2</code> element should have the <code>flex-shrink</code> property set to a value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 100%;
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
    width: 100%;
    height: 200px;

  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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
