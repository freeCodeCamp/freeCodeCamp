---
id: 594810f028c0303b75339acf
challengeType: 5
videoUrl: ''
title: 阿克曼功能
---

## Description
<section id="description"><p> Ackermann函数是递归函数的典型示例，尤其值得注意的是它不是原始递归函数。它的值增长非常快，其调用树的大小也是如此。 </p><p> Ackermann函数通常定义如下： </p> $$ A（m，n）= \ begin {cases} n + 1＆\ mbox {if} m = 0 \\ A（m-1,1）＆\ mbox {if} m&gt; 0 \ mbox {和} n = 0 \\ A（m-1，A（m，n-1））＆\ mbox {if} m&gt; 0 \ mbox {和} n&gt; 0. \ end {cases} $$ <p>它的论点永远不会消极，它总是终止。编写一个返回$ A（m，n）$的值的函数。任意精度是首选（因为函数增长如此之快），但不是必需的。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>ack</code>是一个功能。
    testString: assert(typeof ack === 'function');
  - text: '<code>ack(0, 0)</code>应该返回1。'
    testString: assert(ack(0, 0) === 1);
  - text: '<code>ack(1, 1)</code>应该返回3。'
    testString: assert(ack(1, 1) === 3);
  - text: '<code>ack(2, 5)</code>应该返回13。'
    testString: assert(ack(2, 5) === 13);
  - text: '<code>ack(3, 3)</code>应该返回61。'
    testString: assert(ack(3, 3) === 61);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function ack (m, n) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
