---
id: 5900f3c51000cf542c50fed6
title: 'Problem 88: Product-sum numbers'
challengeType: 5
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

A natural number, N, that can be written as the sum and product of a given set of at least two natural numbers, {`a`<sub>1</sub>, `a`<sub>2</sub>, ... , `a`<sub>k</sub>} is called a product-sum number: N = `a`<sub>1</sub> + `a`<sub>2</sub> + ... + `a`<sub>k</sub> = `a`<sub>1</sub> × `a`<sub>2</sub> × ... × `a`<sub>k</sub>.

For example, 6 = 1 + 2 + 3 = 1 × 2 × 3.

For a given set of size, `k`, we shall call the smallest N with this property a minimal product-sum number. The minimal product-sum numbers for sets of size, `k` = 2, 3, 4, 5, and 6 are as follows.

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div>

Hence for 2≤`k`≤6, the sum of all the minimal product-sum numbers is 4+6+8+12 = 30; note that 8 is only counted once in the sum.

In fact, as the complete set of minimal product-sum numbers for 2≤`k`≤12 is {4, 6, 8, 12, 15, 16}, the sum is 61.

What is the sum of all the minimal product-sum numbers for 2≤`k`≤12000?

# --hints--

`productSumNumbers()` should return a number.

```js
assert(typeof productSumNumbers() === 'number');
```

`productSumNumbers()` should return 7587457.

```js
assert.strictEqual(productSumNumbers(), 7587457);
```

# --seed--

## --seed-contents--

```js
function productSumNumbers() {

  return true;
}

productSumNumbers();
```

# --solutions--

```js
// solution required
```
