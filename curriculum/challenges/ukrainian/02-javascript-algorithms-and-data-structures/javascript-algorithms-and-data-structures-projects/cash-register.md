---
id: aa2e6f85cab2ab736c9a9b24
title: Касовий апарат
challengeType: 5
forumTopicId: 16012
dashedName: cash-register
---

# --description--

Розробіть функцію касового апарату `checkCashRegister()`, яка приймає ціну покупки як перший аргумент (`price`), оплату як другий аргумент (`cash`) та суму готівки в касі як третій аргумент (`cid`).

`cid` – це 2D масив, який містить список доступного обігу.

Функція `checkCashRegister()` завжди повинна повертати об’єкт з ключем `status` та ключем `change`.

Поверніть `{status: "INSUFFICIENT_FUNDS", change: []}`, якщо сума готівки в касі менша за здачу, або ви не можете віддати здачу.

Поверніть `{status: "CLOSED", change: [...]}` з сумою в касі як значення ключа `change`, якщо вона дорівнює здачі.

В іншому випадку, поверніть `{status: "OPEN", change: [...]}` зі здачею в монетах і банкнотах, в порядку від найбільшої до найменшої, як значення ключа `change`.

<table class='table table-striped'><tbody><tr><th>Грошовий обіг</th><th>Сума</th></tr><tr><td>Пенні</td><td>$0.01 (ПЕННІ)</td></tr><tr><td>Нікель</td><td>$0.05 (НІКЕЛЬ)</td></tr><tr><td>Дайм</td><td>$0.1 (ДАЙМ)</td></tr><tr><td>Чверть</td><td>$0.25 (ЧВЕРТЬ)</td></tr><tr><td>Долар</td><td>$1 (ОДИН)</td></tr><tr><td>П’ять доларів</td><td>$5 (П’ЯТЬ)</td></tr><tr><td>Десять доларів</td><td>$10 (ДЕСЯТЬ)</td></tr><tr><td>Двадцять доларів</td><td>$20 (ДВАДЦЯТЬ)</td></tr><tr><td>Сто доларів</td><td>$100 (СТО)</td></tr></tbody></table>

Подивіться нижче на приклад масиву з сумою в касі:

```js
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
```

# --hints--

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` має повертати об’єкт.

```js
assert.deepEqual(
  Object.prototype.toString.call(
    checkCashRegister(19.5, 20, [
      ['PENNY', 1.01],
      ['NICKEL', 2.05],
      ['DIME', 3.1],
      ['QUARTER', 4.25],
      ['ONE', 90],
      ['FIVE', 55],
      ['TEN', 20],
      ['TWENTY', 60],
      ['ONE HUNDRED', 100]
    ])
  ),
  '[object Object]'
);
```

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` має повертати `{status: "OPEN", change: [["QUARTER", 0.5]]}`.

```js
assert.deepEqual(
  checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ]),
  { status: 'OPEN', change: [['QUARTER', 0.5]] }
);
```

`checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` має повертати `{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}`.

```js
assert.deepEqual(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ]),
  {
    status: 'OPEN',
    change: [
      ['TWENTY', 60],
      ['TEN', 20],
      ['FIVE', 15],
      ['ONE', 1],
      ['QUARTER', 0.5],
      ['DIME', 0.2],
      ['PENNY', 0.04]
    ]
  }
);
```

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` має повертати `{status: "INSUFFICIENT_FUNDS", change: []}`.

```js
assert.deepEqual(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]),
  { status: 'INSUFFICIENT_FUNDS', change: [] }
);
```

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` має повертати `{status: "INSUFFICIENT_FUNDS", change: []}`.

```js
assert.deepEqual(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]),
  { status: 'INSUFFICIENT_FUNDS', change: [] }
);
```

`checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` має повертати `{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}`.

```js
assert.deepEqual(
  checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]),
  {
    status: 'CLOSED',
    change: [
      ['PENNY', 0.5],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ]
  }
);
```

# --seed--

## --seed-contents--

```js
function checkCashRegister(price, cash, cid) {
  let change;
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
```

# --solutions--

```js
const denom = [
  { name: "ONE HUNDRED", val: 100 },
  { name: "TWENTY", val: 20 },
  { name: "TEN", val: 10 },
  { name: "FIVE", val: 5 },
  { name: "ONE", val: 1 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 },
];

function checkCashRegister(price, cash, cid) {
  const output = { status: null, change: [] };
  let change = cash - price;
  const register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  const change_arr = denom.reduce(function (acc, curr) {
    let value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}
```
