---
id: 587d7da9367417b2b2512b67
title: 使用 concat 而不是 push 将元素添加到数组的末尾
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

函数式编程就是创建和使用具有不变性的函数。

The last challenge introduced the `concat` method as a way to merge arrays into a new array without mutating the original arrays. 将 `concat` 方法与 `push` 方法做比较。 `push` adds items to the end of the same array it is called on, which mutates that array. 举个例子：

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` would have a modified value of `[1, 2, 3, 4, 5, 6]`, which is not the functional programming way.

`concat` offers a way to merge new items to the end of an array without any mutating side effects.

# --instructions--

Change the `nonMutatingPush` function so it uses `concat` to merge `newItem` to the end of `original` without mutating `original` or `newItem` arrays. 该函数应返回一个数组。

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
