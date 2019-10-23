---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: ''
localeTitle: Gere números inteiros aleatórios com JavaScript
---

## Description
<section id="description"> É ótimo podermos gerar números decimais aleatórios, mas é ainda mais útil se usá-lo para gerar números inteiros aleatórios. <ol><li> Use <code>Math.random()</code> para gerar um decimal aleatório. </li><li> Multiplique esse decimal aleatório por <code>20</code> . </li><li> Use outra função, <code>Math.floor()</code> para arredondar o número para o número inteiro mais próximo. </li></ol> Lembre-se que <code>Math.random()</code> nunca pode retornar um <code>1</code> e, porque estamos arredondando para baixo, é impossível realmente obter <code>20</code> . Essa técnica nos dará um número inteiro entre <code>0</code> e <code>19</code> . Colocando tudo junto, é assim que nosso código se parece: <code>Math.floor(Math.random() * 20);</code> Estamos chamando <code>Math.random()</code> , multiplicando o resultado por 20, passando o valor para a função <code>Math.floor()</code> para arredondar o valor para o número inteiro mais próximo. </section>

## Instructions
<section id="instructions"> Use essa técnica para gerar e retornar um número inteiro aleatório entre <code>0</code> e <code>9</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O resultado de <code>randomWholeNum</code> deve ser um número inteiro.
    testString: 'assert(typeof randomWholeNum() === "number" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})(), "The result of <code>randomWholeNum</code> should be a whole number.");'
  - text: Você deve estar usando <code>Math.random</code> para gerar um número aleatório.
    testString: 'assert(code.match(/Math.random/g).length > 1, "You should be using <code>Math.random</code> to generate a random number.");'
  - text: Você deve ter multiplicado o resultado de <code>Math.random</code> por 10 para torná-lo um número entre zero e nove.
    testString: 'assert(code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) || code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g), "You should have multiplied the result of <code>Math.random</code> by 10 to make it a number that is between zero and nine.");'
  - text: Você deve usar <code>Math.floor</code> para remover a parte decimal do número.
    testString: 'assert(code.match(/Math.floor/g).length > 1, "You should use <code>Math.floor</code> to remove the decimal part of the number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.random();
}

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
