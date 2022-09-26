---
id: 598ee8b91b410510ae82efef
title: Generatore di primi estensibile
challengeType: 1
forumTopicId: 302262
dashedName: extensible-prime-generator
---

# --description--

Scrivi un generatore di numeri primi, in ordine, che si adeguerà automaticamente per ospitare la generazione di qualsiasi primo ragionevolmente alto.

Il generatore dovrebbe riuscire a compiere le seguenti azioni:

<ul>
  <li>Mostrare i primi <code>n</code> numeri primi</li>
  <li>Mostrare i numeri primi in un range</li>
  <li>Mostrare quanti numeri primi sono presenti in un range</li>
  <li>Mostra l'<code>n<sup>mo</sup></code> numero primo</li>
</ul>

La funzione dovrebbe avere due parametri. Il primo riceverà `n` o l'intervallo come un array. Il secondo riceverà un booleano, che specifica se la funzione restituisce i numeri primi come un array o un singolo numero (il numero di primi nell'intervallo o l'<code>n<sup>mo</sup></code> primo). A seconda dei parametri la funzione dovrebbe restituire un array.

# --hints--

`primeGenerator` dovrebbe essere una funzione.

```js
assert(typeof primeGenerator === 'function');
```

`primeGenerator(20, true)` dovrebbe restituire `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]`.

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

`primeGenerator([100, 150], true)` dovrebbe restituire `[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]`.

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

`primeGenerator([7700, 8000], false)` dovrebbe restituire `30`.

```js
assert.equal(primeGenerator([7700, 8000], false), 30);
```

`primeGenerator(10000, false)` dovrebbe restituire `104729`.

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
