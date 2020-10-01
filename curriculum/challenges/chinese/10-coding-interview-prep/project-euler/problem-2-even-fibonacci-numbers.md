---
id: 5900f36e1000cf542c50fe81
challengeType: 5
videoUrl: ''
title: 问题2：斐波那契数列中的偶数
---

## Description
<section id='description'>
在斐波那契数列中，每一项都是前两项的和（第一项和第二项除外）。如果从1和2开始，前十项是：
<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>
求出斐波那契数列中值是偶数的项的和，至第<code>n</code>项（包括第<code>n</code>项）为止。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fiboEvenSum(10)</code>应该返回188。
    testString: 'assert.strictEqual(fiboEvenSum(10), 188, "<code>fiboEvenSum(10)</code> should return 188.");'
  - text: <code>fiboEvenSum(23)</code>应该返回60696。
    testString: 'assert.strictEqual(fiboEvenSum(23), 60696, "<code>fiboEvenSum(23)</code> should return 60696.");'
  - text: <code>fiboEvenSum(43)</code>应该返回1485607536。
    testString: 'assert.strictEqual(fiboEvenSum(43), 1485607536, "<code>fiboEvenSum(43)</code> should return 1485607536.");'
  - text: 您的函数未使用我们的测试值返回正确的结果。
    testString: 'assert.strictEqual(fiboEvenSum(18), 3382, "Your function is not returning the correct result using our tests values.");'
  - text: 您的函数应返回<code>even</code>数值。
    testString: 'assert.equal(fiboEvenSum(31) % 2 === 0, true, "Your function should return an <code>even</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fiboEvenSum(n) {
  // You can do it!
  return true;
}

fiboEvenSum(10);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
