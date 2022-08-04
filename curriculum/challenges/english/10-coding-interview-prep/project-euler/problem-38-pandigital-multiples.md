---
id: 5900f3931000cf542c50fea5
title: 'Problem 38: Pandigital multiples'
challengeType: 1
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

Take the number 192 and multiply it by each of 1, 2, and 3:

$$\begin{align}
  192 × 1 = 192\\\\
  192 × 2 = 384\\\\
  192 × 3 = 576\\\\
\end{align}$$

By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3).

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5).

What is the largest 1 to `k` pandigital `k`-digit number that can be formed as the concatenated product of an integer with (1, 2, ..., `n`) where `n` > 1?

# --hints--

`pandigitalMultiples(8)` should return a number.

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` should return `78156234`.

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` should return `932718654`.

```js
assert.strictEqual(pandigitalMultiples(9), 932718654);
```

# --seed--

## --seed-contents--

```js
function pandigitalMultiples(k) {

  return true;
}

pandigitalMultiples(8);
```

# --solutions--

```js
function pandigitalMultiples(k) {
  function getKDigitConcatenatedProduct(num, k) {
    // returns false if concatenated product is not k digits
    let concatenatedProduct = num.toString();
    for (let i = 2; concatenatedProduct.length < k; i++) {
      concatenatedProduct += num * i;
    }
    return concatenatedProduct.length === k ? concatenatedProduct : false;
  }

  function is1toKPandigital(num, k) {
    const numStr = num.toString();

    // check if length is not k
    if (numStr.length !== k) {
      return false;
    }

    // check if pandigital
    for (let i = k; i > 0; i--) {
      if (numStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }

  let largestNum = 0;
  for (let i = 10 ** Math.floor(k / 2) + 1; i >= 1; i--) {
    const concatenatedProduct = getKDigitConcatenatedProduct(i, k);
    if (is1toKPandigital(concatenatedProduct, k)) {
      const number = parseInt(concatenatedProduct, 10);
      if (number > largestNum) {
        largestNum = number;
      }
    }
  }
  return largestNum;
}
```
