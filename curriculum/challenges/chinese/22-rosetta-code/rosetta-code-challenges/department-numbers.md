---
id: 59f40b17e79dbf1ab720ed7a
title: 部门编号
challengeType: 1
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

There is a highly organized city that has decided to assign a number to each of their departments:

<ul>
  <li>Police department</li>
  <li>环卫部</li>
  <li>消防局</li>
</ul>

每个部门可以有一个介于 1 和 7（含）之间的数字。

三个部门编号必须是唯一的（彼此不同）并且必须加起来为数字 12。

警察局长不喜欢奇数，希望他的部门有一个偶数。

# --instructions--

编写一个程序，将所有有效组合输出为一个数组。

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

# --hints--

`combinations` 应该是一个函数。

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)` 应该返回一个数组。

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` 应该返回一个长度为 14 的数组。

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` 应该返回所有有效的组合。

```js
assert.deepEqual(combinations(nums, total), result);
```

# --seed--

## --after-user-code--

```js
const nums = [1, 2, 3, 4, 5, 6, 7];
const total = 12;
const len = 14;
const result = [
  [2, 3, 7],
  [2, 4, 6],
  [2, 6, 4],
  [2, 7, 3],
  [4, 1, 7],
  [4, 2, 6],
  [4, 3, 5],
  [4, 5, 3],
  [4, 6, 2],
  [4, 7, 1],
  [6, 1, 5],
  [6, 2, 4],
  [6, 4, 2],
  [6, 5, 1]
];
```

## --seed-contents--

```js
function combinations(possibleNumbers, total) {

  return true;
}
```

# --solutions--

```js
function combinations(possibleNumbers, total) {
  let firstNumber;
  let secondNumber;
  let thirdNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thirdNumber = total - firstNumber - secondNumber;

          if (thirdNumber !== firstNumber && thirdNumber !== secondNumber && possibleNumbers.includes(thirdNumber)) {
            allCombinations.push([firstNumber, secondNumber, thirdNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
