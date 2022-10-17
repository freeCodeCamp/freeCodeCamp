---
id: 5900f3731000cf542c50fe86
title: 'Problem 7: 10001ste Primzahl'
challengeType: 1
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

Wenn man die ersten sechs Primzahlen aufzählt: 2, 3, 5, 7, 11 und 13, können wir sehen, dass die sechste Primzahl 13 ist.

Was ist die `n`-te Primzahl?

# --hints--

`nthPrime(6)` sollte eine Zahl zurückgeben.

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` sollte 13 zurückgeben.

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` sollte 29 zurückgeben.

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` sollte 541 zurückgeben.

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` sollte 7919 zurückgeben.

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` sollte 104743 zurückgeben.

```js
assert.strictEqual(nthPrime(10001), 104743);
```

# --seed--

## --seed-contents--

```js
function nthPrime(n) {

  return true;
}

nthPrime(10001);
```

# --solutions--

```js
const nthPrime = n => {
  let pN = 2;
  let step = 0;
  while (step < n) {
    let isPrime = true;
    let rootN = Math.sqrt(pN);
    for (let i = 2; i <= rootN; i++) {
      if (!(pN % i)) {
        isPrime = false;
        break;
      }
    }
    isPrime ? step++ : '';
    pN++;
  }
  return pN - 1;
}
```
