---
id: 5900f36f1000cf542c50fe82
title: 'Problema 3: Factor primo mas grande'
challengeType: 1
forumTopicId: 301952
dashedName: problem-3-largest-prime-factor
---

# --description--

Los factores primos de 13195 son 5,7,13 y 29.

Cual es el factor primo mas grande del `number`?

# --hints--

`largestPrimeFactor(2)` debe devolver un número.

```js
assert(typeof largestPrimeFactor(2) === 'number');
```

`largestPrimeFactor(2)` debe devolver 2.

```js
assert.strictEqual(largestPrimeFactor(2), 2);
```

`largestPrimeFactor(3)` debe devolver 3.

```js
assert.strictEqual(largestPrimeFactor(3), 3);
```

`largestPrimeFactor(5)` debe devolver 5.

```js
assert.strictEqual(largestPrimeFactor(5), 5);
```

`largestPrimeFactor(7)` debe devolver 7.

```js
assert.strictEqual(largestPrimeFactor(7), 7);
```

`largestPrimeFactor(8)` debe devolver 2.

```js
assert.strictEqual(largestPrimeFactor(8), 2);
```

`largestPrimeFactor(13195)` debe devolver 29.

```js
assert.strictEqual(largestPrimeFactor(13195), 29);
```

`largestPrimeFactor(600851475143)` debe devolver 6857.

```js
assert.strictEqual(largestPrimeFactor(600851475143), 6857);
```

# --seed--

## --seed-contents--

```js
function largestPrimeFactor(number) {

  return true;
}

largestPrimeFactor(13195);
```

# --solutions--

```js
const largestPrimeFactor = (number) => {
  let largestFactor = number;

  for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
    if (!(largestFactor % i)) {
      let factor = largestFactor / i;
      let candidate = largestPrimeFactor(factor);

      return i > candidate ? i : candidate;
    }
  }

  return largestFactor;
}
```
