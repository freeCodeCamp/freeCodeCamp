---
id: 587d7b8a367417b2b2512b4c
title: >-
  通过 rest 参数解构
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

在解构数组的某些情况下，我们可能希望将剩下的元素放进另一个数组里面。

以下代码的结果与使用 `Array.prototype.slice()` 类似：

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

控制台将显示 `1, 2` 和 `[3, 4, 5, 7]`。

变量 `a` 和 `b` 分别接收数组的第一个和第二个值。 之后，因为 rest 语法，`arr` 以数组形式接收了剩余的值。 rest 参数只能对数组列表最后的元素起作用。 这意味着你不能使用 rest 语法来省略原数组最后一个元素、截取中间的元素作为子数组。

# --instructions--

使用一个带有 rest 语法的解构赋值来模拟 `Array.prototype.slice()` 的行为。 `removeFirstTwo()` 应该返回原始数组 `list` 的子数组，前两个元素被省略。

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` 应该返回 `[3, 4, 5]`。

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` 不应该修改 `list`。

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

不应该使用 `Array.slice()`。

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
