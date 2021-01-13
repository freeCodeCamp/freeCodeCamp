---
id: 587d7b8a367417b2b2512b4c
title: 使用解构赋值配合 rest 操作符来重新分配数组元素
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

在解构数组的某些情况下，我们可能希望将剩下的元素放进另一个数组里面。

以下代码的结果与使用`Array.prototype.slice()`相同：

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

变量`a`与`b`分别获取了数组的前两个元素的值。之后，因为`rest`操作符的存在，`arr`获取了原数组剩余的元素的值，并构成了一个新的数组。 `rest`操作只能对数组列表最后的元素起作用。这意味着你不能使用`rest`操作符来截取原数组中间元素的子数组。

# --instructions--

使用解构赋值以及`rest`操作符来进行一个`Array.prototype.slice`相同的操作。使得`arr`是原数组`source`除开前两个元素的子数组。

# --hints--

`arr`应该为`[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

没有使用`Array.slice()`。

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

使用了解构赋值。

```js
assert(
  code.replace(/\s/g, '').match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
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
