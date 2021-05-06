---
id: 5900f38c1000cf542c50fe9f
title: 'Problem 32: Pandigital products'
challengeType: 5
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

We shall say that an `n`-digit number is pandigital if it makes use of all the digits 1 to `n` exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

**Hint:** Some products can be obtained in more than one way so be sure to only include it once in your sum.

# --hints--

`pandigitalProducts()` should return a number.

```js
assert(typeof pandigitalProducts() === 'number');
```

`pandigitalProducts()` should return 45228.

```js
assert.strictEqual(pandigitalProducts(), 45228);
```

# --seed--

## --seed-contents--

```js
function pandigitalProducts() {

  return true;
}

pandigitalProducts();
```

# --solutions--

```js
function pandigitalProducts() {
  function is1to9Pandigital(...numbers) {
    const digitStr = concatenateNums(...numbers);
    // check if length is 9
    if (digitStr.length !== 9) {
      return false;
    }
    // check if pandigital
    for (let i = digitStr.length; i > 0; i--) {
      if (digitStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }
  function concatenateNums(...numbers) {
    let digitStr = '';
    for (let i = 0; i < numbers.length; i++) {
      digitStr += numbers[i].toString();
    }
    return digitStr;
  }

  const pandigitalNums = [];
  let sum = 0;
  for (let mult1 = 2; mult1 < 9876; mult1++) {
    let mult2 = 123;
    while (concatenateNums(mult1, mult2, mult1 * mult2).length < 10) {
      if (is1to9Pandigital(mult1, mult2, mult1 * mult2) && !pandigitalNums.includes(mult1 * mult2)) {
        pandigitalNums.push(mult1 * mult2);
        sum += mult1 * mult2;
      }
      mult2++;
    }
  }
  return sum;
}
```
