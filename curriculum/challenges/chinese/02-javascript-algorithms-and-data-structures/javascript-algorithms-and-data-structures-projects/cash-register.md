---
id: aa2e6f85cab2ab736c9a9b24
title: 计算找零
challengeType: 5
forumTopicId: 16012
dashedName: cash-register
---

# --description--

请编写一个用于收银机的函数 `checkCashRegister()`：它的第一个参数为售价 `price`、第二个参数为支付金额 `cash`、第三个参数为收银机內的金额 `cid`。

`cid` 是包含货币面值的二维数组。

函数 `checkCashRegister()` 应返回含有 `status` 属性和 `change` 属性的对象。

如果收银机內的金额少于应找回的零钱数，或者你无法返回确切的数目时，返回 `{status: "INSUFFICIENT_FUNDS", change: []}`。

如果收银机內的金额恰好等于应找回的零钱数，返回 `{status: "CLOSED", change: [...]}`，其中 `change` 的属性值就是收银机內的金额。

否则，返回 `{status: "OPEN", change: [...]}`，其中 `change` 键值是应找回的零钱数，并将找零的面值由高到低排序。

<table class='table table-striped'><tbody><tr><th>货币单位 Unit</th><th>面值</th></tr><tr><td>Penny</td><td>0.01 美元（PENNY）</td></tr><tr><td>Nickel</td><td>0.05 美元（NICKEL）</td></tr><tr><td>Dime</td><td>0.1 美元（DIME）</td></tr><tr><td>Quarter</td><td>0.25 美元（QUARTER）</td></tr><tr><td>Dollar</td><td>1 美元（ONE）</td></tr><tr><td>Five Dollars</td><td>5 美元（五）</td></tr><tr><td>Ten Dollars</td><td>10 美元（TEN）</td></tr><tr><td>Twenty Dollars</td><td>20 美元（TWENTY）</td></tr><tr><td>One-hundred Dollars</td><td>100美元（ONE HUNDRED）</td></tr></tbody></table>

下面的抽屉里现金数组示例：

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

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` 应返回一个对象。

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

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` 应返回 `{status: "OPEN", change: [["QUARTER", 0.5]]}`。

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

`checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` 应返回 `{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}`。

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

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` 应返回 `{status: "INSUFFICIENT_FUNDS", change: []}`。

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

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` 应返回 `{status: "INSUFFICIENT_FUNDS", change: []}`。

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

`checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` 应返回 `{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}`。

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
