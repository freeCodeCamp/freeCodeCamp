---
id: 5900f4ab1000cf542c50ffbd
challengeType: 5
videoUrl: ''
title: 问题318：2011个九
---

## Description
<section id="description">
考虑实数√2+√3。
当我们计算√2+√3的偶数幂时
我们得到：
（√2+√3）2 = 9.898979485566356 ...
（√2+√3）4 = 97.98979485566356 ...
（√2+√3）6 = 969.998969071069263 ...
（√2+√3）8 = 9601.99989585502907 ...
（√2+√3）10 = 95049.999989479221 ...
（√2+√3）12 = 940897.9999989371855 ...
（√2+√3）14 = 9313929.99999989263 ...
（√2+√3）16 = 92198401.99999998915 ...

这些幂的小数部分开头的连续九个数字似乎没有减少。
实际上，可以证明（√2+√3）2n的小数部分对于大n接近1。


考虑形式为√p+√q的所有实数，其中p和q为正整数，且p <q，使得小数部分
（√p+√q）的2n对于大n接近1。


令C（p，q，n）为（√p+√q）2n的小数部分开头的连续九个数字。


令N（p，q）为n的最小值，以使C（p，q，n）≥2011。


求p + q≤2011的∑N（p，q）。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler318()</code>应该返回709313889。
    testString: assert.strictEqual(euler318(), 709313889);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler318() {
  // Good luck!
  return true;
}

euler318();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
