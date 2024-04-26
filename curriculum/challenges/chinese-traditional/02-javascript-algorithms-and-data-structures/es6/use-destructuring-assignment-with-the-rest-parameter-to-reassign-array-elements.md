---
id: 587d7b8a367417b2b2512b4c
title: >-
  通過 rest 參數解構
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

在解構數組的某些情況下，我們可能希望將剩下的元素放進另一個數組裏面。

以下代碼的結果與使用 `Array.prototype.slice()` 類似：

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

控制檯將顯示 `1, 2` 和 `[3, 4, 5, 7]`。

變量 `a` 和 `b` 分別接收數組的第一個和第二個值。 之後，因爲 rest 語法，`arr` 以數組形式接收了剩餘的值。 rest 參數只能對數組列表最後的元素起作用。 這意味着你不能使用 rest 語法來省略原數組最後一個元素、截取中間的元素作爲子數組。

# --instructions--

使用一個帶有 rest 語法的解構賦值來模擬 `Array.prototype.slice()` 的行爲。 `removeFirstTwo()` 應該返回原始數組 `list` 的子數組，前兩個元素被省略。

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` 應該返回 `[3, 4, 5]`。

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` 不應該修改 `list`。

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

不應該使用 `Array.slice()`。

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

You should use the rest syntax.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
