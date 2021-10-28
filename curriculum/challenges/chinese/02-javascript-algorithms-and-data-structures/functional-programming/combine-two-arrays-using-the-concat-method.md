---
id: 587d7da9367417b2b2512b66
title: 使用 concat 方法组合两个数组
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenation</dfn> 意思是将元素连接到尾部。 同理，JavaScript 为字符串和数组提供了`concat`方法。 对数组来说，在一个数组上调用 `concat` 方法，然后提供另一个数组作为参数添加到第一个数组末尾。 它返回一个新数组，不会改变任何一个原始数组。 举个例子：

```js
[1, 2, 3].concat([4, 5, 6]);
```

返回的数组将是 `[1, 2, 3, 4, 5, 6]`。

# --instructions--

在 `nonMutatingConcat` 函数里使用 `concat`，将 `attach` 拼接到 `original` 尾部。 函数返回拼接后的数组。

# --hints--

应该使用 `concat` 方法。

```js
assert(code.match(/\.concat/g));
```

不应该改变 `first` 数组。

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

不应该改变 `second` 数组。

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` 应该返回 `[1, 2, 3, 4, 5]`。

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
```
