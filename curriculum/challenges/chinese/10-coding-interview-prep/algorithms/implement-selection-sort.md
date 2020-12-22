---
id: 587d8259367417b2b2512c85
title: 实施选择排序
challengeType: 1
videoUrl: ''
---

# --description--

这里我们将实现选择排序。选择排序的工作原理是选择列表中的最小值并使用列表中的第一个值进行交换。然后它从第二个位置开始，选择剩余列表中的最小值，并将其与第二个元素交换。它继续遍历列表并交换元素，直到它到达列表的末尾。现在列表已排序。在所有情况下，选择排序都具有二次时间复杂度。 **说明** ：编写一个函数`selectionSort` ，它将一个整数数组作为输入，并按照从最小到最大的排序顺序返回这些整数的数组。 **注意：**  
我们从幕后调用这个功能;我们使用的测试数组在编辑器中被注释掉了。尝试记录`array`以查看您的排序算法！

# --hints--

`selectionSort`是一个函数。

```js
assert(typeof selectionSort == 'function');
```

`selectionSort`返回一个排序数组（从最小到最大）。

```js
assert(
  isSorted(
    selectionSort([
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

`selectionSort`返回一个除订单外没有变化的数组。

```js
assert.sameMembers(
  selectionSort([
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

`selectionSort`不应使用内置的`.sort()`方法。

```js
assert.strictEqual(code.search(/\.sort\(/), -1);
```

# --solutions--

