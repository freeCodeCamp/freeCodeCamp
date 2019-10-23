---
title: Hofstadter Q sequence
id: 59637c4d89f6786115efd814
challengeType: 5
videoUrl: ''
localeTitle: Sequência de Hofstadter Q
---

## Description
<section id="description"><p> A <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence" title="wp: Hofstadter_sequence # Hofstadter_Q_sequence">sequência Hofstadter Q</a> é definida como: </p><p> $ Q (1) = Q (2) = 1, \\ Q (n) = Q \ big (nQ (n-1) \ grande) + Q \ big (nQ (n-2)), \ quad n&gt; 2. $ </p><p> Ele é definido como a <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="Seqüência de Fibonacci">sequência de Fibonacci</a> , mas enquanto o próximo termo na seqüência de Fibonacci é a soma dos dois termos anteriores, na seqüência Q os dois termos anteriores informam o quão longe voltar na seqüência Q para encontrar os dois números. para somar para fazer o próximo termo da sequência. </p> Tarefa: Implementar a equação de Seqüência de Hofstadter Q em JavaScript </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hofstadterQ</code> é uma função.
    testString: 'assert(typeof hofstadterQ === "function", "<code>hofstadterQ</code> is a function.");'
  - text: <code>hofstadterQ()</code> deve retornar <code>integer</code>
    testString: 'assert(Number.isInteger(hofstadterQ(1000)), "<code>hofstadterQ()</code> should return <code>integer</code>");'
  - text: <code>hofstadterQ(1000)</code> deve retornar <code>502</code>
    testString: 'assert.equal(hofstadterQ(testCase[0]), res[0], "<code>hofstadterQ(1000)</code> should return <code>502</code>");'
  - text: <code>hofstadterQ(1500)</code> deve retornar <code>755</code>
    testString: 'assert.equal(hofstadterQ(testCase[1]), res[1], "<code>hofstadterQ(1500)</code> should return <code>755</code>");'
  - text: <code>hofstadterQ(2000)</code> deve retornar <code>1005</code>
    testString: 'assert.equal(hofstadterQ(testCase[2]), res[2], "<code>hofstadterQ(2000)</code> should return <code>1005</code>");'
  - text: <code>hofstadterQ(2500)</code> deve retornar <code>1261</code>
    testString: 'assert.equal(hofstadterQ(testCase[3]), res[3], "<code>hofstadterQ(2500)</code> should return <code>1261</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hofstadterQ (n) {
  // Good luck!
  return n;
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
