---
id: 587d7b90367417b2b2512b65
title: 使用 slice 方法返回数组的一部分
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

`slice` 方法可以从已有数组中返回指定元素。 它接受两个参数，第一个规定从何处开始选取，第二个规定从何处结束选取（不包括该元素）。 如果没有传参，则默认为从数组的开头开始到结尾结束，这是复制整个数组的简单方式。 `slice` 返回一个新数组，不会修改原始数组。

举个例子：

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` 值为 `["Dog", "Tiger"]`

# --instructions--

在 `sliceArray` 函数中使用 `slice` 方法，给出 `beginSlice` 和 `endSlice` 索引，返回 `anim` 数组的一部分。 这个函数应返回一个数组。

# --hints--

应该使用 `slice` 方法。

```js
assert(code.match(/\.slice/g));
```

不能改变 `inputAnim` 变量。

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` 应返回 `["Dog", "Tiger"]`。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` 应返回 `["Cat"]`。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` 应返回 `["Dog", "Tiger", "Zebra"]`。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
