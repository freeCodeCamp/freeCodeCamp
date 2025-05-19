---
id: 6821ebe4237de8297eaee794
title: "JavaScript Challenge 18: Second Best"
challengeType: 28
dashedName: javascript-challenge-18
---

# --description--

Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

1. The second most expensive laptop if it is within your budget, or
2. the most expensive laptop that is within your budget, or
3. `0` if no laptops are within your budget.

- Duplicate prices should be ignored.

# --hints--

`getLaptopCost([1500, 2000, 1800, 1400], 1900)` should return `1800`

```js
assert.equal(getLaptopCost([1500, 2000, 1800, 1400], 1900), 1800);
```

`getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)` should return `1800`

```js
assert.equal(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900), 1800);
```

`getLaptopCost([2099, 1599, 1899, 1499], 2200)` should return `1899`

```js
assert.equal(getLaptopCost([2099, 1599, 1899, 1499], 2200), 1899);
```

`getLaptopCost([2099, 1599, 1899, 1499], 1000)` should return `0`

```js
assert.equal(getLaptopCost([2099, 1599, 1899, 1499], 1000), 0);
```

`getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)` should return `1400`

```js
assert.equal(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450), 1400);
```

# --seed--

## --seed-contents--

```js
function getLaptopCost(laptops, budget) {

  return laptops;
}
```

# --solutions--

```js
function getLaptopCost(laptops, budget) {
  laptops = [...new Set(laptops)].sort((a, b) => b - a);

  if (budget >= laptops[1]) return laptops[1];
  if (budget < laptops[laptops.length - 1]) return 0;

  for (let i = 2; i < laptops.length; i++) {
    if (budget >= laptops[i]) return laptops[i];
  }
}
```
