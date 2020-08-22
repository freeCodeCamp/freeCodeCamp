---
id: aa2e6f85cab2ab736c9a9b24
title: Cash Register
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 收银机
---

## Description
<section id="description">设计一个收银抽屉功能<code>checkCashRegister()</code> ，它接受购买价格作为第一个参数（ <code>price</code> ），支付作为第二个参数（ <code>cash</code> ），以及现金抽屉（ <code>cid</code> ）作为第三个参数。 <code>cid</code>是列出可用货币的2D数组。 <code>checkCashRegister()</code>函数应始终返回带有<code>status</code>键和<code>change</code>键的对象。返回<code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code>如果出现的现金少于到期的更改，或者如果您无法返回确切的更改。返回<code>{status: &quot;CLOSED&quot;, change: [...]}</code>使用cash-in-drawer作为密钥<code>change</code>的值，如果它等于更改到期。否则，返回<code>{status: &quot;OPEN&quot;, change: [...]}</code> ，以硬币和账单中的更改到期，按从最高到最低的顺序排序，作为<code>change</code>密钥的值。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 <table class="table table-striped"><tbody><tr><th>货币单位</th><th>量</th></tr><tr><td>一分钱</td><td> 0.01美元（PENNY） </td></tr><tr><td>镍</td><td> 0.05美元（NICKEL） </td></tr><tr><td>十分钱</td><td> 0.1美元（DIME） </td></tr><tr><td> 25美分硬币</td><td> 0.25美元（季） </td></tr><tr><td>美元</td><td> 1美元（美元） </td></tr><tr><td>五美元</td><td> 5美元（五） </td></tr><tr><td>十美元</td><td> 10美元（10日） </td></tr><tr><td>二十美元</td><td> 20美元（二十美元） </td></tr><tr><td>一百元</td><td> 100美元（一百） </td></tr></tbody></table></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 1.01], [&quot;NICKEL&quot;, 2.05], [&quot;DIME&quot;, 3.1], [&quot;QUARTER&quot;, 4.25], [&quot;ONE&quot;, 90], [&quot;FIVE&quot;, 55], [&quot;TEN&quot;, 20], [&quot;TWENTY&quot;, 60], [&quot;ONE HUNDRED&quot;, 100]])</code>应该返回一个物体。'
    testString: assert.deepEqual(Object.prototype.toString.call(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])), '[object Object]');
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 1.01], [&quot;NICKEL&quot;, 2.05], [&quot;DIME&quot;, 3.1], [&quot;QUARTER&quot;, 4.25], [&quot;ONE&quot;, 90], [&quot;FIVE&quot;, 55], [&quot;TEN&quot;, 20], [&quot;TWENTY&quot;, 60], [&quot;ONE HUNDRED&quot;, 100]])</code>应返回<code>{status: &quot;OPEN&quot;, change: [[&quot;QUARTER&quot;, 0.5]]}</code> 。'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["QUARTER", 0.5]]});'
  - text: '<code>checkCashRegister(3.26, 100, [[&quot;PENNY&quot;, 1.01], [&quot;NICKEL&quot;, 2.05], [&quot;DIME&quot;, 3.1], [&quot;QUARTER&quot;, 4.25], [&quot;ONE&quot;, 90], [&quot;FIVE&quot;, 55], [&quot;TEN&quot;, 20], [&quot;TWENTY&quot;, 60], [&quot;ONE HUNDRED&quot;, 100]])</code>应返回<code>{status: &quot;OPEN&quot;, change: [[&quot;TWENTY&quot;, 60], [&quot;TEN&quot;, 20], [&quot;FIVE&quot;, 15], [&quot;ONE&quot;, 1], [&quot;QUARTER&quot;, 0.5], [&quot;DIME&quot;, 0.2], [&quot;PENNY&quot;, 0.04]]}</code> 。'
    testString: 'assert.deepEqual(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 0.01], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 0], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]])</code>应返回<code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code> 。'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []});'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 0.01], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 1], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]])</code>应返回<code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code> 。'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []});'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 0.5], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 0], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]])</code>应返回<code>{status: &quot;CLOSED&quot;, change: [[&quot;PENNY&quot;, 0.5], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 0], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]]}</code> 。'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]});'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
