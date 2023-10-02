---
id: 587d7da9367417b2b2512b66
title: 使用 concat 方法組合兩個數組
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Concatenation</dfn> 意思是將元素連接到尾部。 同理，JavaScript 爲字符串和數組提供了`concat`方法。 對數組來說，在一個數組上調用 `concat` 方法，然後提供另一個數組作爲參數添加到第一個數組末尾。 它返回一個新數組，不會改變任何一個原始數組。 舉個例子：

```js
[1, 2, 3].concat([4, 5, 6]);
```

返回的數組將是 `[1, 2, 3, 4, 5, 6]`。

# --instructions--

在 `nonMutatingConcat` 函數裏使用 `concat`，將 `attach` 拼接到 `original` 尾部。 函數返回拼接後的數組。

# --hints--

應該使用 `concat` 方法。

```js
assert(code.match(/\.concat/g));
```

不應該改變 `first` 數組。

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

不應該改變 `second` 數組。

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` 應該返回 `[1, 2, 3, 4, 5]`。

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
