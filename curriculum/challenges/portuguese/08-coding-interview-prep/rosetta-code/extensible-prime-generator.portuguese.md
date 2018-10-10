---
title: Extensible prime generator
id: 598ee8b91b410510ae82efef
challengeType: 5
videoUrl: ''
localeTitle: Gerador principal extensível
---

## Description
<section id="description"><p> Escreva um gerador de números primos, em ordem, que se ajustará automaticamente para acomodar a geração de qualquer primo razoavelmente alto. </p> O gerador deve ser capaz de: Mostrar o primeiro <b>n</b> nobre numbers.Show os números primos em um range.Show o número de primos em um range.Show o <b><sup>enésimo</sup></b> número primo. <p> A função deve ter dois parâmetros. O primeiro receberá <b>n</b> ou o intervalo como um array. O segundo receberá um booleano, que especifica se a função retorna os números primos como uma matriz ou um número único (o número de números primos, na gama ou o <b><sup>n-ésimo</sup></b> primo). De acordo com os parâmetros, a função deve retornar um array. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>primeGenerator</code> é uma função.
    testString: 'assert(typeof primeGenerator === "function", "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> é uma função.
    testString: 'assert.deepEqual(primeGenerator(20, true), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71], "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> é uma função.
    testString: 'assert.deepEqual(primeGenerator([100, 150], true), [101, 103, 107, 109, 113, 127, 131, 137, 139, 149], "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> é uma função.
    testString: 'assert.equal(primeGenerator([7700, 8000], false), 30, "<code>primeGenerator</code> is a function.");'
  - text: <code>primeGenerator</code> é uma função.
    testString: 'assert.equal(primeGenerator(10000, false), 104729, "<code>primeGenerator</code> is a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function primeGenerator (num, showPrimes) {
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
