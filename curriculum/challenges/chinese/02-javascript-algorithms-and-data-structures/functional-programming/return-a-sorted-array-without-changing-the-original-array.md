---
id: 587d7da9367417b2b2512b6a
title: 在不更改原始数组的前提下返回排序后的数组
challengeType: 1
forumTopicId: 301237
dashedName: return-a-sorted-array-without-changing-the-original-array
---

# --description--

`sort`方法会产生改变原始数组中元素顺序的副作用。换句话说，它会改变数组的位置。避免这种情况的一种方法是先将空数组连接到正在排序的数组上（记住`concat`返回一个新数组），再用`sort`方法。

# --instructions--

在`nonMutatingSort`函数中使用`sort`方法对数组中的元素按升序进行排列。函数不能改变`globalArray`变量，应返回一个新数组。

# --hints--

应该使用`sort`方法。

```js
assert(nonMutatingSort.toString().match(/\.sort/g));
```

应该使用`concat`方法。

```js
assert(JSON.stringify(globalArray) === JSON.stringify([5, 6, 3, 2, 9]));
```

`globalArray`variable 应保持不变。

```js
assert(
  JSON.stringify(nonMutatingSort(globalArray)) ===
    JSON.stringify([2, 3, 5, 6, 9])
);
```

`nonMutatingSort(globalArray)`应返回`[2, 3, 5, 6, 9]`。

```js
assert(!nonMutatingSort.toString().match(/[23569]/g));
```

# --seed--

## --seed-contents--

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line


  // Only change code above this line
}
nonMutatingSort(globalArray);
```

# --solutions--

```js
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort((a,b) => a-b);
  // Only change code above this line
}
nonMutatingSort(globalArray);
```
