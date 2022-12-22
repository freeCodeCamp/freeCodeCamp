---
id: 587d7b8a367417b2b2512b4c
title: >-
  Destructuring via rest elements
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

变量 `a` 和 `b` 分别接收数组的第一个和第二个值。 After that, because of the rest syntax presence, `arr` gets the rest of the values in the form of an array. rest 操作符只能对数组列表最后的元素起作用。 As in, you cannot use the rest syntax to catch a subarray that leaves out the last element of the original array.

# --instructions--

Use a destructuring assignment with the rest syntax to emulate the behavior of `Array.prototype.slice()`. `removeFirstTwo()` 应该返回原始数组 `list` 的子数组，前两个元素被省略。

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` 应该返回 `[3, 4, 5]`。

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` 不应该修改 `list`。

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

不应该使用 `Array.slice()`。

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

应该对 `list` 进行解构赋值。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
