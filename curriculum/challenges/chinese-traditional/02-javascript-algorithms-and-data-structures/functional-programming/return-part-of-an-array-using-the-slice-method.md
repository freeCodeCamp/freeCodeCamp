---
id: 587d7b90367417b2b2512b65
title: 使用 slice 方法返回數組的一部分
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

`slice` 方法可以從已有數組中返回指定元素。 它接受兩個參數，第一個規定從何處開始選取，第二個規定從何處結束選取（不包括該元素）。 如果沒有傳參，則默認爲從數組的開頭開始到結尾結束，這是複製整個數組的簡單方式。 `slice` 返回一個新數組，不會修改原始數組。

舉個例子：

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` 值爲 `["Dog", "Tiger"]`

# --instructions--

在 `sliceArray` 函數中使用 `slice` 方法，給出 `beginSlice` 和 `endSlice` 索引，返回 `anim` 數組的一部分。 這個函數應返回一個數組。

# --hints--

應該使用 `slice` 方法。

```js
assert(code.match(/\.slice/g));
```

不能改變 `inputAnim` 變量。

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` 應返回 `["Dog", "Tiger"]`。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` 應返回 `["Cat"]`。

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` 應返回 `["Dog", "Tiger", "Zebra"]`。

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
