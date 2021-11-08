---
id: 587d7da9367417b2b2512b6a
title: 在不更改原始数组的前提下返回排序后的数组
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--

`sort` 方法会产生改变原始数组中元素顺序的副作用。 换句话说，它会改变数组的位置。 避免这种情况的一种方法是先将空数组连接到正在排序的数组上（记住 `slice` 和 `concat` 返回一个新数组），再用`sort`方法。

# --instructions--

在 `nonMutatingSort` 函数中使用 `sort` 方法对数组中的元素按升序进行排列。 函数不能改变 `globalArray` 变量，应返回一个新数组。

# --hints--

应该使用 `sort` 方法。

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

`globalArray` 变量不应该改变。

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`nonMutatingSort(globalArray)` 应该返回 `[2, 3, 5, 6, 9]`。

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

`nonMutatingSort(globalArray)` 不应被硬编码。

```js
assert(!nonMutatingSort.toString().match(/\[.*?[23569].*?\]/gs));
```

函数应该返回一个新数组，而不是传递给它的数组。

```js
assert(nonMutatingSort(globalArray) !== globalArray);
```

`nonMutatingSort([1, 30, 4, 21, 100000])` 应该返回 `[1, 4, 21, 30, 100000]`

```js
assert(JSON.stringify(nonMutatingSort([1, 30, 4, 21, 100000])) ===
    JSON.stringify([1, 4, 21, 30, 100000]))
```

`nonMutatingSort([140000, 104, 99])` 应该返回 `[99, 104, 140000]`。

```js
assert(JSON.stringify(nonMutatingSort([140000, 104, 99])) ===
    JSON.stringify([99, 104, 140000]))
```

# --seed--

## --seed-contents--

```js
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}

nonMutatingSort(globalArray);
```

# --solutions--

```js
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a,b) => a-b);
}
```
