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
    testString: 'assert(typeof bubbleSort == "function", "<code>bubbleSort</code> is a function.");'
  - text: <code>bubbleSort</code>返回一个已排序的数组（从最小到最大）。
    testString: 'assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>bubbleSort</code> returns a sorted array (least to greatest).");'
  - text: <code>bubbleSort</code>返回一个除订单外没有变化的数组。
    testString: 'assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>bubbleSort</code> returns an array that is unchanged except for order.");'
  - text: <code>bubbleSort</code>不应使用内置的<code>.sort()</code>方法。
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>bubbleSort</code> should not use the built-in <code>.sort()</code> method.");'

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
</section>

在抽象层面，使用冒泡排序（显然足够）对数据进行排序。

当然，问题在于，在正常情况下，冒泡排序几乎是排序很多东西的最糟糕方式。如果您只需要很少的项目进行排序，这有助于弥补其中的许多缺陷，但即便如此，插入排序（仅针对一个示例）几乎总是更快。

因此，这会产生一个更有趣的问题：是否存在一种情况，即冒泡排序将是一种很好的算法选择（尽管已经注意到，在大多数情况下，它非常糟糕？

答案结果是肯定的 - 事实上，在某些情况下，您可以证明泡沫排序是已知的最佳排序，并保证在最佳排序的恒定因素范围内。

在这种情况下，这种情况相当狭窄，并且不太可能在任何合理的当前机器中出现 - 但它们确实存在。

具体来说，考虑一个机器，其中要排序的数据包含在磁带上的文件中。您只能从头到尾读取/写入该文件。您的计算机没有实际的RAM，只有两个寄存器。因此，您可以从磁带中读取两个项目，并将它们保持原样，或者操纵这两个记录。处理完一对记录后，可以将磁带向前移动一条记录，然后从那里开始查看两条记录。当你到达文件的末尾时，你可以将磁带倒回到开头并根据需要重复播放（但是你不能倒回任意数量 - 一旦你开始倒带，你总是一直回到开头）。

对于这种有限的情况，冒泡排序是已知的最佳排序算法（并且在可能的最佳算法的常数因子内）。

泡泡排序在计算机科学中广为人知，因为基本上第一本真正的计算机科学论文甚至试图做一些事情，例如证明算法的计算复杂性，或者显示出最佳状态，恰好是关于冒泡排序的。
