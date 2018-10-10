---
title: Hofstadter Q sequence
id: 59637c4d89f6786115efd814
challengeType: 5
videoUrl: ''
localeTitle: Secuencia de Hofstadter Q
---

## Description
<section id="description"><p> La <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence" title="wp: Hofstadter_sequence # Hofstadter_Q_sequence">secuencia de Hofstadter Q</a> se define como: </p><p> $ Q (1) = Q (2) = 1, \\ Q (n) = Q \ big (nQ (n-1) \ big) + Q \ big (nQ (n-2)), \ quad n&gt; 2. $ </p><p> Se define como la <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="secuencia Fibonacci">secuencia de Fibonacci</a> , pero mientras que el siguiente término en la secuencia de Fibonacci es la suma de los dos términos anteriores, en la secuencia Q los dos términos anteriores le dicen a qué distancia retroceder en la secuencia Q para encontrar los dos números Para sumar hacer el siguiente término de la secuencia. </p> Tarea: Implementar la ecuación de secuencia Q de Hofstadter en JavaScript </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hofstadterQ</code> es una función.
    testString: 'assert(typeof hofstadterQ === "function", "<code>hofstadterQ</code> is a function.");'
  - text: <code>hofstadterQ()</code> debe devolver un <code>integer</code>
    testString: 'assert(Number.isInteger(hofstadterQ(1000)), "<code>hofstadterQ()</code> should return <code>integer</code>");'
  - text: <code>hofstadterQ(1000)</code> debe devolver <code>502</code>
    testString: 'assert.equal(hofstadterQ(testCase[0]), res[0], "<code>hofstadterQ(1000)</code> should return <code>502</code>");'
  - text: <code>hofstadterQ(1500)</code> debe devolver <code>755</code>
    testString: 'assert.equal(hofstadterQ(testCase[1]), res[1], "<code>hofstadterQ(1500)</code> should return <code>755</code>");'
  - text: <code>hofstadterQ(2000)</code> debe devolver <code>1005</code>
    testString: 'assert.equal(hofstadterQ(testCase[2]), res[2], "<code>hofstadterQ(2000)</code> should return <code>1005</code>");'
  - text: <code>hofstadterQ(2500)</code> debe devolver <code>1261</code>
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
