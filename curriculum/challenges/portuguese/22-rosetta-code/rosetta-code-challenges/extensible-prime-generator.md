---
id: 598ee8b91b410510ae82efef
title: Gerador de números primos extensível
challengeType: 1
forumTopicId: 302262
dashedName: extensible-prime-generator
---

# --description--

Escreva um gerador de números primos, em ordem, que se ajuste automaticamente para acomodar a geração de qualquer número primo razoavelmente alto.

O gerador deve poder:

<ul>
  <li>Mostrar os <code>n</code> primeiros números primos</li>
  <li>Mostrar os números primos em um intervalo</li>
  <li>Mostrar a quantidade de números primos em um intervalo</li>
  <li>Mostrar o <code>n<sup>th</sup></code> (enésimo) número primo</li>
</ul>

A função deve receber dois parâmetros. O primeiro receberá `n` ou o intervalo como um array. O segundo receberá um booleano, que especifica se a função retorna os números primos como um array ou um único número - o número de primos no intervalo ou o <code>n<sup>th</sup></code> (enésimo) primo. De acordo com os parâmetros, a função deve retornar um array.

# --hints--

`primeGenerator` deve ser uma função.

```js
assert(typeof primeGenerator === 'function');
```

`primeGenerator(20, true)` deve retornar `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]`.

```js
assert.deepEqual(primeGenerator(20, true), [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71
]);
```

`primeGenerator([100, 150], true)` deve retornar `[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]`.

```js
assert.deepEqual(primeGenerator([100, 150], true), [
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149
]);
```

`primeGenerator([7700, 8000], false)` deve retornar `30`.

```js
assert.equal(primeGenerator([7700, 8000], false), 30);
```

`primeGenerator(10000, false)` deve retornar `104729`.

```js
assert.equal(primeGenerator(10000, false), 104729);
```

# --seed--

## --seed-contents--

```js
function primeGenerator(num, showPrimes) {

}
```

# --solutions--

```js
function primeGenerator(num, showPrimes) {
  let i,
    arr = [];

  function isPrime(num) {
    // try primes <= 16
    if (num <= 16) { return (
      num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13
    ); }
    // cull multiples of 2, 3, 5 or 7
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)
      { return false; }
    // cull square numbers ending in 1, 3, 7 or 9
    for (let i = 10; i * i <= num; i += 10) {
      if (num % (i + 1) == 0) return false;
      if (num % (i + 3) == 0) return false;
      if (num % (i + 7) == 0) return false;
      if (num % (i + 9) == 0) return false;
    }
    return true;
  }

  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (isPrime(i)) arr.push(i);
    // first x primes
    if (showPrimes) return arr;
    // xth prime
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (isPrime(i)) arr.push(i);
    // primes between x .. y
    if (showPrimes) return arr;
    // number of primes between x .. y
    return arr.length;
  }
}
```
