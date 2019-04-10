---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> A propriedade <code>order</code> é usada para informar ao CSS a ordem de como os itens flexíveis aparecem no contêiner flexível. Por padrão, os itens aparecerão na mesma ordem em que aparecem no HTML de origem. A propriedade aceita números como valores e números negativos podem ser usados. </section>

## Instructions
<section id="instructions"> Adicione a propriedade CSS <code>order</code> a ambos <code>#box-1</code> e <code>#box-2</code> . Dê a <code>#box-1</code> um valor de 2 e dê a <code>#box-2</code> um valor de 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O elemento <code>#box-1</code> deve ter a propriedade <code>order</code> configurada para um valor de 2.'
    testString: 'assert($("#box-1").css("order") == "2", "The <code>#box-1</code> element should have the <code>order</code> property set to a value of 2.");'
  - text: 'O elemento <code>#box-2</code> deve ter a propriedade <code>order</code> configurada para um valor de 1.'
    testString: 'assert($("#box-2").css("order") == "1", "The <code>#box-2</code> element should have the <code>order</code> property set to a value of 1.");'

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
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
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
