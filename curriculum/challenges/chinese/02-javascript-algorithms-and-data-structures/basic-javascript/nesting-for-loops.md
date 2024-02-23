---
id: 56533eb9ac21ba0edf2244e1
title: 循环嵌套
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6GHM'
forumTopicId: 18248
dashedName: nesting-for-loops
---

# --description--

如果你有一个二维数组，可以使用相同的逻辑，先遍历外面的数组，再遍历里面的子数组。 下面是一个例子：

```js
const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

这里一次输出了 `arr` 中的每个子元素。 提示，对于内部循环，我们可以通过 `arr[i]` 的 `.length` 来获得子数组的长度，因为 `arr[i]` 本身就是一个数组。

# --instructions--

修改函数 `multiplyAll`，获得 `arr` 内部数组的每个数字相乘的结果 product。

# --hints--

`multiplyAll([[1], [2], [3]])` 应该返回 `6`

```js
assert(multiplyAll([[1], [2], [3]]) === 6);
```

`multiplyAll([[1, 2], [3, 4], [5, 6, 7]])` 应该返回 `5040`

```js
assert(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
  ]) === 5040
);
```

`multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])` 应该返回 `54`

```js
assert(
  multiplyAll([
    [5, 1],
    [0.2, 4, 0.5],
    [3, 9]
  ]) === 54
);
```

# --seed--

## --seed-contents--

```js
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
```

# --solutions--

```js
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```
