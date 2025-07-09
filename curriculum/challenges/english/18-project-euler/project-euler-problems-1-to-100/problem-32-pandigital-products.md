---
id: 5900f38c1000cf542c50fe9f
title: 'Problem 32: Pandigital products'
challengeType: 1
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

We shall say that an `n`-digit number is pandigital if it makes use of all the digits 1 to `n` exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through `n` pandigital.

**Hint:** Some products can be obtained in more than one way so be sure to only include it once in your sum.

# --hints--

`pandigitalProducts(4)` should return a number.

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` should return `12`.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` should return `162`.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` should return `0`.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` should return `13458`.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` should return `45228`.

```js
assert.strictEqual(pandigitalProducts(9), 45228);
```

# --seed--

## --seed-contents--

```js
function pandigitalProducts(n) {

  return true;
}

pandigitalProducts(4);
```

# --solutions--

```js
// Check for pandigital number
function is1toNPandigital(n, digitStr) {
  return digitStr
    .split('')
    .sort()
    .every((c, i) => c == i + 1);
}

// Concatenate 3 numbers
function concatenate3Nums(a, b, c) {
  return a.toString() + b.toString() + c.toString();
}

// Find sum of all pandigital products
function pandigitalProducts(n) {
  const pandigitalNums = [];
  const limit = 10 ** Math.floor(n / 2) - 1;
  let sum = 0;

  for (let factor1 = 2; factor1 < limit; factor1++) {
    for (let factor2 = factor1; factor2 < limit; factor2++) {
      const product = factor1 * factor2;
      const concatenated = concatenate3Nums(factor1, factor2, product);

      if (concatenated.length > n) {
        break;
      } else if (concatenated.length == n &&
        is1toNPandigital(n, concatenated) &&
        !pandigitalNums.includes(product)
      ) {
        pandigitalNums.push(product);
        sum += product;
      }
    }
  }
  return sum;
}
```
