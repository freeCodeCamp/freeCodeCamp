---
id: 587d7b8a367417b2b2512b4c
title: >-
  使用解構賦值配合 rest 操作符來重新分配數組元素
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

變量 `a` 和 `b` 分別接收數組的第一個和第二個值。 之後，因爲 rest 操作符的存在，`arr` 獲取了原數組剩餘的元素的值。 rest 操作符只能對數組列表最後的元素起作用。 這意味着你不能使用 rest 操作符來截取原數組中間的元素作爲子數組。

# --instructions--

使用解構賦值以及 rest 操作符來進行和 `Array.prototype.slice()` 相同的操作，使 `arr` 是原數組 `source` 除開前兩個元素的子數組。

# --hints--

`arr` 應該是 `[3,4,5,6,7,8,9,10]`。

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` 應該是 `[1,2,3,4,5,6,7,8,9,10]`。

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
```

不應該使用 `Array.slice()`。

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

應該對 `list` 進行解構賦值。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
