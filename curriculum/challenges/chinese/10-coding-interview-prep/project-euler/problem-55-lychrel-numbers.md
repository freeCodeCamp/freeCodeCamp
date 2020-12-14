---
id: 5900f3a31000cf542c50feb6
challengeType: 5
videoUrl: ''
title: 问题55：Lychrel数字
---

## Description
<section id="description">如果我们采取47，反向并添加，47 + 74 = 121，这是回文。并非所有数字都如此迅速地产生回文。例如，349 + 943 = 1292,1292 + 2921 = 4213 4213 + 3124 = 7337也就是说，349进行了三次迭代以到达回文。虽然还没有人证明这一点，但据认为有些数字，如196，从未产生回文。通过反向和添加过程从不形成回文的数字称为Lychrel数。由于这些数字的理论性质，并且出于这个问题的目的，我们将假设一个数字是Lychrel，直到证明不是这样。另外，对于每万个低于一万的数字，你将得到（i）在不到五十次迭代中成为回文，或者（ii）没有一个，具有所有存在的计算能力，到目前为止已经管理到将它映射到回文结构。事实上，10677是第一个在产生回文之前需要超过50次迭代的数字：4668731596684224866951378664（53次迭代，28位数）。令人惊讶的是，有一些回文数字本身就是Lychrel数字;第一个例子是4994.有多少Lychrel数字在<code>num</code>以下？注：2007年4月24日略微修改了措辞，以强调Lychrel数的理论性质。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countLychrelNumbers(1000)</code>应该返回13。
    testString: assert.strictEqual(countLychrelNumbers(1000), 13);
  - text: <code>countLychrelNumbers(5000)</code>应该返回76。
    testString: assert.strictEqual(countLychrelNumbers(5000), 76);
  - text: <code>countLychrelNumbers(10000)</code>应该返回249。
    testString: assert.strictEqual(countLychrelNumbers(10000), 249);
  - text: 你的函数应该计算所有Lychrel数。
    testString: assert.strictEqual(countLychrelNumbers(3243), 39);
  - text: 您的函数应该通过所有测试用例。
    testString: assert.strictEqual(countLychrelNumbers(7654), 140);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countLychrelNumbers(num) {
  // Good luck!
  return true;
}

countLychrelNumbers(10000);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
