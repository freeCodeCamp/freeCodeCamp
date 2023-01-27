---
id: 5900f3731000cf542c50fe86
title: 'Problema 7: 10001º número primo'
challengeType: 1
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

Ao listar os primeiros seis números primos: 2, 3, 5, 7, 11 e 13, podemos ver que o sexto número primo é 13.

Qual é o `n`-ésimo número primo?

# --hints--

`nthPrime(6)` deve retornar um número.

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` deve retornar 13.

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` deve retornar 29.

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` deve retornar 541.

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` deve retornar 7919.

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` deve retornar 104743.

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
