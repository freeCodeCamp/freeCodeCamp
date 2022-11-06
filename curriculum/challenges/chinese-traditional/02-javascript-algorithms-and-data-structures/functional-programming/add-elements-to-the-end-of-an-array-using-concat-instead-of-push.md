---
id: 587d7da9367417b2b2512b67
title: 使用 concat 而不是 push 將元素添加到數組的末尾
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

函數式編程就是創建和使用具有不變性的函數。

上一個挑戰介紹了 `concat` 方法，這是一種在不改變原始數組的前提下，將數組組合成一個新數組的方法。 將 `concat` 方法與 `push` 方法做比較。 `push` 將一個元素添加到調用它的數組的末尾，這樣會改變該數組。 舉個例子：

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` 的值被修改爲 `[1, 2, 3, 4, 5, 6]`，這不是函數編程方式。

`concat` 方法可以將新項目添加到數組末尾，而不附帶改變數組。

# --instructions--

修改 `nonMutatingPush` 函數，用 `concat` 將 `newItem` 添加到 `original` 末尾，而不改變 `original` 或 `newItem` 數組。 該函數應返回一個數組。

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
