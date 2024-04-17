---
id: 5900f3b21000cf542c50fec5
title: 'Problem 70: Totient-Permutation'
challengeType: 1
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

Die Eulersche Totient-Funktion, ${\phi}(n)$ (manchmal Phi-Funktion genannt), wird genutzt, um die Anzahl der positiven Zahlen kleiner oder gleich `n` zu bestimmen, die relativ prim zu `n` sind. Da zum Beispiel 1, 2, 4, 5, 7 und 8 alle kleiner als neun und relativ prim zu neun sind, ist ${\phi}(9) = 6$. Die Zahl 1 gilt als relativ prim für jede positive Zahl, also ${\phi}(1) = 1$.

Interessanterweise ist ${\phi}(87109) = 79180$ und man kann sehen, dass 87109 eine Permutation von 79180 ist.

Finde den Wert von `n`, 1 &lt; `n` &lt; `limit`, für das ${\phi}(n)$ eine Permutation von `n` ist und das Verhältnis $\displaystyle\frac{n}{{\phi}(n)}$ ein Minimum erzeugt.

# --hints--

`totientPermutation(10000)` sollte eine Zahl zurückgeben.

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` sollte `4435` zurückgeben.

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` sollte `75841` zurückgeben.

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` sollte `474883` zurückgeben.

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` sollte `8319823` zurückgeben.

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
