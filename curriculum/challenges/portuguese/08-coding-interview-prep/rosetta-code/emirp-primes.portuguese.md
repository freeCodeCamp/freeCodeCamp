---
title: Emirp primes
id: 599d0ba974141b0f508b37d5
challengeType: 5
videoUrl: ''
localeTitle: Bônus do Emirp
---

## Description
<section id="description"><p> Um emirp (primo soletrado para trás) são primos que quando invertidos (em sua representação decimal) são primos diferentes. </p><p> Escreva uma função que deve ser capaz de: Mostrar os primeiros <b>n</b> eprimes numbers.Show os números eprimes em um range.Show o número de eprimes em um range.Show o <b>n <sup>º</sup></b> número eprimes. </p><p> A função deve ter dois parâmetros. O primeiro receberá <b>n</b> ou o intervalo como um array. O segundo receberá um booleano, que especifica se a função retorna o eprimes como um array ou um único número (o número de primos no intervalo ou o <b><sup>enésimo tempo</sup></b> ). De acordo com os parâmetros, a função deve retornar um array ou um número. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>emirps</code> é uma função.
    testString: 'assert(typeof emirps === "function", "<code>emirps</code> is a function.");'
  - text: '<code>emirps(20,true)</code> devem retornar <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>'
    testString: 'assert.deepEqual(emirps(20, true), [13, 17, 31, 37, 71, 73, 79, 97, 107, 113, 149, 157, 167, 179, 199, 311, 337, 347, 359, 389], "<code>emirps(20,true)</code> should return <code>[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]</code>");'
  - text: <code>emirps(10000)</code> deve retornar <code>948349</code>
    testString: 'assert.deepEqual(emirps(10000), 948349, "<code>emirps(10000)</code> should return <code>948349</code>");'
  - text: '<code>emirps([7700,8000],true)</code> devem retornar <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>'
    testString: 'assert.deepEqual(emirps([7700, 8000], true), [7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963], "<code>emirps([7700,8000],true)</code> should return <code>[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]</code>");'
  - text: '<code>emirps([7700,8000],true)</code> deve retornar <code>11</code>'
    testString: 'assert.deepEqual(emirps([7700, 8000], false), 11, "<code>emirps([7700,8000],true)</code> should return <code>11</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function emirps(n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
