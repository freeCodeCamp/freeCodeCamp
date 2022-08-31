---
id: 5900f3731000cf542c50fe86
title: 'Problema 7: 10001esimo primo'
challengeType: 1
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

Elencando i primi sei numeri principali: 2, 3, 5, 7, 11 e 13, possiamo vedere che il sesto primo è 13.

Qual è il `n`-simo numero primo?

# --hints--

`nthPrime(6)` dovrebbe restituire un numero.

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` dovrebbe restituire 13.

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` dovrebbe restituire 29.

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` dovrebbe restituire 541.

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` dovrebbe restituire 7919.

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` dovrebbe restituire 104743.

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
