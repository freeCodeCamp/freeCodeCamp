---
id: 59f40b17e79dbf1ab720ed7a
title: 部门编号
challengeType: 5
videoUrl: ''
dashedName: department-numbers
---

# --description--

<p>有一个高度组织化的城市决定为每个部门分配一个号码： </p>警察局环卫部门消防部门<p>每个部门的数字可以在1到7之间（含）。 </p><p>这三个部门编号应该是唯一的（彼此不同），并且必须加起来为12。 </p><p>警察局长不喜欢奇怪的号码，并希望他的部门有一个偶数。 </p>任务： <p>编写一个输出所有有效组合的程序： </p><p> [2,3,7] </p><p> [2,4,6] </p><p> [2,6,4] </p><p> [2,7,3] </p><p> [4,1,7] </p><p> [4,2,6] </p><p> [4,3,5] </p><p> [4,5,3] </p><p> [4,6,2] </p><p> [4,7,1] </p><p> [6,1,5] </p><p> [6,2,4] </p><p> [6,4,2] </p><p> [6,5,1] </p>

# --hints--

`combinations`应该是一个功能。

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)`应该返回一个数组。

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)`应返回长度为14的数组。

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)`应返回所有有效组合。

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
  let thridNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thridNumber = total - firstNumber - secondNumber;

          if (thridNumber !== firstNumber && thridNumber !== secondNumber && possibleNumbers.includes(thridNumber)) {
            allCombinations.push([firstNumber, secondNumber, thridNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
