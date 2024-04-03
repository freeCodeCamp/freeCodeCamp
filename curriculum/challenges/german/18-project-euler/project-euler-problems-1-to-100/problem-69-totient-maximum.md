---
id: 5900f3b11000cf542c50fec4
title: 'Problem 69: Totalitätsmaximum'
challengeType: 1
forumTopicId: 302181
dashedName: problem-69-totient-maximum
---

# --description--

Die Eulersche Totientenfunktion, ${\phi}(n)$ (manchmal Phi-Funktion genannt), wird verwendet, um die Anzahl der Zahlen zu bestimmen, die kleiner sind als `n`, die relativ prim zu `n` sind. Da zum Beispiel 1, 2, 4, 5, 7 und 8 alle kleiner als neun und relativ prim zu neun sind, ist ${\phi}(9) = 6$.

<div style='margin-left: 4em;'>

| $n$ | $\text{Relatively Prime}$ | $\displaystyle{\phi}(n)$ | $\displaystyle\frac{n}{{\phi}(n)}$ |
| --- | ------------------------- | ------------------------ | ---------------------------------- |
| 2   | 1                         | 1                        | 2                                  |
| 3   | 1,2                       | 2                        | 1.5                                |
| 4   | 1,3                       | 2                        | 2                                  |
| 5   | 1,2,3,4                   | 4                        | 1.25                               |
| 6   | 1,5                       | 2                        | 3                                  |
| 7   | 1,2,3,4,5,6               | 6                        | 1.1666...                          |
| 8   | 1,3,5,7                   | 4                        | 2                                  |
| 9   | 1,2,4,5,7,8               | 6                        | 1.5                                |
| 10  | 1,3,7,9                   | 4                        | 2.5                                |

</div>

Es ist zu erkennen, dass `n` = 6 ein Maximum ergibt $\displaystyle\frac{n}{{\phi}(n)}$ für `n` ≤ 10.

Finde den Wert von f `n` ≤ `limit` für den $\displaystyle\frac{n}{{\phi(n)}}$ ein Maximum ist.

# --hints--

`totientMaximum(10)` sollte eine Zahl zurückgeben.

```js
assert(typeof totientMaximum(10) === 'number');
```

`totientMaximum(10)` sollte `6` zurückgeben.

```js
assert.strictEqual(totientMaximum(10), 6);
```

`totientMaximum(10000)` sollte `2310` zurückgeben.

```js
assert.strictEqual(totientMaximum(10000), 2310);
```

`totientMaximum(500000)` sollte `30030` zurückgeben.

```js
assert.strictEqual(totientMaximum(500000), 30030);
```

`totientMaximum(1000000)` sollte `510510` zurückgeben.

```js
assert.strictEqual(totientMaximum(1000000), 510510);
```

# --seed--

## --seed-contents--

```js
function totientMaximum(limit) {

  return true;
}

totientMaximum(10);
```

# --solutions--

```js
function totientMaximum(limit) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    const primes = [];
    for (let i = 2; i < max; i = i + 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j = j + i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  const MAX_PRIME = 50;
  const primes = getSievePrimes(MAX_PRIME);
  let result = 1;

  for (let i = 0; result * primes[i] < limit; i++) {
    result *= primes[i];
  }
  return result;
}
```
