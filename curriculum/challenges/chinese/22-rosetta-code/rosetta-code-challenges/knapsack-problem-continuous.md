---
id: 5a23c84252665b21eecc7ed3
title: 背包问题/连续
challengeType: 1
forumTopicId: 323654
dashedName: knapsack-problemcontinuous
---

# --description--

A thief burgles a butcher's shop, where he can select from some items.

小偷知道每件物品的重量和价格。 因为他有一个背包，它可以携带的最大重量有限制，所以他想选择可以使他的利润最大化的物品。 他可以切割物品；该商品在切割后的降价与原价按质量比成正比。 这意味着：一件商品的一半价格是原价的一半。

# --instructions--

编写一个函数，该函数接受一个代表商店中可用商品的对象数组。 每个对象都有 3 个属性：名称、权重和值。 该函数还将最大权重作为参数。 该函数应返回可能的最大值，并且所选物品的总重量不应超过最大重量。

# --hints--

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 10)` 应该返回 `257.875`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 12)` 应该返回 `295.05405405405406`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 15)` 应该返回 `349.3783783783784`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 22)` 应该返回 `459.5263157894737`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 24)` 应该返回 `478.4736842105263`。

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
