---
id: 5900f39f1000cf542c50feb2
title: 'Problema 51: sostituzioni di cifre nei primi'
challengeType: 5
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

Sostituendo la prima cifra del numero a 2 cifre \*3, si scopre che sei dei nove valori possibili: 13, 23, 43, 53, 73 e 83, sono tutti primi.

Sostituendo la terza e la quarta cifra di 56\*\*3 con la stessa cifra, questo numero a 5 cifre è il primo esempio con sette primi tra i dieci numeri generati, della famiglia: 56003, 56113, 56333, 56443, 56663, 56773 e 56993. Di conseguenza, 56003, essendo il primo membro di questa famiglia, è il più piccolo primo con questa proprietà.

Trova il primo più piccolo che, sostituendo parte del numero (non necessariamente cifre adiacenti) con la stessa cifra, fa parte di una famiglia di `n` valori primi.

# --hints--

`primeDigitReplacements(6)` dovrebbe restituire un numero.

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` dovrebbe restituire `13`.

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` dovrebbe restituire `56003`.

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` dovrebbe restituire `121313`.

```js
assert.strictEqual(primeDigitReplacements(8), 121313);
```

# --seed--

## --seed-contents--

```js
function primeDigitReplacements(n) {

  return true;
}

primeDigitReplacements(6);
```

# --solutions--

```js
function primeDigitReplacements(n) {
  function isNFamily(number, primesMap, n) {
    const prime = number.toString();
    const lastDigit = prime[prime.length - 1];
    return (
      doesReplacingMakeFamily(prime, '0', primesMap, n) ||
      (lastDigit !== '1' &&
        doesReplacingMakeFamily(prime, '1', primesMap, n)) ||
      doesReplacingMakeFamily(prime, '2', primesMap, n)
    );
  }

  function doesReplacingMakeFamily(prime, digitToReplace, primesMap, family) {
    let count = 0;
    const replaceWith = '0123456789';

    for (let i = 0; i < replaceWith.length; i++) {
      const nextNumber = parseInt(
        prime.replace(new RegExp(digitToReplace, 'g'), replaceWith[i]),
        10
      );

      if (isPartOfFamily(nextNumber, prime, primesMap)) {
        count++;
      }
    }
    return count === family;
  }

  function isPartOfFamily(number, prime, primesMap) {
    return (
      isPrime(number, primesMap) && number.toString().length === prime.length
    );
  }

  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i++) {
      if (primesMap[i]) {
        let j = i * i;
        for (j; j < max; j += i) {
          primesMap[j] = false;
        }
      }
    }
    return primesMap;
  }

  function isPrime(num, primesMap) {
    return primesMap[num];
  }

  const primesMap = getSievePrimes(1000000);

  for (let number = 1; number < 300000; number++) {
    if (primesMap[number]) {
      if (isNFamily(number, primesMap, n)) {
        return number;
      }
    }
  }
  return -1;
}
```
