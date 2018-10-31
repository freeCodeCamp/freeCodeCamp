---
id: 5900f3831000cf542c50fe96
challengeType: 5
title: 'Problem 23: Non-abundant sums'
videoUrl: ''
localeTitle: 'Problema 23: Soma não abundante'
---

## Description
<section id="description"> Um número perfeito é um número para o qual a soma de seus divisores apropriados é exatamente igual ao número. Por exemplo, a soma dos divisores apropriados de 28 seria 1 + 2 + 4 + 7 + 14 = 28, o que significa que 28 é um número perfeito. Um número <var>n</var> é chamado de deficiente se a soma de seus divisores próprios for menor que <var>n</var> e for chamada abundante se essa soma exceder <var>n</var> . Como 12 é o menor número abundante, 1 + 2 + 3 + 4 + 6 = 16, o menor número que pode ser escrito como a soma de dois números abundantes é 24. Por análise matemática, pode ser mostrado que todos os inteiros maiores que 28123 pode ser escrito como a soma de dois números abundantes. No entanto, esse limite superior não pode ser reduzido por análise, embora se saiba que o maior número que não pode ser expresso como a soma de dois números abundantes é menor que esse limite. Encontre a soma de todos os inteiros positivos &lt;= <var>n</var> que não podem ser escritos como a soma de dois números abundantes. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumOfNonAbundantNumbers(10000)</code> deve retornar 3731004.
    testString: 'assert(sumOfNonAbundantNumbers(10000) === 3731004, "<code>sumOfNonAbundantNumbers(10000)</code> should return 3731004.");'
  - text: <code>sumOfNonAbundantNumbers(15000)</code> deve retornar 4039939.
    testString: 'assert(sumOfNonAbundantNumbers(15000) === 4039939, "<code>sumOfNonAbundantNumbers(15000)</code> should return 4039939.");'
  - text: <code>sumOfNonAbundantNumbers(20000)</code> deve retornar 4159710.
    testString: 'assert(sumOfNonAbundantNumbers(20000) === 4159710, "<code>sumOfNonAbundantNumbers(20000)</code> should return 4159710.");'
  - text: <code>sumOfNonAbundantNumbers(28123)</code> deve retornar 4179871.
    testString: 'assert(sumOfNonAbundantNumbers(28123) === 4179871, "<code>sumOfNonAbundantNumbers(28123)</code> should return 4179871.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumOfNonAbundantNumbers(n) {
  // Good luck!
  return n;
}

sumOfNonAbundantNumbers(28123);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
