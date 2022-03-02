---
id: aa2e6f85cab2ab736c9a9b24
title: キャッシュレジスター
challengeType: 5
forumTopicId: 16012
dashedName: cash-register
---

# --description--

第 1 引数に購入価格 (`price`)、第 2 引数に支払額 (`cash`)、第 3 引数に現金在高 (`cid`) を受け取るキャッシュレジスタードロワー関数 `checkCashRegister()` を設計してください。

`cid` は、利用可能な通貨を列挙する 2 次元配列です。

`checkCashRegister()` 関数は常に、`status` キーと `change` キーを持つオブジェクトを返す必要があります。

現金在高がお釣りよりも少ない場合、または正確なお釣りを返すことができない場合は、`{status: "INSUFFICIENT_FUNDS", change: []}` を返してください。

現金在高がお釣りと等しい場合は、`{status: "CLOSED", change: [...]}` を返し、現金在高を `change` キーの値として一緒に返してください。

それ以外の場合は、`{status: "OPEN", change: [...]}` を返し、コインや紙幣のお釣りを `change` キーの値として、最大値から最小値の順にソートして一緒に返してください。

<table class='table table-striped'><tbody><tr><th>通貨単位</th><th>金額</th></tr><tr><td>ペニー</td><td>$0.01 (PENNY)</td></tr><tr><td>ニッケル</td><td>$0.05 (NICKEL)</td></tr><tr><td>ダイム</td><td>$0.1 (DIME)</td></tr><tr><td>クォーター</td><td>$0.25 (QUARTER)</td></tr><tr><td>1 ドル札</td><td>$1 (ONE)</td></tr><tr><td>5 ドル札</td><td>$5 (FIVE)</td></tr><tr><td>10 ドル札</td><td>$10 (TEN)</td></tr><tr><td>20 ドル札</td><td>$20 (TWENTY)</td></tr><tr><td>100 ドル札</td><td>$100 (ONE HUNDRED)</td></tr></tbody></table>

キャッシュインドロワー配列の例は以下を参照してください。

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

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` はオブジェクトを返す必要があります。

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

`checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` は `{status: "OPEN", change: [["QUARTER", 0.5]]}` を返す必要があります。

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

`checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])` は `{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}` を返す必要があります。

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

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` は `{status: "INSUFFICIENT_FUNDS", change: []}` を返す必要があります。

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

`checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` は `{status: "INSUFFICIENT_FUNDS", change: []}` を返す必要があります。

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

`checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])` は `{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}` を返す必要があります。

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
