---
id: 5cc0bd7a49b71cb96132e54c
title: 使用遞歸來創建一個數字序列
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

接着上一個挑戰，有另外一個機會來用遞歸函數解決問題。

# --instructions--

已經定義好了 `rangeOfNumbers` 函數，包含兩個參數。 函數應該返回一個連續數字數組，`startNum` 參數開始 `endNum` 參數截止。 開始的數字小於或等於截止數字。 函數必需遞歸調用自身，不能使用任意形式的循環。 要考慮到 `startNum` 和 `endNum` 相同的情況。

# --hints--

函數應該返回一個數組。

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

不能包含循環語句（`for` 或者 `while` 或者高階函數比如 `forEach`、`map`、`filter` 或者 `reduce`）。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` 應該使用遞歸函數（調用自身）來完成這個挑戰。

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` 應該返回 `[1, 2, 3, 4, 5]`。

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` 應該返回 `[6, 7, 8, 9]`。

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` 應該返回 `[4]`。

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

不應使用全局變量來緩存數組。

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
