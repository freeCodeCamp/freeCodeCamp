---
id: a789b3483989747d63b0e427
title: 找出多個數組中的最大數字
challengeType: 1
forumTopicId: 16042
dashedName: return-largest-numbers-in-arrays
---

# --description--

請返回一個數組，該數組由參數中每個子數組中的最大數字組成。 爲簡單起見，給出的數組總會包含 4 個子數組。

別忘了，你可以通過 for 循環遍歷一個數組，並用 `arr[i]` 的寫法來訪問數組中的元素。

# --hints--

`largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])` 應返回一個數組。

```js
assert(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]).constructor === Array
);
```

`largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])` 應返回 `[27, 5, 39, 1001]`。

```js
assert.deepEqual(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]),
  [27, 5, 39, 1001]
);
```

`largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])` 應返回 `[9, 35, 97, 1000000]`。

```js
assert.deepEqual(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ]),
  [9, 35, 97, 1000000]
);
```

`largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])` 應返回 `[25, 48, 21, -3]`。

```js
assert.deepEqual(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ]),
  [25, 48, 21, -3]
);
```

# --seed--

## --seed-contents--

```js
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

# --solutions--

```js
function largestOfFour(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
