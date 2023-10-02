---
id: aa2e6f85cab2ab736c9a9b24
title: Registrierkasse
challengeType: 5
forumTopicId: 16012
dashedName: cash-register
---

# --description--

Entwirf eine Registrierkassenfunktion `checkCashRegister()`, die als erstes Argument den Kaufpreis (`price`), als zweites Argument die Bezahlung (`cash`) und als drittes Argument den Kassenbestand (`cid`) akzeptiert.

`cid` ist ein 2D-Array mit den verfügbaren Währungen.

Die Funktion `checkCashRegister()` sollte immer ein Objekt mit einem Key `status` und einem Key `change` zurückgeben.

Gib `{status: "INSUFFICIENT_FUNDS", change: []}` zurück, wenn der Kassenbestand geringer ist als das fällige Wechselgeld, oder wenn du das genaue Wechselgeld nicht zurückgeben kannst.

Gib `{status: "CLOSED", change: [...]}` als Wert für den Key `change` zurück, wenn der Kassenbestand gleich dem fälligen Wechselgeld ist.

Andernfalls wird `{status: "OPEN", change: [...]}`, mit dem fälligen Wechselgeld in Münzen und Scheinen, sortiert in der höchsten bis niedrigsten Reihenfolge, als Wert des Keys `change` zurückgegeben.

<table class='table table-striped'><tbody><tr><th>Währungseinheit</th><th>Anzahl</th></tr><tr><td>Penny</td><td>$0.01 (PENNY)</td></tr><tr><td>Nickel</td><td>$0.05 (NICKEL)</td></tr><tr><td>Dime</td><td>$0.1 (DIME)</td></tr><tr><td>Quarter</td><td>$0.25 (QUARTER)</td></tr><tr><td>Dollar</td><td>$1 (ONE)</td></tr><tr><td>Fünf Dollar</td><td>$5 (FIVE)</td></tr><tr><td>Zehn Dollar</td><td>$10 (TEN)</td></tr><tr><td>Zwanzig Dollar</td><td>$20 (TWENTY)</td></tr><tr><td>Einhundert Dollar</td><td>$100 (ONE HUNDRED)</td></tr></tbody></table>

Unten findest du ein Beispiel für Wechselgeld:

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

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` sollte ein Objekt zurückgeben.

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

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` sollte`{status: "OPEN", change: [["QUARTER", 0.5]]}` zurückgeben.

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

`checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` sollte`{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}` zurückgeben.

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

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` sollte`{status: "INSUFFICIENT_FUNDS", change: []}` zurückgeben.

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

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` sollte`{status: "INSUFFICIENT_FUNDS", change: []}` zurückgeben.

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

`checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` sollte`{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}` zurückgeben.

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
