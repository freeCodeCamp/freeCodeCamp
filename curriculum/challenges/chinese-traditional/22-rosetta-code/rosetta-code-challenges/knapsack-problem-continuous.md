---
id: 5a23c84252665b21eecc7ed3
title: 揹包問題/連續
challengeType: 1
forumTopicId: 323654
dashedName: knapsack-problemcontinuous
---

# --description--

A thief burgles a butcher's shop, where he can select from some items.

小偷知道每件物品的重量和價格。 因爲他有一個揹包，它可以攜帶的最大重量有限制，所以他想選擇可以使他的利潤最大化的物品。 他可以切割物品；該商品在切割後的降價與原價按質量比成正比。 這意味着：一件商品的一半價格是原價的一半。

# --instructions--

編寫一個函數，該函數接受一個代表商店中可用商品的對象數組。 每個對象都有 3 個屬性：名稱、權重和值。 該函數還將最大權重作爲參數。 該函數應返回可能的最大值，並且所選物品的總重量不應超過最大重量。

# --hints--

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 10)` 應該返回 `257.875`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 12)` 應該返回 `295.05405405405406`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 15)` 應該返回 `349.3783783783784`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 22)` 應該返回 `459.5263157894737`。

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 24)` 應該返回 `478.4736842105263`。

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
