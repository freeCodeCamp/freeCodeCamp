---
id: 5a23c84252665b21eecc7ed3
title: Knapsack problem/Continuous
challengeType: 1
forumTopicId: 323654
dashedName: knapsack-problemcontinuous
---

# --description--

A thief burgles a butcher's shop, where he can select from some items.

The thief knows the weights and prices of each items. Because he has a knapsack with a limit on the maximum weight that it can carry, he wants to select the items such that he would have his profit maximized. He may cut the items; the item has a reduced price after cutting that is proportional to the original price by the ratio of masses. That means: half of an item has half the price of the original.

# --instructions--

Write a function that takes an array of objects representing the items available in the shop. Each object has 3 attributes: name, weight, and value. The function also takes the maximum weight as a parameter. The function should return the maximum value possible, and the total weight of the selected items should not exceed the maximum weight.

# --hints--

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 10)` should return `257.875`.

```js
assert.equal(
  knapContinuous(
    [
      { weight: 3.8, value: 36, name: 'beef' },
      { weight: 5.4, value: 43, name: 'pork' },
      { weight: 3.6, value: 90, name: 'ham' },
      { weight: 2.4, value: 45, name: 'greaves' },
      { weight: 4.0, value: 30, name: 'flitch' },
      { weight: 2.5, value: 56, name: 'brawn' },
      { weight: 3.7, value: 67, name: 'welt' },
      { weight: 3.0, value: 95, name: 'salami' },
      { weight: 5.9, value: 98, name: 'sausage' }
    ],
    10
  ),
  257.875
);
```

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 12)` should return `295.05405405405406`.

```js
assert.equal(
  knapContinuous(
    [
      { weight: 3.8, value: 36, name: 'beef' },
      { weight: 5.4, value: 43, name: 'pork' },
      { weight: 3.6, value: 90, name: 'ham' },
      { weight: 2.4, value: 45, name: 'greaves' },
      { weight: 4.0, value: 30, name: 'flitch' },
      { weight: 2.5, value: 56, name: 'brawn' },
      { weight: 3.7, value: 67, name: 'welt' },
      { weight: 3.0, value: 95, name: 'salami' },
      { weight: 5.9, value: 98, name: 'sausage' }
    ],
    12
  ),
  295.05405405405406
);
```

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 15)` should return `349.3783783783784`.

```js
assert.equal(
  knapContinuous(
    [
      { weight: 3.8, value: 36, name: 'beef' },
      { weight: 5.4, value: 43, name: 'pork' },
      { weight: 3.6, value: 90, name: 'ham' },
      { weight: 2.4, value: 45, name: 'greaves' },
      { weight: 4.0, value: 30, name: 'flitch' },
      { weight: 2.5, value: 56, name: 'brawn' },
      { weight: 3.7, value: 67, name: 'welt' },
      { weight: 3.0, value: 95, name: 'salami' },
      { weight: 5.9, value: 98, name: 'sausage' }
    ],
    15
  ),
  349.3783783783784
);
```

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 22)` should return `459.5263157894737`.

```js
assert.equal(
  knapContinuous(
    [
      { weight: 3.8, value: 36, name: 'beef' },
      { weight: 5.4, value: 43, name: 'pork' },
      { weight: 3.6, value: 90, name: 'ham' },
      { weight: 2.4, value: 45, name: 'greaves' },
      { weight: 4.0, value: 30, name: 'flitch' },
      { weight: 2.5, value: 56, name: 'brawn' },
      { weight: 3.7, value: 67, name: 'welt' },
      { weight: 3.0, value: 95, name: 'salami' },
      { weight: 5.9, value: 98, name: 'sausage' }
    ],
    22
  ),
  459.5263157894737
);
```

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 24)` should return `478.4736842105263`.

```js
assert.equal(
  knapContinuous(
    [
      { weight: 3.8, value: 36, name: 'beef' },
      { weight: 5.4, value: 43, name: 'pork' },
      { weight: 3.6, value: 90, name: 'ham' },
      { weight: 2.4, value: 45, name: 'greaves' },
      { weight: 4.0, value: 30, name: 'flitch' },
      { weight: 2.5, value: 56, name: 'brawn' },
      { weight: 3.7, value: 67, name: 'welt' },
      { weight: 3.0, value: 95, name: 'salami' },
      { weight: 5.9, value: 98, name: 'sausage' }
    ],
    24
  ),
  478.4736842105263
);
```

# --seed--

## --seed-contents--

```js
function knapContinuous(items, maxweight) {

}
```

# --solutions--

```js
function knapContinuous(items, maxweight) {
  function item_cmp(a, b) {
    const ua = a.unitVal,
      ub = b.unitVal;
    return ua < ub ? 1 : ua > ub ? -1 : 0;
  }
  items = items.map(({ value, weight }) => ({
    unitVal: value / weight,
    weight
  }));
  items.sort(item_cmp);

  let val = 0;
  let wt = 0;
  for (let { unitVal, weight } of items) {
    var portion = Math.min(maxweight - wt, weight);
    wt += portion;
    var addVal = portion * unitVal;
    val += addVal;
    if (wt >= maxweight) {
      break;
    }
  }
  return val;
}
```
