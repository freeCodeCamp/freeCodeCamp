---
id: 5a23c84252665b21eecc7ed3
title: Задача пакування рюкзака/Безперервна
challengeType: 1
forumTopicId: 323654
dashedName: knapsack-problemcontinuous
---

# --description--

Злодій грабує м'ясну лавку і може вибрати декілька предметів.

Злодій знає вагу і ціну кожного предмета. Оскільки його рюкзак має обмеження максимальної ваги, він хоче вибрати предмети так, щоб отримати максимальний прибуток. Він може розрізати предмети; після різання ціна товару знизиться пропорційно початковій ціні за співвідношенням мас. Тобто половина товару коштуватиме вдвічі дешевше від початкової вартості.

# --instructions--

Напишіть функцію, яка приймає масив об'єктів, що становлять товари, доступні в магазині. Кожен об'єкт має назву, вагу та вартість. У параметрах функції також вказується максимальна вага. Функція повинна повернути максимально можливе значення, а загальна вага вибраних елементів не повинна перевищувати максимальну вагу.

# --hints--

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 10)` має повертати`257.875`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 12)` має повертати`295.05405405405406`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 15)` має повертати`349.3783783783784`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 22)` має повертати`459.5263157894737`.

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

`knapContinuous([{ "weight":3.8, "value":36, name:"beef" }, { "weight":5.4, "value":43, name:"pork" }, { "weight":3.6, "value":90, name:"ham" }, { "weight":2.4, "value":45, name:"greaves" }, { "weight":4.0, "value":30, name:"flitch" }, { "weight":2.5, "value":56, name:"brawn" }, { "weight":3.7, "value":67, name:"welt" }, { "weight":3.0, "value":95, name:"salami" }, { "weight":5.9, "value":98, name:"sausage" }], 24)` має повертати`478.4736842105263`.

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
