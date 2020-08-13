---
id: 5900f3db1000cf542c50feee
challengeType: 5
title: 'Problem 111: Primes with runs'
videoUrl: ''
localeTitle: 问题111：运行的Primes
---

## Description
<section id="description">考虑到包含重复数字的4位数素数，很明显它们不能全部相同：1111可被11整除，2222可被22整除，依此类推。但是有九个4位数的素数包含三个素数：1117,1151,1171,1181,1511,1811,2111,4111,8111我们将说M（n，d）表示n-的最大重复数位数。数字素数，其中d是重复数字，N（n，d）表示这些素数的数量，S（n，d）表示这些素数的总和。所以M（4,1）= 3是4位数的素数的最大重复位数，其中一个是重复的数字，有N（4,1）= 9个这样的素数，这些素数的总和是S （4,1）= 22275.事实证明，对于d = 0，只能使M（4,0）= 2个重复数字，但是存在N（4,0）= 13个这样的情况。同样地，我们获得了4位素数的以下结果。 <p>数字，d M（4，d）N（4，d）S（4，d）0 2 13 67061 1 3 9 22275 2 3 1 2221 3 3 12 46214 4 3 2 8888 5 3 1 5557 6 3 1 6661 7 3 9 57863 8 3 1 8887 9 3 7 48073 </p><p>对于d = 0到9，所有S（4，d）的总和是273700.求所有S（10，d）的总和。 </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler111()</code>应返回612407567715。
    testString: assert.strictEqual(euler111(), 612407567715);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler111() {
  // Good luck!
  return true;
}

euler111();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
