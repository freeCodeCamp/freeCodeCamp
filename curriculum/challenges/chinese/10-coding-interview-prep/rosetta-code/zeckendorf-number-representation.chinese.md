---
title: Zeckendorf number representation
id: 594810f028c0303b75339ad6
challengeType: 5
videoUrl: ''
localeTitle: 勾选村号码表示
---

## Description
<section id="description"><p>正如数字可以用位置表示法表示为十（十进制）或二（二进制）的幂的倍数之和;所有正整数都可以表示为Fibonacci系列的不同成员的一次或零次的总和。 </p><p>回想一下，第一六个不同斐波那契数是： <code>1, 2, 3, 5, 8, 13</code> 。十进制数11可以用位置表示法写成<code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code>或<code>010100</code> ，其中列表示乘以序列的特定成员。前导零被丢弃，因此十进制11变为<code>10100</code> 。 </p><p> 10100不是从斐波那契数字中得到11的唯一方法，但是<code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code>或010011也代表十进制11。对于真正的Zeckendorf数字还有一个额外的限制，即“不能使用两个连续的Fibonacci数”，这导致了前一个独特的解决方案。 </p><p>任务：编写一个函数，按顺序生成并返回前N个Zeckendorf数的数组。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: zeckendorf必须是功能
    testString: assert.equal(typeof zeckendorf, 'function');
  - text: 你的<code>zeckendorf</code>函数应该返回正确的答案
    testString: assert.deepEqual(answer, solution20);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeckendorf(n) {
  // good luck!
}

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
