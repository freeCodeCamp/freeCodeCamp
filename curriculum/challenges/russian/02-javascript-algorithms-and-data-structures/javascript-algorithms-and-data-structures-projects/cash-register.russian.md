---
id: aa2e6f85cab2ab736c9a9b24
title: Cash Register
isRequired: true
challengeType: 5
forumTopicId: 16012
localeTitle: Кассовый аппарат
---

## Description
<section id='description'>
<code>checkCashRegister()</code> функцию ящика <code>checkCashRegister()</code> которая принимает цену покупки в качестве первого аргумента ( <code>price</code> ), платеж как второй аргумент ( <code>cash</code> ) и денежный ящик ( <code>cid</code> ) в качестве третьего аргумента. <code>cid</code> - это 2D-массив, в котором доступна доступная валюта. Функция <code>checkCashRegister()</code> всегда должна возвращать объект со <code>status</code> ключом <code>change</code> . Return <code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code> если сумма в ящике меньше, чем требуемое изменение, или если вы не можете вернуть точное изменение. Return <code>{status: &quot;CLOSED&quot;, change: [...]}</code> с наличным ящиком в качестве значения для <code>change</code> ключа, если оно равно требуемому изменению. В противном случае верните <code>{status: &quot;OPEN&quot;, change: [...]}</code> , с внесением изменений в монеты и счета, отсортированные в порядке наивысшего и наименьшего, в качестве значения ключа <code>change</code> . Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код. <table class="table table-striped"><tbody><tr><th> Валютная единица </th><th> Количество </th></tr><tr><td> пенс </td><td> 0,01 долл. США (PENNY) </td></tr><tr><td> никель </td><td> $ 0,05 (NICKEL) </td></tr><tr><td> дайм </td><td> $ 0.1 (DIME) </td></tr><tr><td> четверть </td><td> 0,25 долл. США (КВАРТАЛ) </td></tr><tr><td> доллар </td><td> $ 1 (ДОЛЛАР) </td></tr><tr><td> Пять долларов </td><td> $ 5 (ПЯТЬ) </td></tr><tr><td> Десять долларов </td><td> 10 долларов США (TEN) </td></tr><tr><td> Двадцать долларов </td><td> 20 долларов США (ДВАДЦАТЬ) </td></tr><tr><td> Одна сотня долларов </td><td> 100 долларов США (ОДНА СТО) </td></tr></tbody></table>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])</code> should return an object.
    testString: assert.deepEqual(Object.prototype.toString.call(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])), '[object Object]');
  - text: '<code>checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])</code> should return <code>{status: "OPEN", change: [["QUARTER", 0.5]]}</code>.'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["QUARTER", 0.5]]});'
  - text: '<code>checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])</code> should return <code>{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}</code>.'
    testString: 'assert.deepEqual(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]});'
  - text: '<code>checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])</code> should return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code>.'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []});'
  - text: '<code>checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])</code> should return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code>.'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []});'
  - text: '<code>checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])</code> should return <code>{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}</code>.'
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
var denom = [
    { name: 'ONE HUNDRED', val: 100},
    { name: 'TWENTY', val: 20},
    { name: 'TEN', val: 10},
    { name: 'FIVE', val: 5},
    { name: 'ONE', val: 1},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.1},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
 var output = {status: null, change: []};
 var change = cash - price;
 var register = cid.reduce(function(acc, curr) {
 acc.total += curr[1];
 acc[curr[0]] = curr[1];
 return acc;
 }, {total: 0});
 if(register.total === change) {
 output.status = 'CLOSED';
 output.change = cid;
 return output;
 }
 if(register.total < change) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 var change_arr = denom.reduce(function(acc, curr) {
 var value = 0;
 while(register[curr.name] > 0 && change >= curr.val) {
 change -= curr.val;
 register[curr.name] -= curr.val;
 value += curr.val;
 change = Math.round(change * 100) / 100;
 }
 if(value > 0) {
 acc.push([ curr.name, value ]);
 }
 return acc;
 }, []);
 if(change_arr.length < 1 || change > 0) {
 output.status = 'INSUFFICIENT_FUNDS';
 return output;
 }
 output.status = 'OPEN';
 output.change = change_arr;
 return output;
}
```

</section>
