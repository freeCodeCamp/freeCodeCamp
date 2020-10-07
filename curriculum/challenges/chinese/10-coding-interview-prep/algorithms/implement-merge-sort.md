---
id: 587d825c367417b2b2512c8f
challengeType: 1
videoUrl: ''
title: 实现合并排序
---

## Description
<section id="description">另一种非常常见的中间排序算法是合并排序。像快速排序一样，合并排序也使用分而治之的递归方法对数组进行排序。它利用了这样一个事实：只要每个数组首先排序，就可以相对容易地对两个数组进行排序。但是我们只从一个数组作为输入开始，那么我们如何从中获得两个排序的数组呢？好吧，我们可以递归地将原始输入分成两部分，直到我们到达具有一个项目的数组的基本情况。单项数组是自然排序的，因此我们可以开始组合。这个组合将展开拆分原始数组的递归调用，最终生成所有元素的最终排序数组。然后，合并排序的步骤是： <strong>1）</strong>递归地将输入数组拆分为一半，直到产生仅具有一个元素的子数组。 <strong>2）将</strong>每个排序的子数组合并在一起以产生最终的排序数组。合并排序是一种有效的排序方法，时间复杂度为<i>O（nlog（n））</i> 。该算法很受欢迎，因为它性能高且易于实现。顺便说一句，这将是我们在此处介绍的最后一种排序算法。但是，稍后在关于树数据结构的部分中，我们将描述堆排序，这是另一种在其实现中需要二进制堆的有效排序方法。 <strong>说明：</strong>编写一个函数<code>mergeSort</code> ，它以整数数组作为输入，并按从最小到最大的排序顺序返回这些整数的数组。实现这一点的一个好方法是编写一个函数，例如<code>merge</code> ，它负责合并两个已排序的数组，另一个函数，例如<code>mergeSort</code> ，它负责递归，生成单项数组以提供给merge。祝你好运！ <strong>注意：</strong> <br>我们从幕后调用这个功能;我们使用的测试数组在编辑器中被注释掉了。尝试记录<code>array</code>以查看您的排序算法！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mergeSort</code>是一个函数。
    testString: assert(typeof mergeSort == 'function');
  - text: <code>mergeSort</code>返回一个排序数组（从最小到最大）。
    testString: assert(isSorted(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>mergeSort</code>返回一个除订单外没有变化的数组。
    testString: assert.sameMembers(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>mergeSort</code>不应使用内置的<code>.sort()</code>方法。
    testString: assert.strictEqual(code.search(/\.sort\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mergeSort(array) {
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
