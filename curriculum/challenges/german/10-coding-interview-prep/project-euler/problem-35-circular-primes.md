---
id: 5900f38f1000cf542c50fea2
title: 'Problem 35: Kreisförmige Primzahlen'
challengeType: 1
forumTopicId: 302009
dashedName: problem-35-circular-primes
---

# --description--

Die Zahl 197 wird als kreisförmige Primzahl bezeichnet, weil alle Drehungen der Ziffern: 197, 971, und 719, selbst Primzahlen sind.

Es gibt dreizehn solcher Primzahlen unter 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79 und 97.

Wie viele kreisförmige Primzahlen gibt es unter `n`, wobei 100 ≤ `n` ≤ 1000000?

**Hinweis:**

Kreisförmige Primzahlen können eine individuelle Drehung von `n` überschreiten.

# --hints--

`circularPrimes(100)` sollte eine Zahl zurückgeben.

```js
assert(typeof circularPrimes(100) === 'number');
```

`circularPrimes(100)` sollte 13 ergeben.

```js
assert(circularPrimes(100) == 13);
```

`circularPrimes(100000)` sollte 43 zurückgeben.

```js
assert(circularPrimes(100000) == 43);
```

`circularPrimes(250000)` sollte 45 zurückgeben.

```js
assert(circularPrimes(250000) == 45);
```

`circularPrimes(500000)` sollte 49 zurückgeben.

```js
assert(circularPrimes(500000) == 49);
```

`circularPrimes(750000)` sollte 49 zurückgeben.

```js
assert(circularPrimes(750000) == 49);
```

`circularPrimes(1000000)` sollte 55 zurückgeben.

```js
assert(circularPrimes(1000000) == 55);
```

# --seed--

## --seed-contents--

```js
function circularPrimes(n) {

  return n;
}

circularPrimes(1000000);
```

# --solutions--

```js
function rotate(n) {
  if (n.length == 1) return n;
  return n.slice(1) + n[0];
}

function circularPrimes(n) {
  // Nearest n < 10^k
  const bound = 10 ** Math.ceil(Math.log10(n));
  const primes = [0, 0, 2];
  let count = 0;

  // Making primes array
  for (let i = 4; i <= bound; i += 2) {
    primes.push(i - 1);
    primes.push(0);
  }

  // Getting upperbound
  const upperBound = Math.ceil(Math.sqrt(bound));

  // Setting other non-prime numbers to 0
  for (let i = 3; i < upperBound; i += 2) {
    if (primes[i]) {
      for (let j = i * i; j < bound; j += i) {
        primes[j] = 0;
      }
    }
  }

  // Iterating through the array
  for (let i = 2; i < n; i++) {
    if (primes[i]) {
      let curr = String(primes[i]);
      let tmp = 1; // tmp variable to hold the no of rotations
      for (let x = rotate(curr); x != curr; x = rotate(x)) {
        if (x > n && primes[x]) {
          continue;
        }
        else if (!primes[x]) {
          // If the rotated value is 0 then it isn't a circular prime, break the loop
          tmp = 0;
          break;
        }
        tmp++;
        primes[x] = 0;
      }
      count += tmp;
    }
  }
  return count;
}
```
