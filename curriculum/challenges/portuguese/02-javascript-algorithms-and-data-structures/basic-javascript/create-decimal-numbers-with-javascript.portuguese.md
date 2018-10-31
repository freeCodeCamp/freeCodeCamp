---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Crie números decimais com JavaScript
---

## Description
<section id="description"> Podemos também armazenar números decimais em variáveis. Números decimais às vezes são chamados de números de <dfn>ponto flutuante</dfn> ou <dfn>flutuantes</dfn> . <strong>Nota</strong> <br> Nem todos os números reais podem ser representados com precisão em <dfn>ponto flutuante</dfn> . Isso pode levar a erros de arredondamento. <a href="https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems" target="_blank">Detalhes aqui</a> . </section>

## Instructions
<section id="instructions"> Crie uma variável <code>myDecimal</code> e dê a ela um valor decimal com uma parte fracionária (por exemplo, <code>5.7</code> ). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myDecimal</code> deve ser um número.
    testString: 'assert(typeof myDecimal === "number", "<code>myDecimal</code> should be a number.");'
  - text: <code>myDecimal</code> deve ter um ponto decimal
    testString: 'assert(myDecimal % 1 != 0, "<code>myDecimal</code> should have a decimal point"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var ourDecimal = 5.7;

// Only change code below this line

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
