---
id: 59f40b17e79dbf1ab720ed7a
title: 部門編號
challengeType: 1
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

There is a highly organized city that has decided to assign a number to each of their departments:

<ul>
  <li>Police department</li>
  <li>環衛部</li>
  <li>消防局</li>
</ul>

每個部門可以有一個介於 1 和 7（含）之間的數字。

三個部門編號必須是唯一的（彼此不同）並且必須加起來爲數字 12。

警察局長不喜歡奇數，希望他的部門有一個偶數。

# --instructions--

編寫一個程序，將所有有效組合輸出爲一個數組。

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

# --hints--

`combinations` 應該是一個函數。

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)` 應該返回一個數組。

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` 應該返回一個長度爲 14 的數組。

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` 應該返回所有有效的組合。

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
