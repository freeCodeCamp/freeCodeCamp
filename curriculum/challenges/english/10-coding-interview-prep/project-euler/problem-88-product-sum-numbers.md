---
id: 5900f3c51000cf542c50fed6
title: 'Problem 88: Product-sum numbers'
challengeType: 1
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

A natural number, `N`, that can be written as the sum and product of a given set of at least two natural numbers, $\\{a_1, a_2, \ldots , a_k\\}$ is called a product-sum number: $N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$.

For example, 6 = 1 + 2 + 3 = 1 × 2 × 3.

For a given set of size, `k`, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, `k` = 2, 3, 4, 5, and 6 are as follows.

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

Hence for 2 ≤ `k` ≤ 6, the sum of all the minimal product-sum numbers is 4 + 6 + 8 + 12 = 30; note that `8` is only counted once in the sum.

In fact, as the complete set of minimal product-sum numbers for 2 ≤ `k` ≤ 12 is $\\{4, 6, 8, 12, 15, 16\\}$, the sum is `61`.

What is the sum of all the minimal product-sum numbers for 2 ≤ `k` ≤ `limit`?

# --hints--

`productSumNumbers(6)` should return a number.

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` should return `30`.

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` should return `61`.

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` should return `12686`.

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` should return `2125990`.

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` should return `7587457`.

```js
assert.strictEqual(productSumNumbers(12000), 7587457);
```

# --seed--

## --seed-contents--

```js
function productSumNumbers(limit) {

  return true;
}

productSumNumbers(6);
```

# --solutions--

```js
function productSumNumbers(limit) {
  function getProductSums(curProduct, curSum, factorsCount, start) {
    const k = curProduct - curSum + factorsCount;
    if (k <= limit) {
      if (curProduct < minimalProductSums[k]) {
        minimalProductSums[k] = curProduct;
      }
      for (let i = start; i < Math.floor((limit / curProduct) * 2) + 1; i++) {
        getProductSums(curProduct * i, curSum + i, factorsCount + 1, i);
      }
    }
  }

  const minimalProductSums = new Array(limit + 1).fill(2 * limit);
  getProductSums(1, 1, 1, 2);

  const uniqueProductSums = [...new Set(minimalProductSums.slice(2))];

  let sum = 0;
  for (let i = 0; i < uniqueProductSums.length; i++) {
    sum += uniqueProductSums[i];
  }

  return sum;
}
```
