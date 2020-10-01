---
id: 5900f46d1000cf542c50ff7f
challengeType: 5
videoUrl: ''
title: 问题255：圆角平方根
---

## Description
<section id="description">我们将正整数n的圆角平方根定义为n的平方根，四舍五入到最接近的整数。 <p>以下过程（基本上是Heron的方法适用于整数运算）找到n的舍入平方根：设d是数字n的位数。如果d为奇数，则设置x0 = 2×10（d-1）/ 2。如果d是偶数，则设置x0 = 7×10（d-2）/ 2。重复： </p><p>直到xk + 1 = xk。 </p><p>举个例子，让我们找到n = 4321.n的圆角平方根有4个数字，所以x0 = 7×10（4-2）/2 = 70.由于x2 = x1，我们在这里停止。因此，经过两次迭代后，我们发现4321的圆角平方根为66（实际平方根为65.7343137 ......）。 </p><p>使用此方法时所需的迭代次数非常低。例如，我们可以找到5位整数的圆角平方根（10,000≤n≤99,999），平均迭代次数为3.2102888889（平均值四舍五入到10位小数）。 </p><p>使用上述过程，找到14位数字的圆角平方根（1013≤n&lt;1014）所需的平均迭代次数是多少？将您的答案四舍五入到小数点后10位。 </p><p>注意：符号⌊x⌋和⌈x⌉分别代表楼层功能和天花板功能。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler255()</code>应返回4.447401118。
    testString: assert.strictEqual(euler255(), 4.447401118);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler255() {
  // Good luck!
  return true;
}

euler255();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
