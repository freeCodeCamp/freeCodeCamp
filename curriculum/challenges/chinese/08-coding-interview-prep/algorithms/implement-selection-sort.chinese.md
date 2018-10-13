---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
videoUrl: ''
localeTitle: 实施选择排序
---

## Description
<section id="description">这里我们将实现选择排序。选择排序的工作原理是选择列表中的最小值并使用列表中的第一个值进行交换。然后它从第二个位置开始，选择剩余列表中的最小值，并将其与第二个元素交换。它继续遍历列表并交换元素，直到它到达列表的末尾。现在列表已排序。在所有情况下，选择排序都具有二次时间复杂度。 <strong>说明</strong> ：编写一个函数<code>selectionSort</code> ，它将一个整数数组作为输入，并按照从最小到最大的排序顺序返回这些整数的数组。 <strong>注意：</strong> <br>我们从幕后调用这个功能;我们使用的测试数组在编辑器中被注释掉了。尝试记录<code>array</code>以查看您的排序算法！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selectionSort</code>是一个函数。
    testString: 'assert(typeof selectionSort == "function", "<code>selectionSort</code> is a function.");'
  - text: <code>selectionSort</code>返回一个排序数组（从最小到最大）。
    testString: 'assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>selectionSort</code> returns a sorted array (least to greatest).");'
  - text: <code>selectionSort</code>返回一个除订单外没有变化的数组。
    testString: 'assert.sameMembers(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>selectionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>selectionSort</code>不应使用内置的<code>.sort()</code>方法。
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>selectionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selectionSort(array) {
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

选择最低元素需要扫描所有n个元素（这需要进行n-1次比较），然后将其交换到第一个位置。
 
找到下一个最低元素需要扫描剩余的n - 1个元素，依此类推，
=（n-1）+（n-2）+ ... + 2 + 1 = n（n-1）/ 2
= O（n ^ 2）比较。

最佳案例：O（n）^ 2
最坏情况：O（n）^ 2
平均情况：O（n）^ 2
最坏的案例空间复杂性：O（1）
