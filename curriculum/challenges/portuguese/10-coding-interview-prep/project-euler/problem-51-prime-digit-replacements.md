---
id: 5900f39f1000cf542c50feb2
title: 'Problema 51: Substituição de algarismos primos'
challengeType: 5
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

Ao substituir o primeiro algarismo do número de dois algarismos, \*3, seis dos nove valores possíveis (13, 23, 43, 53, 73 e 83) são todos primos.

Ao substituir o terceiro e o quarto algarismos do número 56\*\*3 pelo mesmo algarismo, este número de 5 algarismos é o primeiro exemplo com sete primos entre os dez números gerados, criando a sequência de termos: 56003, 56113, 56333, 56443, 56663, 56773 e 56993. O número 56003, por ser o primeiro termo desta sequência, é o menor primo com essa propriedade.

Encontre o menor número primo que, ao substituir parte do número (não necessariamente algarismos adjacentes) pelo mesmo algarismo, é parte de uma sequência de `n` termos.

# --hints--

`primeDigitReplacements(6)` deve retornar um número.

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` deve retornar `13`.

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` deve retornar `56003`.

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` deve retornar `121313`.

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
