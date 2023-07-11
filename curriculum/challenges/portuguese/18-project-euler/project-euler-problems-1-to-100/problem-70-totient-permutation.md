---
id: 5900f3b21000cf542c50fec5
title: 'Problema 70: Permutações de totientes'
challengeType: 1
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

A função totiente de Euler, ${\phi}(n)$ (às vezes chamada de função phi), é usada para determinar a quantidade de números menores que `n`, que são primos próximos de `n`. Por exemplo, 1, 2, 4, 5, 7 e 8 são todos inferiores a nove e primos relativos de nove, ${\phi}(9) = 6$. O número 1 é considerado um primo relativo para todos os números positivos, portanto ${\phi}(1) = 1$.

Curiosamente, ${\phi}(87109) = 79180$, e pode ser visto que 87109 é uma permutação de 79180.

Encontre o valor de `n`, 1 &lt; `n` &lt; `limit`, onde ${\phi}(n)$ é uma permutação de `n` e a razão $\displaystyle\frac{n}{{\phi}(n)}$ produz um mínimo.

# --hints--

`totientPermutation(10000)` deve retornar um número.

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` deve retornar `4435`.

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` deve retornar `75841`.

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` deve retornar `474883`.

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` deve retornar `8319823`.

```js
assert.strictEqual(totientPermutation(10000000), 8319823);
```

# --seed--

## --seed-contents--

```js
function totientPermutation(limit) {

  return true;
}

totientPermutation(10000);
```

# --solutions--

```js
function totientPermutation(limit) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function sortDigits(number) {
    return number.toString().split('').sort().join('');
  }

  function isPermutation(numberA, numberB) {
    return sortDigits(numberA) === sortDigits(numberB);
  }

  const MAX_PRIME = 4000;
  const primes = getSievePrimes(MAX_PRIME);

  let nValue = 1;
  let minRatio = Infinity;

  for (let i = 1; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const num = primes[i] * primes[j];
      if (num > limit) {
        break;
      }

      const phi = (primes[i] - 1) * (primes[j] - 1);
      const ratio = num / phi;

      if (minRatio > ratio && isPermutation(num, phi)) {
        nValue = num;
        minRatio = ratio;
      }
    }
  }
  return nValue;
}
```
