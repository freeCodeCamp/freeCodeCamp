---
id: 587d7da9367417b2b2512b67
title: 使用 concat 而不是 push 将元素添加到数组的末尾
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

函数式编程就是创建和使用具有不变性的函数。

上一个挑战介绍了 `concat` 方法，这是一种在不改变原始数组的前提下，将数组组合成一个新数组的方法。 将 `concat` 方法与 `push` 方法做比较。 `push` 将一个元素添加到调用它的数组的末尾，这样会改变该数组。 举个例子：

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` 的值被修改为 `[1, 2, 3, 4, 5, 6]`，这不是函数编程方式。

`concat` 方法可以将新项目添加到数组末尾，而不附带改变数组。

# --instructions--

修改 `nonMutatingPush` 函数，用 `concat` 将 `newItem` 添加到 `original` 末尾，而不改变 `original` 或 `newItem` 数组。 该函数应返回一个数组。

# --hints--

应该使用 `concat` 方法。

```js
assert(code.match(/\.concat/g));
```

不能使用 `push` 方法。

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

不能改变 `first` 数组。

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

不能改变 `second` 数组。

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` 应返回 `[1, 2, 3, 4, 5]`。

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
