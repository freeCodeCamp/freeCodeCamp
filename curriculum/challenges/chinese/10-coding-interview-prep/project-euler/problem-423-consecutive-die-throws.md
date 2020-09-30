---
id: 5900f5141000cf542c510027
challengeType: 5
title: 'Problem 423: Consecutive die throws'
videoUrl: ''
localeTitle: 问题423：连续死球
---

## Description
<section id="description">
令n为正整数。
一个6面的骰子被抛出n次。 令c为给出相同值的连续抛出的对数。

例如，如果n = 7并且掷骰的值为（1,1,5,6,6,6,3），那么以下连续投掷对将给出相同的值：
（1,1,5,6,6,6,3）
（1,1,5,6,6,6,3）
（1,1,5,6,6,6,3）
因此，对于（1,1,5,6,6,6,3），c = 3。

将C（n）定义为n次抛出6面骰子的结果数，以使c不超过π（n）.1
例如，C（3）= 216，C（4）= 1290，C（11）= 361912500和C（24）= 4727547363281250000。

对于1≤n≤L，将S（L）定义为∑ C（n）。
例如，S（50）mod 1 000 000 007 = 832833871。

求S（50000000）mod 1000000007。

1π表示素数计数函数，即 π（n）是质数≤n的素数。
</section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler423()</code>应该返回653972374。
    testString: assert.strictEqual(euler423(), 653972374);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler423() {
  // Good luck!
  return true;
}

euler423();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
