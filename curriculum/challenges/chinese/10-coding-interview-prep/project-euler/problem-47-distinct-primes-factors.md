---
id: 5900f39c1000cf542c50feae
challengeType: 5
videoUrl: ''
title: 问题47：不同的素数因素
---

## Description
<section id="description">前两个连续数字有两个不同的素数因子是： <div style="padding-left: 4em;"> 14 = 2×7 </div><div style="padding-left: 4em;"> 15 = 3×5 </div>前三个连续数字有三个不同的素因子： <div style="padding-left: 4em;"> 644 =2²×7×23 </div><div style="padding-left: 4em;"> 645 = 3×5×43 </div><div style="padding-left: 4em;"> 646 = 2×17×19 </div>找到前四个连续的整数，每个整数有四个不同的素数因子。这些数字中的第一个是什么？ </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>distinctPrimeFactors(2, 2)</code>应该返回14。'
    testString: assert.strictEqual(distinctPrimeFactors(2, 2), 14);
  - text: '<code>distinctPrimeFactors(3, 3)</code>应该返回644。'
    testString: assert.strictEqual(distinctPrimeFactors(3, 3), 644);
  - text: '<code>distinctPrimeFactors(4, 4)</code>应该返回134043。'
    testString: assert.strictEqual(distinctPrimeFactors(4, 4), 134043);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
  // Good luck!
  return true;
}

distinctPrimeFactors(4, 4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
