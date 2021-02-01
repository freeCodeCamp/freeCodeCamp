---
id: 587d825b367417b2b2512c8c
title: 用最小堆实现堆排序
challengeType: 1
videoUrl: ''
dashedName: implement-heap-sort-with-a-min-heap
---

# --description--

现在我们可以添加和删除元素，让我们看看堆可用于的一些应用程序。堆通常用于实现优先级队列，因为它们始终将最大值或最小值的项存储在第一个位置。此外，它们还用于实现称为堆排序的排序算法。我们将在这里看到如何做到这一点。堆排序使用最小堆，与最大堆相反。最小堆始终将最小值的元素存储在根位置。堆排序通过获取未排序的数组，将数组中的每个项目添加到最小堆中，然后将最小堆中的每个项目提取到新数组中。最小堆结构确保新数组将包含至少最大顺序的原始项。这是最有效的排序算法之一，具有O（nlog（n））的平均和最差情况性能。说明：让我们用最小堆实现堆排序。您可以在此处调整最大堆代码。使用insert，remove和sort方法创建一个MinHeap对象。 sort方法应返回最小堆中从最小到最大排序的所有元素的数组。

# --hints--

存在MinHeap数据结构。

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    }
    return typeof test == 'object';
  })()
);
```

MinHeap有一个名为insert的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.insert == 'function';
  })()
);
```

MinHeap有一个名为remove的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

MinHeap有一个名为sort的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    return typeof test.sort == 'function';
  })()
);
```

sort方法返回一个数组，其中包含按排序顺序添加到最小堆的所有项。

```js
assert(
  (function () {
    var test = false;
    if (typeof MinHeap !== 'undefined') {
      test = new MinHeap();
    } else {
      return false;
    }
    test.insert(3);
    test.insert(12);
    test.insert(5);
    test.insert(10);
    test.insert(1);
    test.insert(27);
    test.insert(42);
    test.insert(57);
    test.insert(5);
    var result = test.sort();
    return isSorted(result);
  })()
);
```

# --seed--

## --seed-contents--

```js
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// Generate a randomly filled array
function createRandomArray(size = 5){
  let a = new Array(size);
  for(let i = 0; i < size; i++)
    a[i] = Math.floor(Math.random() * 100);
  
  return a;
}
const array = createRandomArray(25);

var MinHeap = function() {
  // Only change code below this line
  
  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
