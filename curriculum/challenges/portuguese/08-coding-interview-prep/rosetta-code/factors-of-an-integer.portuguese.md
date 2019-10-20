---
title: Factors of an integer
id: 597f1e7fbc206f0e9ba95dc4
challengeType: 5
videoUrl: ''
localeTitle: Fatores de um inteiro
---

## Description
<section id="description"><p> Escreva uma função que retorne os fatores de um inteiro positivo. </p><p> Esses fatores são os inteiros positivos pelos quais o número que está sendo fatorado pode ser dividido para produzir um resultado inteiro positivo. </p> /// </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>factors</code> é uma função.
    testString: 'assert(typeof factors === "function", "<code>factors</code> is a function.");'
  - text: '<code>factors(45)</code> devem retornar <code>[1,3,5,9,15,45]</code> .'
    testString: 'assert.deepEqual(factors(45), ans[0], "<code>factors(45)</code> should return <code>[1,3,5,9,15,45]</code>.");'
  - text: '<code>factors(53)</code> devem retornar <code>[1,53]</code> .'
    testString: 'assert.deepEqual(factors(53), ans[1], "<code>factors(53)</code> should return <code>[1,53]</code>.");'
  - text: '<code>factors(64)</code> devem retornar <code>[1,2,4,8,16,32,64]</code> .'
    testString: 'assert.deepEqual(factors(64), ans[2], "<code>factors(64)</code> should return <code>[1,2,4,8,16,32,64]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function factors (num) {
  // Good luck!
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
