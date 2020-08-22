---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
localeTitle: 使用 For 循环遍历数组
---

## Description
<section id='description'>
迭代输出一个数组的每个元素是 JavaScript 中的常见需求，<code>for</code>循环可以做到这一点。下面的代码将输出数组 <code>arr</code>的每个元素到控制台：

```js
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

记住数组的索引从零开始的，这意味着数组的最后一个元素的下标是：数组的长度 -1。我们这个循环的 <dfn>条件</dfn>是<code>i < arr.length</code>，当<code>i</code>的值为 长度 -1 的时候循环就停止了。在这个例子中，最后一个循环是 i === 4，也就是说，当i的值等于arr.length时，结果输出 6。
</section>

## Instructions
<section id='instructions'>
声明并初始化一个变量<code>total</code>为<code>0</code>。使用<code>for</code>循环，使得<code>total</code>的值为<code>myArr</code>的数组中的每个元素的值的总和。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>total</code>应该被声明, 并且初始化值为 0。
    testString: assert(code.match(/var.*?total\s*=\s*0.*?;/));
  - text: <code>total</code>应该等于 20。
    testString: assert(total === 20);
  - text: 你应该使用<code>for</code>循环在<code>myArr</code>中遍历。
    testString: assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/));
  - text: 不能直接把<code>total</code>设置成 20。
    testString: assert(!code.match(/total[\s\+\-]*=\s*(\d(?!\s*[;,])|[1-9])/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

```

</div>

### After Test
<div id='js-teardown'>

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()

```

</div>

</section>

## Solution
<section id='solution'>

```js
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

</section>
