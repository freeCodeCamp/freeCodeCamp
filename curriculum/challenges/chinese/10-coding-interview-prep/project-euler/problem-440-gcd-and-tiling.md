---
id: 5900f5241000cf542c510037
challengeType: 5
videoUrl: ''
title: 问题440：GCD和平铺
---

## Description
<section id="description">
我们要完全平铺一块长度为n且高度为1的板，上面有1×2块或1×1块，上面有一个十进制数字：

例如，以下是铺砌长度为n = 8的板的一些方法：

令T（n）是如上所述的平铺长度为n的板的方式的数量。

例如，T（1）= 10且T（2）= 101。

令S（L）为1≤a，b，c≤L的三次和∑a，b，c gcd（T（ca），T（cb））。
例如：
S（2）= 10444
S（3）= 1292115238446807016106539989
S（4）模数987898789 = 670616280。

找出S（2000）mod 987898898。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler440()</code>应该返回970746056。
    testString: assert.strictEqual(euler440(), 970746056);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler440() {
  // Good luck!
  return true;
}

euler440();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
