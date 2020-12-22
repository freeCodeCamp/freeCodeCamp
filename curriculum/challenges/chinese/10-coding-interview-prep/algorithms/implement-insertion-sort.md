---
id: 587d8259367417b2b2512c86
title: 实现插入排序
challengeType: 1
videoUrl: ''
---

# --description--

我们将看到的下一个排序方法是插入排序。此方法通过在列表的开头构建排序数组来工作。它以第一个元素开始排序数组。然后它检查下一个元素并将其向后交换到已排序的数组，直到它处于排序位置。它继续遍历列表并将新项目向后交换到已排序的部分，直到它到达结尾。该算法在平均和最差情况下具有二次时间复杂度。 **说明：** 编写一个函数`insertionSort` ，它将一个整数数组作为输入，并按照从最小到最大的排序顺序返回这些整数的数组。 **注意：**  
我们从幕后调用这个功能;我们使用的测试数组在编辑器中被注释掉了。尝试记录`array`以查看您的排序算法！

# --hints--

`insertionSort`是一个函数。

```js
assert(typeof insertionSort == 'function');
```

`insertionSort`返回一个排序数组（从最小到最大）。

```js
assert(
  isSorted(
    insertionSort([
      1,
      4,
      2,
      8,
      345,
      123,
      43,
      32,
      5643,
      63,
      123,
      43,
      2,
      55,
      1,
      234,
      92
    ])
  )
);
```

`insertionSort`返回一个除订单外没有变化的数组。

```js
assert.sameMembers(
  insertionSort([
    1,
    4,
    2,
    8,
    345,
    123,
    43,
    32,
    5643,
    63,
    123,
    43,
    2,
    55,
    1,
    234,
    92
  ]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`insertionSort`不应使用内置的`.sort()`方法。

```js
assert.strictEqual(code.search(/\.sort\(/), -1);
```

# --solutions--

