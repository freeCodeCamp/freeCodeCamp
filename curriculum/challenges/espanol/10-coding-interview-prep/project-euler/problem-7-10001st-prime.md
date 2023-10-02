---
id: 5900f3731000cf542c50fe86
title: 'Problema 7: 10001º primo'
challengeType: 1
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

Enumerando los seis primeros números primos: 2, 3, 5, 7, 11 y 13, podemos observar que el 6º primo es 13.

¿Cuál es el `n`º número primo?

# --hints--

`nthPrime(6)` debe devolver un número.

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` debe devolver 13.

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` debe devolver 29.

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` debe devolver 541.

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` debe devolver 7919.

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` debe devolver 104743.

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
