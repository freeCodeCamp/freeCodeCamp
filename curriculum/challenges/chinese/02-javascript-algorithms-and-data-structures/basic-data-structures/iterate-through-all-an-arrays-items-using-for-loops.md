---
id: 587d7b7b367417b2b2512b15
title: 使用 For 循环迭代数组的所有项
challengeType: 1
forumTopicId: 301161
---

# --description--

在进行与数组有关的编程时，我们有时需要遍历数组的所有元素来找出我们需要的元素，或者对数组执行特定的操作。JavaScript 提供了几个内置的方法，它们以不同的方式遍历数组来获得不同的结果（如`every()`、`forEach()`、`map()`等等）。而简单的`for`循环不仅能实现这些功能，而且相比之下也更灵活。

请看以下例子：

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
// 返回 [12, 14, 80]
```

这个函数使用一个`for`循环来遍历一个数组，逐一对其中的元素进行测试。我们用这个方法简单地以编程的方式找出了数组中大于`10`的元素，并返回了一个包含这些元素的数组。

# --instructions--

我们已经定义了一个`filteredArray`函数，它接受一个嵌套的数组参数`arr`以及一个`elem`参数，并要返回一个新数组。`arr`数组中的数组可能包含`elem`元素，也可能不包含。请修改该函数，用一个`for`循环来做筛选，使函数返回一个由`arr`中不包含`elem`的数组组成的新数组。

# --hints--

`filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)`应该返回`[ [10, 8, 3], [14, 6, 23] ]`

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

`filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2)`应返回`[ ["flutes", 4] ]`

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

`filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter")`应该返回`[ ["amy", "beth", "sam"] ]`

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

`filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)`应该返回`[ ]`

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

`filteredArray`函数应该使用`for`循环

```js
assert.notStrictEqual(filteredArray.toString().search(/for/), -1);
```

# --solutions--

