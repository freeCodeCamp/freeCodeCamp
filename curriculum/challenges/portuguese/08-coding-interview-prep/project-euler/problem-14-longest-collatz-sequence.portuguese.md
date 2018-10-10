---
id: 5900f37a1000cf542c50fe8d
challengeType: 5
title: 'Problem 14: Longest Collatz sequence'
videoUrl: ''
localeTitle: 'Problema 14: Maior Sequência Collatz'
---

## Description
<section id="description"> A sequência iterativa a seguir é definida para o conjunto de inteiros positivos: <div style="padding-left: 4em;"> <var>n</var> → <var>n</var> / 2 ( <var>n</var> é par) </div><div style="padding-left: 4em;"> <var>n</var> → 3 <var>n</var> + 1 ( <var>n</var> é ímpar) </div> Usando a regra acima e começando com 13, geramos a seguinte sequência: <div style="text-align: center;"> 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 </div> Pode ser visto que esta sequência (começando em 13 e terminando em 1) contém 10 termos. Embora ainda não tenha sido provado (Problema de Collatz), acredita-se que todos os números iniciais terminem em 1. Qual número inicial, abaixo do <code>limit</code> dado, produz a cadeia mais longa? NOTA: Uma vez que a cadeia comece, os termos podem ultrapassar um milhão. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>longestCollatzSequence(14)</code> deve retornar 9.
    testString: 'assert.strictEqual(longestCollatzSequence(14), 9, "<code>longestCollatzSequence(14)</code> should return 9.");'
  - text: <code>longestCollatzSequence(5847)</code> deve retornar 3711.
    testString: 'assert.strictEqual(longestCollatzSequence(5847), 3711, "<code>longestCollatzSequence(5847)</code> should return 3711.");'
  - text: <code>longestCollatzSequence(46500)</code> deve retornar 35655.
    testString: 'assert.strictEqual(longestCollatzSequence(46500), 35655, "<code>longestCollatzSequence(46500)</code> should return 35655.");'
  - text: <code>longestCollatzSequence(54512)</code> deve retornar 52527.
    testString: 'assert.strictEqual(longestCollatzSequence(54512), 52527, "<code>longestCollatzSequence(54512)</code> should return 52527.");'
  - text: <code>longestCollatzSequence(1000000)</code> deve retornar 837799.
    testString: 'assert.strictEqual(longestCollatzSequence(1000000), 837799, "<code>longestCollatzSequence(1000000)</code> should return 837799.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function longestCollatzSequence(limit) {
  // Good luck!
  return true;
}

longestCollatzSequence(14);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
