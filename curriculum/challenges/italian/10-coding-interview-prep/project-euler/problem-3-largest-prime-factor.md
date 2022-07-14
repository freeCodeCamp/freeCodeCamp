---
id: 5900f36f1000cf542c50fe82
title: 'Problema 3: il più grande fattore primo'
challengeType: 1
forumTopicId: 301952
dashedName: problem-3-largest-prime-factor
---

# --description--

I fattori primi di 13195 sono 5, 7, 13 e 29.

Qual è il fattore primo più grande del `number` dato?

# --hints--

`largestPrimeFactor(2)` dovrebbe restituire un numero.

```js
assert(typeof largestPrimeFactor(2) === 'number');
```

`largestPrimeFactor(2)` dovrebbe restituire 2.

```js
assert.strictEqual(largestPrimeFactor(2), 2);
```

`largestPrimeFactor(3)` dovrebbe restituire 3.

```js
assert.strictEqual(largestPrimeFactor(3), 3);
```

`largestPrimeFactor(5)` dovrebbe restituire 5.

```js
assert.strictEqual(largestPrimeFactor(5), 5);
```

`largestPrimeFactor(7)` dovrebbe restituire 7.

```js
assert.strictEqual(largestPrimeFactor(7), 7);
```

`largestPrimeFactor(8)` dovrebbe restituire 2.

```js
assert.strictEqual(largestPrimeFactor(8), 2);
```

`largestPrimeFactor(13195)` dovrebbe restituire 29.

```js
assert.strictEqual(largestPrimeFactor(13195), 29);
```

`largestPrimeFactor(600851475143)` dovrebbe restituire 6857.

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
