---
id: 587d825a367417b2b2512c89
challengeType: 1
videoUrl: ''
title: 实施快速排序
---

## Description
<section id="description">在这里，我们将继续讨论中间排序算法：快速排序。快速排序是对数组进行排序的一种有效的，递归的分而治之的方法。在此方法中，在原始数组中选择了一个数据透视值。然后将该数组分成两个小于和大于数值的子数组。然后，我们在两个子阵列上结合递归调用快速排序算法的结果。这一直持续到达到空或单项数组的基本情况，我们返回。递归调用的展开将返回已排序的数组。快速排序是一种非常有效的排序方法，平均提供<i>O（nlog（n））</i>性能。它也相对容易实现。这些属性使其成为一种流行且有用的排序方法。 <strong>说明：</strong>编写一个函数<code>quickSort</code> ，它将整数数组作为输入，并按从最小到最大的排序顺序返回这些整数的数组。虽然枢轴值的选择很重要，但任何支点都可以用于我们的目的。为简单起见，可以使用第一个或最后一个元素。 <strong>注意：</strong> <br>我们从幕后调用这个功能;我们使用的测试数组在编辑器中被注释掉了。尝试记录<code>array</code>以查看您的排序算法！ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quickSort</code>是一个功能。
    testString: assert(typeof quickSort == 'function');
  - text: <code>quickSort</code>返回一个排序数组（从最小到最大）。
    testString: assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])));
  - text: <code>quickSort</code>返回一个除订单外没有变化的数组。
    testString: assert.sameMembers(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]);
  - text: <code>quickSort</code>不应使用内置的<code>.sort()</code>方法。
    testString: assert.strictEqual(code.search(/\.sort\(/), -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickSort(array) {
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
