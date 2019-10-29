---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: ''
localeTitle: Use a propriedade flex-grow para expandir itens
---

## Description
<section id="description"> O oposto de <code>flex-shrink</code> é a propriedade <code>flex-grow</code> . Lembre-se de que <code>flex-shrink</code> controla o tamanho dos itens quando o contêiner encolhe. A propriedade <code>flex-grow</code> controla o tamanho dos itens quando o contêiner pai se expande.
Usando um exemplo semelhante do último desafio, se um item tiver um valor de <code>flex-grow</code> igual a 1 e o outro tiver um valor de <code>flex-grow</code> igual a 3, aquele com o valor de 3 crescerá três vezes mais que o outro. </section>

## Instructions
<section id="instructions"> Adicione a propriedade CSS <code>flex-grow</code> a ambos <code>#box-1</code> e <code>#box-2</code> . Dê a <code>#box-1</code> um valor de 1 e a <code>#box-2</code> um valor de 2. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-1</code> deve ter a propriedade <code>flex-grow</code> definida como um valor de 1.'
    testString: 'assert($("#box-1").css("flex-grow") == "1", "The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of 1.");'
  - text: 'O elemento <code>#box-2</code> deve ter a propriedade <code>flex-grow</code> definida como um valor de 2.'
    testString: 'assert($("#box-2").css("flex-grow") == "2", "The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of 2.");'

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
    height: 200px;

  }

  #box-2 {
    background-color: orangered;
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
