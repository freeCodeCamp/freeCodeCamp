---
id: 5a23c84252665b21eecc7ed3
title: O problema da mochila/contínuo
challengeType: 1
forumTopicId: 323654
dashedName: knapsack-problemcontinuous
---

# --description--

Um ladrão rouba um açougue, onde ele pode escolher entre alguns itens.

O ladrão sabe os pesos e os preços de cada um dos itens. Como ele tem uma mochila com um limite máximo de peso que ele pode carregar, ele quer selecionar os itens que farão com que ele tenha o máximo de lucro. Ele pode cortar os itens. O item tem um preço reduzido após o corte, que é proporcional ao preço original em razão da proporção das massas. Isso significa que metade de um item tem metade do preço original.

# --instructions--

Escreva uma função que recebe um array de objetos representando os itens disponíveis no açougue. Cada objeto tem 3 atributos: nome, peso e valor. A função também recebe o peso máximo como parâmetro. A função deve retornar o valor máximo possível. Além disso, o peso total dos itens selecionados não deve exceder o peso máximo.

# --hints--

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 10)` deve retornar `257.875`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 12)` deve retornar `295.05405405405406`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 15)` deve retornar `349.3783783783784`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 22)` deve retornar `459.5263157894737`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 24)` deve retornar `478.4736842105263`.

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
