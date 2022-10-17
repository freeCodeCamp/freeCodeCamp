---
id: 587d7da9367417b2b2512b67
title: 使用 concat 而不是 push 將元素添加到數組的末尾
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

函數式編程就是創建和使用具有不變性的函數。

The last challenge introduced the `concat` method as a way to merge arrays into a new array without mutating the original arrays. 將 `concat` 方法與 `push` 方法做比較。 `push` adds items to the end of the same array it is called on, which mutates that array. 舉個例子：

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` would have a modified value of `[1, 2, 3, 4, 5, 6]`, which is not the functional programming way.

`concat` offers a way to merge new items to the end of an array without any mutating side effects.

# --instructions--

Change the `nonMutatingPush` function so it uses `concat` to merge `newItem` to the end of `original` without mutating `original` or `newItem` arrays. 該函數應返回一個數組。

# --hints--

應該使用 `concat` 方法。

```js
assert(code.match(/\.concat/g));
```

不能使用 `push` 方法。

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

不能改變 `first` 數組。

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

不能改變 `second` 數組。

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingPush([1, 2, 3], [4, 5])` 應返回 `[1, 2, 3, 4, 5]`。

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
