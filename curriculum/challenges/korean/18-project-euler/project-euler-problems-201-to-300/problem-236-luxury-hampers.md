---
id: 5900f4591000cf542c50ff6b
title: 'Problem 236: Luxury Hampers'
challengeType: 1
forumTopicId: 301881
dashedName: problem-236-luxury-hampers
---

# --description--

Suppliers 'A' and 'B' provided the following numbers of products for the luxury hamper market:

|       Product      | 'A'  | 'B'  |
|--------------------|------|------|
|    Beluga Caviar   | 5248 | 640  |
|    Christmas Cake  | 1312 | 1888 |
|    Gammon Joint    | 2624 | 3776 |
|    Vintage Port    | 5760 | 3776 |
| Champagne Truffles | 3936 | 5664 |

Although the suppliers try very hard to ship their goods in perfect condition, there is inevitably some spoilage - i.e. products gone bad.

The suppliers compare their performance using two types of statistic:

- The five per-product spoilage rates for each supplier are equal to the number of products gone bad divided by the number of products supplied, for each of the five products in turn.
- The overall spoilage rate for each supplier is equal to the total number of products gone bad divided by the total number of products provided by that supplier.

To their surprise, the suppliers found that each of the five per-product spoilage rates was worse (higher) for 'B' than for 'A' by the same factor (ratio of spoilage rates), $m > 1$; and yet, paradoxically, the overall spoilage rate was worse for 'A' than for 'B', also by a factor of $m$.

There are thirty-five $m > 1$ for which this surprising result could have occurred, the smallest of which is $\frac{1476}{1475}$.

What's the largest possible value of $m$? Give your answer as a string with fraction reduced to its lowest terms, in the form `u/v`.

# --hints--

`luxuryHampers()` should return a string.

```js
assert(typeof luxuryHampers() === 'string');
```

`luxuryHampers()` should return the string `123/59`.

```js
assert.strictEqual(luxuryHampers(), '123/59');
```

# --seed--

## --seed-contents--

```js
function luxuryHampers() {

  return true;
}

luxuryHampers();
```

# --solutions--

```js
// solution required
```
