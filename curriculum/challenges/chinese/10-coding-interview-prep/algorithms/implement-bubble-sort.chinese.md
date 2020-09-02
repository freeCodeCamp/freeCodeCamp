---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
videoUrl: ''
localeTitle: 实施冒泡排序
---

## Description
<section id="description">这是排序算法的几个挑战中的第一个。给定一组未排序的项目，我们希望能够返回已排序的数组。我们将看到几种不同的方法来实现这一点，并学习这些不同方法之间的一些权衡。虽然大多数现代语言都有这样的操作的内置排序方法，但了解一些常见的基本方法并了解如何实现它们仍然很重要。在这里我们将看到冒泡排序。冒泡排序方法从未排序数组的开头开始，并向末端“冒泡”未排序的值，遍历数组直到它完全排序。它通过比较相邻的项目并在它们出现故障时交换它们来完成此操作。该方法继续循环遍历数组，直到没有发生交换，此时数组被排序。该方法需要通过阵列进行多次迭代，并且对于平均和最差情况，具有二次时间复杂度。虽然简单，但在大多数情况下通常都是不切实际的。 <strong>说明：</strong>编写一个函数<code>bubbleSort</code> ，它将整数数组作为输入，并按从最小到最大的排序顺序返回这些整数的数组。 <strong>注意：</strong> <br>我们从幕后调用这个功能;我们使用的测试数组在编辑器中被注释掉了。尝试记录<code>array</code>以查看您的排序算法！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>bubbleSort</code>是一个功能。
    testString: assert(typeof bubbleSort == 'function');
  - text: <code>bubbleSort</code>返回一个已排序的数组（从最小到最大）。
    testString: assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>bubbleSort</code>返回一个除订单外没有变化的数组。
    testString: assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>bubbleSort</code>不应使用内置的<code>.sort()</code>方法。
    testString: assert.strictEqual(code.search(/\.sort\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bubbleSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
