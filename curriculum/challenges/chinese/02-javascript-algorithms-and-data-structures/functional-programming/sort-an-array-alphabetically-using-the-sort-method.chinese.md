---
id: 587d7da9367417b2b2512b69
title: Sort an Array Alphabetically using the sort Method
challengeType: 1
forumTopicId: 18303
localeTitle: 使用 sort 方法按字母顺序给数组排序
---

## Description
<section id='description'>
<code>sort</code>方法可以根据回调函数对数组元素进行排序。
举个例子：

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]);
// Returns [1, 2, 3, 4, 5]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);
// Returns ['z', 's', 'l', 'h', 'b']
```

JavaScript 的默认排序方法是 Unicode 值顺序排序，有时可能会得到意想不到的结果。所以，建议传入一个回调函数指定数组项目的排序方式，这个回调函数通常叫做 <code>compareFunction</code>，它根据 <code>compareFunction</code> 的返回值决定数组元素的排序方式：
如果两个元素 <code>a</code> 和 <code>b</code>，<code>compareFunction(a,b)</code> 返回一个比 0 小的值，那么 <code>a</code> 会在 <code>b</code> 的前面。
如果两个元素 <code>a</code> 和 <code>b</code>，<code>compareFunction(a,b)</code> 返回一个比 0 大的值，那么 <code>b</code> 会在 <code>a</code> 的前面。
如果两个元素 <code>a</code> 和 <code>b</code>，<code>compareFunction(a,b)</code> 返回等于 0 的值，那么 <code>a</code> 和 <code>b</code> 的位置保持不变。

</section>

## Instructions
<section id='instructions'>
在<code>alphabeticalOrder</code>函数中使用<code>sort</code>方法对<code>arr</code>中的元素按照字母顺序排列。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 应该使用<code>sort</code>方法。
    testString: assert(code.match(/\.sort/g));
  - text: "<code>alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])</code>应返回<code>['a', 'a', 'c', 'd', 'g', 'z']</code>。"
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])) === JSON.stringify(["a", "a", "c", "d", "g", "z"]));
  - text: "<code>alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])</code>应返回<code>['a', 'h', 'm', 'm', 'n', 'x']</code>。"
    testString: assert(JSON.stringify(alphabeticalOrder(["x", "h", "a", "m", "n", "m"])) === JSON.stringify(["a", "h", "m", "m", "n", "x"]));
  - text: "<code>alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])</code>应返回<code>['a', 'a', 'a', 'a', 't', 'x']</code>。"
    testString: assert(JSON.stringify(alphabeticalOrder(["a", "a", "a", "a", "x", "t"])) === JSON.stringify(["a", "a", "a", "a", "t", "x"]));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line


  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

</div>



</section>

## Solution
<section id='solution'>

```js
function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort();
  // Add your code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

</section>
