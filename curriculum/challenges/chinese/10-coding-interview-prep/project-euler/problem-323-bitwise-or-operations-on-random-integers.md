---
id: 5900f4b01000cf542c50ffc2
challengeType: 5
title: 'Problem 323: Bitwise-OR operations on random integers'
videoUrl: ''
localeTitle: 问题323：对随机整数进行按位或运算
---

## Description
<section id="description">
令y0，y1，y2，...是随机无符号32位整数的序列
（即0≤yi <232，每个值的可能性均等）。
对于序列xi，给出以下递归：x0 = 0且
xi = xi-1 | yi-1，对于i>0。（|是按位或运算符）
可以看出，对于所有i≥N，最终将存在一个索引N，使得xi = 232 -1（所有比特的位模式）。

找到N的期望值。
将答案四舍五入到小数点后10位。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler323()</code>应该返回6.3551758451。
    testString: assert.strictEqual(euler323(), 6.3551758451);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler323() {
  // Good luck!
  return true;
}

euler323();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
