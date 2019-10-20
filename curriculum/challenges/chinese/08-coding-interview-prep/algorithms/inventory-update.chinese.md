---
id: a56138aff60341a09ed6c480
title: Inventory Update
challengeType: 5
videoUrl: ''
localeTitle: 库存更新
---

## Description
<section id="description">比较并更新存储在2D阵列中的库存与新交付的第二个2D阵列。更新当前现有库存物料数量（在<code>arr1</code> ）。如果找不到商品，请将新商品和数量添加到库存数组中。返回的库存数组应按项目的字母顺序排列。如果卡住，请记得使用<a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 函数<code>updateInventory</code>应该返回一个数组。
    testString: 'assert.isArray(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), "The function <code>updateInventory</code> should return an array.");'
  - text: '<code>updateInventory([[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]], [[2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [67, &quot;Bowling Ball&quot;], [7, &quot;Toothpaste&quot;]])</code>应该返回一个长度为6的数组。'
    testString: 'assert.equal(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length, 6, "<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code> should return an array with a length of 6.");'
  - text: '<code>updateInventory([[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]], [[2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [67, &quot;Bowling Ball&quot;], [7, &quot;Toothpaste&quot;]])</code>应返回<code>[[88, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [3, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [5, &quot;Microphone&quot;], [7, &quot;Toothpaste&quot;]]</code> 。'
    testString: 'assert.deepEqual(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]], "<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code> should return <code>[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]</code>.");'
  - text: '<code>updateInventory([[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]], [])</code>应该返回<code>[[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]]</code> 。'
    testString: 'assert.deepEqual(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []), [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], "<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])</code> should return <code>[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]</code>.");'
  - text: '<code>updateInventory([], [[2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [67, &quot;Bowling Ball&quot;], [7, &quot;Toothpaste&quot;]])</code>应该返回<code>[[67, &quot;Bowling Ball&quot;], [2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [7, &quot;Toothpaste&quot;]]</code> 。'
    testString: 'assert.deepEqual(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]], "<code>updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code> should return <code>[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]</code>.");'
  - text: '<code>updateInventory([[0, &quot;Bowling Ball&quot;], [0, &quot;Dirty Sock&quot;], [0, &quot;Hair Pin&quot;], [0, &quot;Microphone&quot;]], [[1, &quot;Hair Pin&quot;], [1, &quot;Half-Eaten Apple&quot;], [1, &quot;Bowling Ball&quot;], [1, &quot;Toothpaste&quot;]])</code>应返回<code>[[1, &quot;Bowling Ball&quot;], [0, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [1, &quot;Half-Eaten Apple&quot;], [0, &quot;Microphone&quot;], [1, &quot;Toothpaste&quot;]]</code> 。'
    testString: 'assert.deepEqual(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]), [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]], "<code>updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])</code> should return <code>[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
