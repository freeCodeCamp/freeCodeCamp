---
id: 587d7b7b367417b2b2512b15
title: 使用 for 循环遍历数组中的全部元素
challengeType: 1
forumTopicId: 301161
dashedName: iterate-through-all-an-arrays-items-using-for-loops
---

# --description--

使用数组时，我们经常需要遍历数组的所有元素来找出我们需要的一个或多个元素，抑或是对数组执行一些特定的操作。 JavaScript 为我们提供了几个内置的方法，它们以不同的方式遍历数组，以便我们可以用于不同的场景（如 `every()`、`forEach()`、`map()` 等等）。 然而，最简单的 `for` 循环不仅能实现上述这些方法的功能，而且相比之下也会更加灵活。

请看以下的例子：

```js
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
```

在这个函数中，我们用一个 `for` 循环来遍历数组，逐一对其中的元素进行判断。 通过上面的代码，我们可以找出数组中大于 `10` 的所有元素，并返回一个包含这些元素的新数组 `[12, 14, 80]`。

# --instructions--

我们已经定义了 `filteredArray` 函数，它接受一个嵌套的数组 `arr` 和一个 `elem` 作为参数，并要返回一个新数组。 `arr` 数组中嵌套的数组里可能包含 `elem` 元素，也可能不包含。 请修改该函数，用一个 `for` 循环来做筛选，使函数返回一个由 `arr` 中不包含 `elem` 的数组所组成的新数组。

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)` 应返回 `[[10, 8, 3], [14, 6, 23]]`。

```js
assert.deepEqual(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6]
    ],
    18
  ),
  [
    [10, 8, 3],
    [14, 6, 23]
  ]
);
```

`filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)` 应返回 `[["flutes", 4]]`。

```js
assert.deepEqual(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2]
    ],
    2
  ),
  [['flutes', 4]]
);
```

`filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")` 应返回 `[["amy", "beth", "sam"]]`。

```js
assert.deepEqual(
  filteredArray(
    [
      ['amy', 'beth', 'sam'],
      ['dave', 'sean', 'peter']
    ],
    'peter'
  ),
  [['amy', 'beth', 'sam']]
);
```

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)` 应返回 `[]`。

```js
assert.deepEqual(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9]
    ],
    3
  ),
  []
);
```

`filteredArray` 函数中应使用 `for` 循环。

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --seed--

## --seed-contents--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

# --solutions--

```js
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i<arr.length; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
```
