---
title: Happy numbers
id: 594810f028c0303b75339ad1
challengeType: 5
videoUrl: ''
localeTitle: 快乐的数字
---

## Description
<section id="description"><p>幸福的数字由以下过程定义： </p><p>从任何正整数开始，将数字替换为其数字的平方和，并重复该过程直到数字等于1（它将保持不变），或者它在一个不包括1的循环中无休止地循环。这些数字这个过程在1结束的是幸福的数字，而那些不以1结尾的数字是不愉快的数字。 </p><p>实现一个函数，如果数字是满意的，则返回true，否则返回false。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>happy</code>是一种功能。
    testString: assert(typeof happy === 'function');
  - text: <code>happy(1)</code>应该返回一个布尔值。
    testString: assert(typeof happy(1) === 'boolean');
  - text: <code>happy(1)</code>应该回归真实。
    testString: assert(happy(1));
  - text: <code>happy(2)</code>应该返回虚假。
    testString: assert(!happy(2));
  - text: <code>happy(7)</code>应该回归真实。
    testString: assert(happy(7));
  - text: <code>happy(10)</code>应该回归真实。
    testString: assert(happy(10));
  - text: <code>happy(13)</code>应该回归真实。
    testString: assert(happy(13));
  - text: <code>happy(19)</code>应该回归真实。
    testString: assert(happy(19));
  - text: <code>happy(23)</code>应该回归真实。
    testString: assert(happy(23));
  - text: <code>happy(28)</code>应该回归真实。
    testString: assert(happy(28));
  - text: <code>happy(31)</code>应该回归真实。
    testString: assert(happy(31));
  - text: <code>happy(32)</code>应该回归真实：
    testString: assert(happy(32));
  - text: <code>happy(33)</code>应该返回虚假。
    testString: assert(!happy(33));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function happy (number) {
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
