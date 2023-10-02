---
id: 5900f3b21000cf542c50fec5
title: 'Problema 70: Permutazione Toziente'
challengeType: 1
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

La funzione Toziente di Eulero, ${\phi}(n)$ (a volte chiamata funzione phi), viene utilizzata per determinare il numero di numeri positivi minori o uguali a `n` che sono relativamente primi a `n`. Ad esempio 1, 2, 4, 5, 7 e 8, sono tutti minori di nove e relativamente primi a nove, quindi ${\phi}(9) = 6$. Il numero 1 è considerato relativamente primo di ogni numero positivo, quindi ${\phi}(1) = 1$.

È interessante notare che ${\phi}(87109) = 79180$, e si può vedere che 87109 è una permutazione di 79180.

Trova il valore di `n`, 1 &lt; `n` &lt; `limite`, per cui ${\phi}(n)$ è una permutazione di `n` e il rapporto $\displaystyle\frac{n}{{\phi}(n)}$ produce un minimo.

# --hints--

`totientPermutation(10000)` dovrebbe restituire un numero.

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` dovrebbe restituire `4435`.

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` dovrebbe restituire `75841`.

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` dovrebbe restituire `474883`.

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` dovrebbe restituire `8319823`.

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
