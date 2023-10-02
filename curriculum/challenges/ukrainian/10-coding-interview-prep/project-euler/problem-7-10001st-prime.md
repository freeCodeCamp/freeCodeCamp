---
id: 5900f3731000cf542c50fe86
title: 'Завдання 7: 10001-е просте число'
challengeType: 1
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

Перерахувавши перші шість простих чисел: 2, 3, 5, 7, 11 та 13, ми бачимо, що 13 - це 6-те просте число.

Яким буде `n`-те просте число?

# --hints--

`nthPrime(6)` має повернути число.

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` має повернути число 13.

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` має повернути число 29.

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` має повернути число 541.

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` має повернути число 7919.

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` має повернути число 104743.

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
